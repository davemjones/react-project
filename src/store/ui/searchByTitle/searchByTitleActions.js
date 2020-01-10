import { setValue } from "../../value";
import { createScopedAction } from "../../scope";
import { SEARCH_BY_TITLE_SCOPE } from "./constants";

export const setSearchByTitleQuery = createScopedAction(
  setValue,
  SEARCH_BY_TITLE_SCOPE
);
