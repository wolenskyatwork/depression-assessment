import * as types from '../constants/actionTypes';

const initialState = {
  therapists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.THERAPISTS_SUCCESS:
      return state;
    default:
      return state;
  }
};
