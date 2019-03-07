const initState = {};

const appReducer = (state = initState, action) => {
  const nextState = { ...state };
  const { type, payload } = action;

  switch (type) {
    case 'SET_USER':
      nextState.user = payload.name;
      return nextState;

    default:
      return state;
  }
};

export default appReducer;
