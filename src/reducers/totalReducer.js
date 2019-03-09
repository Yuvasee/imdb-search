import { API_SUCCESS } from '../actions/actions';

/** Reducer to store total pages loaded and results available */
const initState = {};

const totalReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case API_SUCCESS:
      const { phrase, year, json, page } = payload;

      const query = `${phrase}@${year}`;

      nextState[query] = {
        total: json.totalResults,
        pagesLoaded: page
      }

      return nextState;

    default:
      return state;
  }
};

export default totalReducer;
