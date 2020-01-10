import { RSAA } from "redux-api-middleware";
import { scopeTypeDescriptors } from "../../scope";
import { REQUEST, SUCCESS, FAILURE } from "../../loading";
import { MOVIE_RESULTS_SCOPE } from "./constants";

/**
 * Fetch a list of movies by title
 *
 * @param {string} title - title to query
 *
 * @return {object} RSAA request
 */
export const fetchMoviesByTitle = title => ({
  [RSAA]: {
    endpoint: `/search/movie?query=${title}`,
    method: "GET",
    types: scopeTypeDescriptors([REQUEST, SUCCESS, FAILURE], MOVIE_RESULTS_SCOPE),
    headers: { "Content-Type": "application/json" }
  }
});
