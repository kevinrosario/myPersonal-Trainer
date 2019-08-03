import { combineReducers } from 'redux';
import user from './user';
import status from './status';
import workouts from './workouts';

const rootReducer = combineReducers({
  user,
  status,
  workouts
});

export default rootReducer;
