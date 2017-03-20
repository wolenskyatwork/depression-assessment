import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/actionTypes';

export default function* watchGetSeverity() {
  yield takeLatest(types.GET_SEVERITY, getSeveritySaga);
}

const getSeverityCall = () => {
  return axios.get('http://localhost:4000/api/severity')
     .then(response => {
       return response.data;
     });
};

export function* getSeveritySaga() {
  try {
    const { severity, therapistThreshold } = yield call(getSeverityCall);
    yield put({ type: types.SEVERITY_SUCCESS, severity, threshold: therapistThreshold });
  } catch (error) {
    yield put({ type: types.SEVERITY_ERROR, error });
  }
}
