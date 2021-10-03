import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link, useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { userData } from "../services/api";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  linkstyle: {
    color: "#5e20c0",
    textDecoration: "none",
  },
}));

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const history = useHistory();

  const classes = useStyles();

  const onSubmit = async (data) => {
    console.log(data);
    reset();

    try {
      let response = await userData(data);
      console.log(response);

      if (response.status === 200) {
        alert(response.data);
        history.push("/login");
      }
    } catch (error) {
      console.log(error);

      alert("Error while registeration ");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label=" Name"
                {...register("name", {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Number"
                name="phone"
                autoComplete="phone"
                {...register("phone", {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                {...register("email", {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password", {
                  required: true,
                })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cpassword"
                label="Confirm Password"
                type="password"
                id="cpassword"
                autoComplete="current-password"
                {...register("cpassword", {
                  required: true,
                })}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" className={classes.linkstyle}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
