import * as types from '../constants/actionTypes';

const initialState = {
  step: 0,
  score: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_STEP:
      const step = state.step + 1;
      return { ...state, step };
    case types.ADD_POINTS:
      const score = state.score + action.points;
      return { ...state, score };
    case types.RESET_TEST:
      return { ...initialState };
    default:
      return state;
  }
};
