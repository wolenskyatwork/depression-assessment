import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/actionTypes';

export default function* watchGetAnswers() {
  yield takeLatest(types.GET_ANSWERS, getAnswersSaga);
}

const getAnswersCall = () => {
  return axios.get('http://localhost:4000/api/answers')
     .then(response => {
       return response.data.answers;
     });
};

export function* getAnswersSaga() {
  try {
    const answers = yield call(getAnswersCall);
    yield put({ type: types.ANSWERS_SUCCESS, answers });
  } catch (error) {
    yield put({ type: types.ANSWERS_ERROR, error });
  }
}
