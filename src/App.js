import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Title from "./routes/Search/MovieTitleContainer";
import store from "./store/configureStore";
import "./App.css";


const drawerWidth = 140;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  grow: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Provider store={store}>
        <Router>
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
                Movie Database
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <List>
              <ListItem button>
                <Link to="/title">
                  <ListItemText primary={"Title"} />
                </Link>
              </ListItem>
              <ListItem button>
                <Link to="/genre">
                  <ListItemText primary={"Genre"} />
                </Link>
              </ListItem>
              <ListItem button>
                <Link to="/keyword">
                  <ListItemText primary={"Keyword"} />
                </Link>
              </ListItem>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />

            <Switch>
              <Route exact path="/title">
                <Title />
              </Route>
              <Route exact path="/genre">
                {/* <Genre /> */}
              </Route>
              <Route exact path="/keyword">
                {/* <Keyword /> */}
              </Route>
              <Route
                render={() => (
                  <Typography variant="h3">
                    Welcome to the Movie Database
                  </Typography>
                )}
              />
            </Switch>
          </main>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
