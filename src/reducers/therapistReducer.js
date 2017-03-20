import * as types from '../constants/actionTypes';

const initialState = {
  therapists: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.THERAPISTS_SUCCESS:
      const therapists = action.therapists;
      return { ...state, therapists };
    default:
      return state;
  }
};
