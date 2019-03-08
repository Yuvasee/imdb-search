import { unionWith, isEqual } from 'lodash';

import { API_SUCCESS } from '../actions/actions';

/** API calls caching reducer */
const initState = {};

const searchReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case API_SUCCESS:
      const { phrase, year, json } = payload;

      const query = `${phrase}@${year}`;

      if (query in nextState) {
        const unitedData = unionWith(nextState[query], json.Search, isEqual);
        nextState[query] = unitedData;
      } else {
        nextState[query] = json.Search;
      }
      return nextState;

    default:
      return state;
  }
};

export default searchReducer;
