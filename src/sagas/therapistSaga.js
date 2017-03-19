import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../constants/actionTypes';

export default function* watchGetTherapists() {
  yield takeLatest(types.GET_THERAPISTS, getTherapistsSaga);
}

const getTherapistsCall = () => {
  return axios.get('http://localhost:4000/api/therapists')
     .then(response => {
       return response.data.therapists;
     });
};

export function* getTherapistsSaga() {
  try {
    const therapists = yield call(getTherapistsCall);
    yield put({ type: types.THERAPISTS_SUCCESS, therapists });
  } catch (error) {
    yield put({ type: types.THERAPISTS_ERROR, error });
  }
}
