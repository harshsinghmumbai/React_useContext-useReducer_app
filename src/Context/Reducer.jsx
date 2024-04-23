const Reducer = (state, action) => {
  if (action.type === "homepage") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  } else if (action.type === "aboutpage") {
    return {
      ...state,
      name: action.payload.name,
      image: action.payload.image,
    };
  }
  return state;
};

export default Reducer;
