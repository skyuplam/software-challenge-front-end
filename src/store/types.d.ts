import { StateType, ActionType } from 'typesafe-actions';
import * as scansActions from './scans/actions';


declare module 'typesafe-actions' {
  export type Store = StateType<typeof import('./index').default>;
  export type RootState = StateType<typeof import('./rootReducer').default>;
  export type RootAction = ActionType<typeof scansActions>;

  interface Types {
    RootAction: RootAction;
  }
}
