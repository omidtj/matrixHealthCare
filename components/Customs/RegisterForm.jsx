import React, { useState } from "react";
import { TextField, Box, Container, Button, Alert, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import store from "../../lib/rtk/store";
import { signup, fetchUserByEmail } from "../../lib/rtk/auth/authSlice";

const RegisterForm = () => {
  const [message, setMessage] = useState();
  const [showError, setShowError] = useState();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({
    firstName,
    lastName,
    email,
    contactNumber,
    password,
  }) => {
    setMessage(null);
    await dispatch(fetchUserByEmail(email));
    let auth = store.getState().auth;
    if (auth.user) {
      setShowError(true);
      setMessage("the email is already taken");
    } else {
      await dispatch(
        signup({ firstName, lastName, email, contactNumber, password })
      );
      auth = store.getState().auth;
      if (auth.isSignedUp) {
        setShowError(false);
        setMessage("Registration Successful");
      } else {
        setShowError(true);
        setMessage(auth.error);
      }
    }
  };

  return (
    <Container sx={{width: "100%",display:'flex',justifyContent:'center'}}>
      {message && (
        <Box m={2}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Alert severity={showError ? "error" : "success"}>{message}</Alert>
          </Stack>
        </Box>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={2} mt={2}>
      <Box mb={2} sx={{width:'200px'}}>
          <TextField
            label="First Name"
            variant="filled"
            {...register("firstName", { required: true })}
            error={!!errors?.firstName}
          />
          {errors?.firstName && (
            <p style={{ color: "darkred" }}>Full name is required.</p>
          )}
        </Box>
        <Box mb={2} sx={{width:'200px'}}>
          <TextField
            label="Last Name"
            variant="filled"
            {...register("lastName", { required: true })}
            error={!!errors?.lastName}
          />
          {errors?.lastName && (
            <p style={{ color: "darkred" }}>Full name is required.</p>
          )}
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
      <Box mb={2} sx={{width:'200px'}}>
          <TextField
            label="Email"
            variant="filled"
            {...register("email", { required: true })}
          />
        </Box>
        <Box mb={2} sx={{width:'200px'}}>
          <TextField
            label="Contact Number"
            {...register("contactNumber", { required: true })}
            variant="filled"
          />
        </Box>
      </Stack>
      <Stack direction="row" spacing={2}>
      <Box mb={2} sx={{width:'200px'}}>
          <TextField
            label="Password"
            {...register("password", { required: true })}
            variant="filled"
          />
        </Box>
      </Stack>
     
  
     

        <Box mb={2} mt={2}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<AddIcon />}
            fullWidth
          >
            Register
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default RegisterForm;
