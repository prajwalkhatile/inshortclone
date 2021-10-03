import React, { useContext } from "react";
import {
  Box,
  Toolbar,
  AppBar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { userContext } from "../App";

const useStyles = makeStyles((them) => ({
  header: {
    height: "70px",
    background: "white",
    color: "#5a5656",
  },

  logo: {
    height: "55px",
    [them.breakpoints.down("500")]: {
      width: "100px",
    },
  },
  pages: {
    display: "flex",
    flexDirectione: "row",
    marginLeft: "auto",
  },
  page: {
    padding: "0 1rem",
    [them.breakpoints.down("500")]: {
      padding: "0 5px",
      fontSize: "15px",
      textDecoration: "none",
      color: "inherit",
    },
  },
  linkstyle: {
    color: "inherit",

    textDecoration: "none",
  },
  logoutstyle: {
    background: "red",
    textDecoration: "none",
    borderRadius: "10px",
    color: "white",
    "&:hover": {
      background: "white",

      color: "red",
    },
  },
}));

const Header = () => {
  const classes = useStyles();

  const Toggler = () => {
    if (state) {
      return (
        <>
          <Link to="/" className={classes.linkstyle}>
            <Typography className={classes.page}> Home </Typography>
          </Link>
          <Link to="/news" className={classes.linkstyle}>
            <Typography className={classes.page}> News </Typography>
          </Link>
          <Link to="/register" className={classes.linkstyle}>
            <Typography className={classes.page}> Register </Typography>
          </Link>
          <Link
            to="/logout"
            className={(classes.linkstyle, classes.logoutstyle)}
          >
            <Typography className={classes.page}> Logout </Typography>
          </Link>
        </>
      );
    } else {
      return (
        <>
          <Link to="/" className={classes.linkstyle}>
            <Typography className={classes.page}> Home </Typography>
          </Link>
          <Link to="/news" className={classes.linkstyle}>
            <Typography className={classes.page}> News </Typography>
          </Link>
          <Link to="/register" className={classes.linkstyle}>
            <Typography className={classes.page}> Register </Typography>
          </Link>
          <Link
            to="/login"
            className={(classes.linkstyle, classes.logoutstyle)}
          >
            <Typography className={classes.page}> Login </Typography>
          </Link>
        </>
      );
    }
  };

  const logo =
    "https://assets.inshorts.com/website_assets/images/logo_inshorts.png";

  const { state, dispatch } = useContext(userContext);

  return (
    <Box>
      <AppBar className={classes.header}>
        <Toolbar>
          <Box>
            <Link to="/">
              <img src={logo} alt="logo" className={classes.logo} />
            </Link>
          </Box>
          <Box className={classes.pages}>
            <Toggler />
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
