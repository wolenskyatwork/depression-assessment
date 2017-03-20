import * as types from '../constants/actionTypes';

const initialState = {
  severity: [],
  threshold: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.SEVERITY_SUCCESS:
      const { severity, threshold } = action;
      return { ...state, severity, threshold };
    default:
      return state;
  }
};
