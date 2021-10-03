import React, { createContext, useReducer } from "react";

import Header from "./components/Header";
import { Box, makeStyles } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Register from "./components/Register";
import News from "./components/News";
import Login from "./components/Login";
import Logout from "./components/Logout";
import { reducer, initialState } from "./reducer/useReducer";

const useStyles = makeStyles((them) => ({
  info_head: {
    marginTop: "7rem",
    width: "70%",
    margin: "0 auto",
    [them.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));

export const userContext = createContext();

export const Routing = () => {
  const classes = useStyles();

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Box className={classes.info_head}>
        <Route path="/register" component={Register} />
        <Route path="/news" component={News} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </Box>
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      <Router>
        <Box className="App">
          <Header />

          <Routing />
        </Box>
      </Router>
    </userContext.Provider>
  );
}

export default App;
