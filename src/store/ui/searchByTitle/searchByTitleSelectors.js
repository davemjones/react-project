import { getValue } from "../../value";
import { createScopedSelector } from "../../scope";
import { SEARCH_BY_TITLE_SCOPE } from "./constants";

export const getQueryValue = createScopedSelector(
  getValue,
  SEARCH_BY_TITLE_SCOPE
);
