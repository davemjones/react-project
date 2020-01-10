import React from "react";
import { Button } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import MovieModal from "./MovieModalContainer";

const styles = theme => ({
  table: {
    minWidth: 650
  },
  title: {
    minWidth: 200
  }
});

const Listings = ({ classes, rows }) => {
  const [open, setOpen] = React.useState(false);
  const [movieId, setMovieId] = React.useState(false);
  const handleOpen = e => {
    setMovieId(e.currentTarget.getAttribute("data-movie-id"));
    setOpen(true);
  };

  const handleClose = () => {
    setMovieId(false);
    setOpen(false);
  };

  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="movies listing">
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>Title</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Overview</TableCell>
              <TableCell>Stars</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Button onClick={handleOpen} data-movie-id={row.id}>
                    {row.title}
                  </Button>
                </TableCell>
                <TableCell>{row.release_date}</TableCell>

                <TableCell>{row.overview}</TableCell>
                <TableCell>{row.vote_average}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {movieId && (
        <MovieModal
          handleClose={handleClose}
          open={open}
          movieId={movieId}
        />
      )}
    </React.Fragment>
  );
};

export default withStyles(styles)(Listings);
