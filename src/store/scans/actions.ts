import { createAction } from 'typesafe-actions';
import { Scan } from 'Models';


export const toggleIsEditingScans = createAction(
  'scans/TOGGLE_IS_EDITING_SCANS',
);

export const updateScan = createAction(
  'scans/UPDATE_SCAN',
  action => (
    id: string,
    name?: string,
    scannedByUserId?: number,
  ) => action({ id, name, scannedByUserId }),
);

export const addScan = createAction(
  'scans/ADD_SCAN',
  action => (scan: Scan) => action(scan),
);

export const updateSortedBy = createAction(
  'scans/UPDATE_SORTED_BY',
  action => (sortedBy: string) => action({ sortedBy }),
);
