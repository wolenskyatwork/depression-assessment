import * as types from '../constants/actionTypes';

const initialState = {
  step: -1,
  score: 0,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_STEP:
      const step = state.step + 1;
      console.log(step);
      return [...state, step];
    default:
      return state;
  }
};
