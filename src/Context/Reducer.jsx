const Reducer = (state, action) => {
  if (action.type === "homepage") {
    return {
      ...state,
      // state kho update kar dhana in below line of 2 code
      name: action.payload.name,
      image: action.payload.image,
    };
  } else if (action.type === "aboutpage") {
    return /*➡️ js logic*/ {
      ...state,
      // state kho update kar dhana in below line of 2 code
      name: action.payload.name,
      image: action.payload.image,
    };
  }
  return state;
};

export default Reducer;
