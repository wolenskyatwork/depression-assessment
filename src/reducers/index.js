import { combineReducers } from 'redux';
import questions from './questionReducer';
import therapists from './therapistReducer';
import assessment from './assessmentReducer';
import answers from './answerReducer';
import severity from './severityReducer';

const rootReducer = combineReducers({
  answers,
  assessment,
  questions,
  severity,
  therapists,
});

export default rootReducer;
