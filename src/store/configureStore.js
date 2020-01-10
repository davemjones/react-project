import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { apiMiddleware } from "redux-api-middleware";
import movieDatabaseMiddleware from "./middlewares/movieDatabaseMiddleware"
import {makeRootReducer} from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [thunk, movieDatabaseMiddleware('https://api.themoviedb.org/3'),
  apiMiddleware];
const enhancers = composeEnhancers(applyMiddleware(...middlewares));

const store = createStore(makeRootReducer(), enhancers);
store.injectedReducers = {
  dataLayer: {},
  uiLayer: {}
};
export default store;
