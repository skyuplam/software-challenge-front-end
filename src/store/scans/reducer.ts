import { combineReducers } from 'redux';
import { createReducer } from 'typesafe-actions';
import { Scan } from 'Scans';


export const isEditingScans = createReducer(false);

export const scans = createReducer([
  {
    id: '0',
    name: 'Concrete Slab #1',
    elevationMax: 3.2,
    elevationMin: 0.1,
    scannedByUserId: 0,
  },
  {
    id: '1',
    name: 'Concrete Slab #2',
    elevationMax: 3.3,
    elevationMin: 0.05,
    scannedByUserId: 0,
  },
  {
    id: '2',
    name: 'Door opening',
    elevationMax: 2.44,
    elevationMin: 0.1,
    scannedByUserId: 0,
  },
  {
    id: '3',
    name: 'Floor',
    elevationMax: 0.2,
    elevationMin: 0.05,
    scannedByUserId: 1,
  },
  {
    id: '4',
    name: 'Ceiling',
    elevationMax: 3.4,
    elevationMin: 3.15,
    scannedByUserId: 0,
  },
  {
    id: '5',
    name: 'Ventilation Opening',
    elevationMax: 1.6,
    elevationMin: 1.5,
    scannedByUserId: 1,
  },
  {
    id: '6',
    name: 'Column #1',
    elevationMax: 0.1,
    elevationMin: 9.2,
    scannedByUserId: 0,
  },
  {
    id: '7',
    name: 'Column #2',
    elevationMax: 0.2,
    elevationMin: 9.0,
    scannedByUserId: 0,
  },
  {
    id: '8',
    name: 'Column #3',
    elevationMax: 0.1,
    elevationMin: 9.0,
    scannedByUserId: 2,
  },
] as Scan[]);

const scansReducer = combineReducers({
  isEditingScans,
  scans,
});

export default scansReducer;
