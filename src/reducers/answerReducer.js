import * as types from '../constants/actionTypes';

const initialState = {
  answers: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ANSWERS_SUCCESS:
      const answers = action.answers;
      return { ...state, answers };
    default:
      return state;
  }
};
