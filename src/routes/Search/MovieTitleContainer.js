import { connect } from "react-redux";
import MovieTitle from "./MovieTitle";
import { injectDataReducer, injectUIReducer } from "../../store/reducers";
import store from "../../store/configureStore";
import { MovieReducer } from "../../store/data/movie";
import { searchByTitleReducer, setSearchByTitleQuery, getQueryValue } from "../../store/ui/searchByTitle";
import {
  fetchMoviesByTitle,
  getMovies,
  getMoviesIsLoading
} from "../../store/data/movie";

injectDataReducer(store, { key: "movie", reducer: MovieReducer });
injectUIReducer(store, { key: "searchByTitle", reducer: searchByTitleReducer });

const mapStateToProps = state => ({
  movies: getMovies(state),
  query: getQueryValue(state),
  listingIsLoading: getMoviesIsLoading(state)
});

const mapDispatchToProps = dispatch => ({
  onSearch: query => dispatch(fetchMoviesByTitle(query)),
  onQueryChange: (value) => dispatch(setSearchByTitleQuery('title', value))
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTitle);
