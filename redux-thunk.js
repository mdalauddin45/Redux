const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;
//const
const GET_TODO = "GET_TOD";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_ERROR = "GET_TODO_ERROR";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

//states
const initialTodoState = {
  todos: [],
  isLoading: false,
  error: null,
};
//actions
const getTodos = () => {
  return {
    type: GET_TODO,
  };
};
const getTodosSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};
const getTodosError = (error) => {
  return {
    type: GET_TODO_ERROR,
    payload: error,
  };
};
//reducers
const todosReducers = (state = initialTodoState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODO_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
     return state;
  }
};

//async action creator

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodos());
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
//store
const store = createStore(todosReducers, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
