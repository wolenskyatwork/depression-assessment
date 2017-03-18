import { fork } from 'redux-saga/effects';
import watchGetQuestions from './questionSaga';
import watchGetAnswers from './answerSaga';

export default function* startForman() {
  yield fork(watchGetQuestions);
  yield fork(watchGetAnswers);
}
