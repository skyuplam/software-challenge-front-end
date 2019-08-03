import { RootState } from 'typesafe-actions';
import { createSelector } from 'reselect';

import { selectUsers } from '../users/selectors';


export const selectScans = (state: RootState) => state.scans;

export const selectScanList = createSelector(
  selectScans,
  selectUsers,
  (scans, users) => scans.scans.map(
    scan => ({
      ...scan,
      scanedByUser: users.find(u => u.id === scan.scannedByUserId),
    }),
  ),
);
