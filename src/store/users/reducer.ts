import { createReducer } from 'typesafe-actions';
import { User } from 'Models';


const usersReducer = createReducer([
  { id: 0, name: 'Linus Torvalds' },
  { id: 1, name: 'Guido van Rossum' },
  { id: 2, name: 'Rich Hickey' },
] as User[]);

export default usersReducer;
