import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import storyReducer from './stories';
import tipReducer from './tips'
import commentsReducer from "./storycomments";
import tipcommentsReducer from './tipcomments';
import storyLikesReducer from './storyLikes';
import userLocationReducer from './userLocation';


const rootReducer = combineReducers({
  comments: commentsReducer,
  tipcomments: tipcommentsReducer,
  session,
  tips: tipReducer,
  stories: storyReducer,
  storyLikes: storyLikesReducer,
  userLocation: userLocationReducer,
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
