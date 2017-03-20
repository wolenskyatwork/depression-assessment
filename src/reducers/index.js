import { combineReducers } from 'redux';
import questions from './questionReducer';
import therapists from './therapistReducer';
import test from './testReducer';
import answers from './answerReducer';
import severity from './severityReducer';

const rootReducer = combineReducers({
  answers,
  questions,
  severity,
  test,
  therapists,
});

export default rootReducer;
