import * as types from '../constants/actionTypes';

const initialState = {
  therapists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.QUESTIONS_SUCCESS:
      return [...state, action.questions];
    default:
      return state;
  }
};
