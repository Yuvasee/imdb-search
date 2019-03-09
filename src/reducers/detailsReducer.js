import { unionWith, isEqual } from 'lodash';

import { API_DETAILS_SUCCESS } from '../actions/detailsActions';

/** API calls fot details caching reducer */
const initState = {};

const detailsReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case API_DETAILS_SUCCESS:
      const { movieId, json } = payload;

      nextState[movieId] = json;
      return nextState;

    default:
      return state;
  }
};

export default detailsReducer;
