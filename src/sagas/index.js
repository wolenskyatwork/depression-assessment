import { fork } from 'redux-saga/effects';
import watchGetQuestions from './questionSaga';
import watchGetAnswers from './answerSaga';
import watchGetTherapists from './therapistSaga';
import watchGetSeverity from './severitySaga';

export default function* startForman() {
  yield fork(watchGetQuestions);
  yield fork(watchGetAnswers);
  yield fork(watchGetTherapists);
  yield fork(watchGetSeverity);
}
