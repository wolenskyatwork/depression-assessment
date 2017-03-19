import * as types from '../constants/actionTypes';

const initialState = {
  step: 0,
  score: 0,
  severity: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_STEP:
      const step = state.step + 1;
      const score = state.score + action.points;
      return { ...state, step, score };
    case types.SEVERITY_SUCCESS:
      const severity = action.severity;
      return { ...state, severity };
    default:
      return state;
  }
};
