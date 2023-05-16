const contextReducer = (state, action) => {
  // if (action.type === "DELETE") {
  // } else if (action.type === "ADD") {
  // }
  let transection;
  switch (action.type) {
    case "ADD":
      transection = [...state, action.payload];
      localStorage.setItem("transaction", JSON.stringify(transection));
      return transection;
    case "DELETE":
      transection = state.filter(t => t.id !== action.payload);
      localStorage.setItem("transaction", JSON.stringify(transection));
      return transection;
    default:
      return state;
  }
};

export default contextReducer;
