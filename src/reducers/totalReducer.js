import { API_SUCCESS } from '../actions/actions';

const initState = {};

const totalReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case API_SUCCESS:
      const { phrase, json } = payload;
      nextState[phrase] = json.totalResults;
      return nextState;

    default:
      return state;
  }
};

export default totalReducer;
