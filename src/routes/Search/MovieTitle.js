import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Listings from "../../components/Listings";

const styles = theme => ({
  searchText: {
    width: "500px"
  },
  searchButton: {
    "margin-left": "10px"
  }
});

class SearchByMovieTitleView extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    const { onSearch, query } = this.props;
    onSearch(query.title);
  }

  render() {
    const { classes, movies, onQueryChange, query } = this.props;
    // const {query} = this.state;
    return (
      <React.Fragment>
        <TextField
          className={classes.searchText}
          id="outlined-basic"
          label="Movie Title"
          variant="outlined"
          size="small"
          onChange={e => onQueryChange(e.target.value)}
          value={query.title || ""}
        />
        <Button
          className={`${classes.button}  ${classes.searchButton}`}
          variant="contained"
          color="primary"
          endIcon={<SearchIcon />}
          onClick={this.handleSearch}
        >
          Search
        </Button>
        {movies && <Listings rows={movies.results} />}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(SearchByMovieTitleView);
