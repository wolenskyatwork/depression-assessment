// note these could be easily broken out into separate files, but this app is
// small enough that one file is sufficent for now.

import * as types from '../constants/actionTypes';

export const questions = questions => ({
    type: types.QUESTIONS_SUCCESS,
    questions,
});

export const getQuestions = () => {
  return { type: types.GET_QUESTIONS };
};

export const getAnswers = () => {
  return { type: types.GET_ANSWERS };
};

export const getSeverity = () => {
  return { type: types.GET_SEVERITY };
};

export const getTherapists = () => {
  return { type: types.GET_THERAPISTS };
};

export const addPoints = points => {
  return { type: types.ADD_POINTS, points };
};

export const incrementStep = () => {
  return { type: types.INCREMENT_STEP };
};

export const resetTest = () => {
  return { type: types.RESET_TEST };
}
