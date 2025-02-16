const { createStore } = require("redux");
//state
const initialConunterState = {
  count: 0,
};
const initialUsersState = {
  users: [
    {
      name: " alauddin",
      role: " amdin",
    },
  ],
};

//actions --boject -- type,payload
//increment counter and decrement counter
const incrementCounterAction = () => {
  return {
    type: "increment",
  };
};
const decrementCounterAction = () => {
  return {
    type: "decrement",
  };
};

const incrementCountebyValue = (value) => {
  return {
    type: "incrementbyvalue",
    payload: value,
  };
};
const addUser = (user) => {
  return {
    type: "addUser",
    payload: {
      name: user,
    },
  };
};

//create reducer for counter
const counterReducer = (state = initialConunterState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "incrementbyvalue":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "decrement":
      return {
        count: state.count - 1,
      };
    default:
      state;
  }
};

//create store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch actions
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(incrementCounterAction());
// store.dispatch(decrementCounterAction());
store.dispatch(incrementCountebyValue(10));
