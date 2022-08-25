import React, { useState } from "react";
import { useRouter } from "next/router";
import { TextField, Box, Container, Button, Alert, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import LoginIcon from "@mui/icons-material/Login";
import { useDispatch } from "react-redux";
import store from "../../lib/rtk/store";
import {
  signinUser,
  signinAdmin,
  fetchUserByEmail,
} from "../../lib/rtk/auth/authSlice";

const SigninForm = () => {
  const [message, setMessage] = useState();
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ email, password }) => {
    if (email == "admin") {
      if (password == "admin") {
        dispatch(signinAdmin());
        router.push("/admin");
      }
    } else {
      await dispatch(fetchUserByEmail(email));
      let auth = store.getState().auth;
      if (auth.user) {
        setMessage(null);
        if (auth.user.email == email && auth.user.password == password) {
          dispatch(signinUser());
          router.push("/user");
        } else setMessage("email or password is incorrect");
      } else setMessage("User does not exist");
    }
  };

  return (
    <Container maxWidth="xs">
      {message && (
        <Box m={2}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity="error">{message}</Alert>
          </Stack>
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box m={2}>
          <TextField
            label="email"
            variant="filled"
            {...register("email", { required: true })}
          />
        </Box>
        <Box m={2}>
          <TextField
            label="Password"
            {...register("password", { required: true })}
            variant="filled"
          />
        </Box>

        <Box m={2}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<LoginIcon />}
            fullWidth
          >
            Sign In
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default SigninForm;
