import { combineReducers } from 'redux';
import questions from './questionReducer';
import therapists from './therapistReducer';
import test from './testReducer';

const rootReducer = combineReducers({
  questions,
  therapists,
  test,
});

export default rootReducer;
