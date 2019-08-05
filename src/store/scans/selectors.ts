import { RootState } from 'typesafe-actions';
import { createSelector } from 'reselect';
import { orderBy } from 'lodash';

import { selectUsers } from '../users/selectors';


export const selectScans = (state: RootState) => state.scans;

export const selectSortedBy = createSelector(
  selectScans,
  scans => scans.sortedBy,
);

export const selectSortOrder = createSelector(
  selectScans,
  scans => scans.sortOrder,
);

export const selectScanList = createSelector(
  selectScans,
  selectUsers,
  (scans, users) => scans.scans.map(
    scan => ({
      ...scan,
      scannedByUser: users.find(u => u.id === scan.scannedByUserId),
    }),
  ),
);

export const selectSortedScans = createSelector(
  selectScanList,
  selectSortedBy,
  selectSortOrder,
  (scans, sortedBy, sortOrder) => orderBy(scans, sortedBy, sortOrder),
);
