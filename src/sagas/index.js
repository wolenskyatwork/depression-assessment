import { fork } from 'redux-saga/effects';
import watchGetQuestions from './questionSaga';

export default function* startForman() {
  yield fork(watchGetQuestions);
}
