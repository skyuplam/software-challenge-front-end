import { RootState } from 'typesafe-actions';

export const selectUsers = (state: RootState) => state.users;
