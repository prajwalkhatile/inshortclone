import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

import React from "react";

const useStyles = makeStyles((them) => ({
  component: {
    margin: "1.5rem",
    borderRadius: 5,
    boxShadow: "1px 2px 6px dimgray",
  },
  loaderImg: {
    height: 268,
    width: "88%",
    borderRadius: 5,
    objectFit: "cover",
  },
  title: {
    fontWeight: 300,
    color: "#44444d!important",
    fontSize: "20px",
    lineHeight: "27px",
  },
  author: {
    fontSize: "12px",
    lineHeight: "22px",
    color: "#808290",
  },
  short: {
    fontSize: "12px",
    fontFamily: "'Conv_ClanPro-Bold',Sans-Serif",
    color: "#44444d!important",
  },
  description: {
    paddingTop: "15px",
    fontSize: "16px",
    fontWeight: 300,
    lineHeight: "22px",
    color: " #44444d",
  },
  link: {
    color: "#222",
    fontSize: "12px",
    fontWeight: 400,
    paddingTop: "20px",
  },
  url: {
    fontSize: "13px",
    fontWeight: 500,
    color: "black",
    textDecoration: "none",
  },
}));

const Article = ({ article }) => {
  const classes = useStyles();
  return (
    <Card className={classes.component}>
      <CardContent>
        <Grid container>
          <Grid item lg={5} md={5} sm={5} xs={12}>
            <img
              src={article.url}
              alt="Fail image"
              className={classes.loaderImg}
            />
          </Grid>
          <Grid item lg={7} md={7} sm={7} xs={12}>
            <Typography className={classes.title}>{article.title}</Typography>
            <Typography className={classes.author}>
              {" "}
              <b className={classes.short}> Short </b> by {article.author} /{" "}
              {new Date(article.timestamp).toDateString()}{" "}
            </Typography>

            <Typography className={classes.description}>
              {article.description}
            </Typography>

            <Typography className={classes.link}>
              read more at{" "}
              <a
                className={classes.url}
                href={article.link}
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                {article.publisher}{" "}
              </a>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Article;
