import { API_SUCCESS } from '../actions/actions';

const initState = {};

const totalReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case API_SUCCESS:
      const { phrase, json, page } = payload;
      nextState[phrase] = {
        total: json.totalResults,
        pagesLoaded: page
      }

      return nextState;

    default:
      return state;
  }
};

export default totalReducer;
