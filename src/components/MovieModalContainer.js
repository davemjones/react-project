import { connect } from "react-redux";
import MovieModal from "./MovieModal";
import { injectDataReducer } from "../store/reducers";
import store from "../store/configureStore";
import { MovieReducer } from "../store/data/movie";
import { getMovieById} from "../store/data/movie";

injectDataReducer(store, { key: "movie", reducer: MovieReducer });

const mapStateToProps = (state, ownProps) => ({
  movie: getMovieById(state, ownProps.movieId) 
});

export default connect(mapStateToProps)(MovieModal);
