import { combineReducers } from 'redux';
import scansReducer from './scans/reducer';
import usersReducer from './users/reducer';


const rootReducer = combineReducers({
  scans: scansReducer,
  users: usersReducer,
});

export default rootReducer;
