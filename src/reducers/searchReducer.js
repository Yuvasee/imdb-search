import { unionWith, isEqual } from 'lodash';

import { API_SUCCESS } from '../actions/actions';

const initState = {};

const searchReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case API_SUCCESS:
      const { phrase, json } = payload;
      if (phrase in nextState) {
        const unitedData = unionWith(nextState[phrase], json.Search, isEqual);
        nextState[phrase] = unitedData;
      } else {
        nextState[phrase] = json.Search;
      }
      return nextState;

    default:
      return state;
  }
};

export default searchReducer;
