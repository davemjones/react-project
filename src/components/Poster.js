import React from 'react';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  poster: {
    "margin-top": "10px"
  }
});

/**
 * Displays a 500 px wide movie poster
 * 
 * @param {string} path - path to poster image
 * 
 * @returns {ReactComponent} Poster 
 */
const Poster = ({classes, path}) => (
  <img className={classes.poster} src={`https://image.tmdb.org/t/p/w500${path}`} alt=""/>
);

export default withStyles(styles)(Poster);