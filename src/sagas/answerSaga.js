import { put, call, takeLatest, select } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/actionTypes';

export default function* watchGetAnswers() {
  yield takeLatest(types.GET_ANSWERS, getAnswersSaga);
}

export const getAnswers = state => state.answers.answers;

const getAnswersCall = () => {
  return axios.get('http://localhost:4000/api/answers')
     .then(response => {
       return response.data.answers;
     });
};

export function* getAnswersSaga() {
  let answers = yield select(getAnswers);
  if(answers.length === 0) {
    try {
      answers = yield call(getAnswersCall);
      yield put({ type: types.ANSWERS_SUCCESS, answers });
    } catch (error) {
      yield put({ type: types.ANSWERS_ERROR, error });
    }
  }
}
