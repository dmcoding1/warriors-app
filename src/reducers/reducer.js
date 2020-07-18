import ACTION_TYPES from './actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_WARRIORS:
      return action.payload ? [...action.payload] : state;
    case ACTION_TYPES.ADD_WARRIOR:
      return [...state, action.payload];
    case ACTION_TYPES.DELETE_WARRIOR:
      return state.filter(
        warrior => warrior.id !== action.payload.id
      );
    case ACTION_TYPES.ADD_WARRIOR_TO_LIST:
      const warriorIndex = state.findIndex(
        warrior => warrior.id === action.payload.id
      );
      const stateCopy = [...state];
      stateCopy[warriorIndex] = {
        ...stateCopy[warriorIndex],
        isSelected: action.payload.isSelected,
      };
      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
