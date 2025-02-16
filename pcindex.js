const { createStore , applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

//constent
const GET_PRODUCT = "getproduct";
const ADD_PRODUCT = "addproduct";
//productReducer
const initialProductState = {
  products: ["suger", "salt"],
  numberofProducts: 2,
};
const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};
const addProducts = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberofProducts: state.numberofProducts + 1,
      };
    case GET_PRODUCT:
      return {
        ...state,
      };
    default:
      state;
  }
};

//store

const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));
//cartReducer
