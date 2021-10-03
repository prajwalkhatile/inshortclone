import { Box, makeStyles } from "@material-ui/core";
import React from "react";
import newimg from "../images/fornews.jpg";

const useStyles = makeStyles({
  container: {
    backgroundImage: `url(${newimg})`,
    height: "100vh",
    width: "100vw",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.container}></Box>
    </>
  );
};

export default Home;
