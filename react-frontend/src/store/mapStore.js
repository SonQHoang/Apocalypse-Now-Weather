import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Action Types
const SET_LOCATION = "map/SET_LOCATION";

// Action Creators
export const setLocation = (location) => ({
  type: SET_LOCATION,
  payload: location,
});

// Initial State
const initialState = {
  location: null,
};

// Reducer
const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATION:
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

// Create Store
const store = createStore(
  mapReducer,
  applyMiddleware(thunk)
);

export default store;
