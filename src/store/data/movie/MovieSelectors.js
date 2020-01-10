import { createSelector } from "reselect";
import { createScopedSelector } from "../../scope";
import { getLoading, getData } from "../../loading";
import { MOVIE_RESULTS_SCOPE } from "./constants";

export const getMovies = createScopedSelector(getData, MOVIE_RESULTS_SCOPE);

export const getMoviesIsLoading = createScopedSelector(
  getLoading,
  MOVIE_RESULTS_SCOPE
);

const getMovie = (state, movieId) => {
  const movies = state.dataLayer.movie.results.data.results;
  return movies.find(movie => Number(movie.id) === Number(movieId));
};

export const getMovieById = createSelector(getMovie, movie => movie || []);
