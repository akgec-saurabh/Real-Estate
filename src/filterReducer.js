export const INITIAL_STATE = {
  location: "",
  date: "",
  price: "",
  type: "",
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return state;
  }
};
