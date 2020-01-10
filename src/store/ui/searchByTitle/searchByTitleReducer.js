import { combineReducers } from "redux";
import { createScopedReducer } from "../../scope";
import { createValueReducer } from "../../value";
import { SEARCH_BY_TITLE_SCOPE } from "./constants";

const searchByTitleReducer = combineReducers({
  title: createScopedReducer(
    createValueReducer({
      query: ""
    }),
    SEARCH_BY_TITLE_SCOPE
  )
});

export default searchByTitleReducer;
