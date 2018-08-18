const tags = (state = [], action) => {
  switch (action.type) {
    case "ADD_TAG":
      return [...state, action.input];
    case "DELETE_TAG":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

export default tags;
