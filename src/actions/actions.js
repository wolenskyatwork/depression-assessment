// note these could be easily broken out into separate files, but this app is
// small enough that one file is sufficent for now.

import * as types from '../constants/actionTypes';

export const questions = questions => ({
    type: types.QUESTIONS_SUCCESS,
    questions,
});
