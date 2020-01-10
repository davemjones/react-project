import { combineReducers } from "redux";
import { createScopedReducer } from "../../scope";
import { LoadingReducer } from "../../loading";
import { MOVIE_RESULTS_SCOPE } from "./constants";

const MovieReducer = combineReducers({
  results: createScopedReducer(LoadingReducer, MOVIE_RESULTS_SCOPE)
});

export default MovieReducer;
