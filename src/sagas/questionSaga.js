import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/actionTypes';

export default function* watchGetQuestions() {
  yield takeLatest(types.GET_QUESTIONS, getQuestionsSaga);
}

export function* getQuestionsSaga() {
  try {
    const questions = yield call(getQuestionsCall);
    yield put({ type: types.QUESTIONS_SUCCESS, questions });
  } catch (error) {
    yield put({ type: types.QUESTIONS_ERROR, error });
  }
}

const getQuestionsCall = () => {
  return axios.get('http://localhost:4000/api/questions')
     .then(response => {
       return response.data.questions;
     });
};
