import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((them) => ({
  head_info: {
    fontWeight: 250,
    fontSize: 16,
    color: "white",
    paddingLeft: "2rem",
  },
  container: {
    background: " #f44336",
    height: "45px",
    display: "flex",
    alignItems: "center",
    [them.breakpoints.down("500")]: {
      display: "none",
    },
  },
  logo: {
    height: "35px",
    paddingRight: "2rem",
    [them.breakpoints.down("md")]: {
      display: "none",
    },
  },
  container2: {
    marginLeft: "auto",
    display: "flex",
    alignItems: "center",
  },
}));

const Infoheader = () => {
  const classes = useStyles();
  const applestore =
    "https://assets.inshorts.com/website_assets/images/appstore.png";
  const playstore =
    "https://assets.inshorts.com/website_assets/images/playstore.png";

  return (
    <Box className={classes.container}>
      <Typography className={classes.head_info}>
        {" "}
        For the best experience use <b> inshorts </b> app on your smartphone
      </Typography>
      <Box className={classes.container2}>
        <img src={applestore} alt="apple" className={classes.logo} />
        <img src={playstore} alt="play" className={classes.logo} />
      </Box>
    </Box>
  );
};

export default Infoheader;
