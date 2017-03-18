import { combineReducers } from 'redux';
import questions from './questionReducer';
import therapists from './therapistReducer';
import test from './testReducer';
import answers from './answerReducer';

const rootReducer = combineReducers({
  questions,
  answers,
  therapists,
  test,
});

export default rootReducer;
