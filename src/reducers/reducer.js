import ACTION_TYPES from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_WARRIORS:
      return action.payload ? [...action.payload] : state;
    default:
      return state;
  }
};

export default reducer;
