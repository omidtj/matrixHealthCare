import React from "react";
import { TextField, Box, Container, Stack, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useForm } from "react-hook-form";
import ErrorMsg from "../../components/Static/ErrorMsg";
import axios from "axios";
const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  //Reset Form
  const resetForm = () => {
    reset({
      fullName: "",
      email: "",
      contactNumber: "",
      message: "",
    });
  };
  const onSubmit = ({ fullName, email, contactNumber, message }) => {
    const yourEmail = "omid.tajer@gmail.com";
    const subject = `Matrix Health Care Contact from ${fullName} `;
    let body = ` email:${email} \r\n mobile:${contactNumber} \r\n \r\n ${message} \r\n`;
    body=encodeURIComponent(body)
    window.open(`mailto:${yourEmail}?subject=${subject}&body=${body}'`);
  };

  return (
    <Container maxWidth="xs">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={2}>
          <TextField
            label="Full Name"
            variant="filled"
            {...register("fullName", { required: true })}
            error={!!errors?.fullName}
          />
          {errors?.fullName && (
            <ErrorMsg errTXT="This is required" errColor="darkred" />
          )}
        </Box>
        <Box mb={2}>
          <TextField
            label="Email"
            variant="filled"
            {...register("email", {
              required: "This is required.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            error={!!errors?.email}
          />
          {errors?.email && (
            <>
              {errors.email.type === "required" && (
                <ErrorMsg errTXT={errors.email.message} errColor="darkred" />
              )}
              {errors.email.type === "pattern" && (
                <ErrorMsg errTXT={errors.email.message} errColor="gold" />
              )}
            </>
          )}
        </Box>
        <Box mb={2}>
          <TextField
            label="Contact Number"
            type="number"
            {...register("contactNumber", { required: true })}
            error={!!errors?.contactNumber}
            variant="filled"
          />
          {errors?.contactNumber && (
            <ErrorMsg errTXT="This is required" errColor="darkred" />
          )}
        </Box>
        <Box mb={2}>
          <TextField
            label="Message"
            variant="filled"
            multiline
            fullWidth
            rows={4}
            {...register("message", { required: true })}
          />
          {errors?.message && (
            <ErrorMsg errTXT="This is required" errColor="darkred" />
          )}
        </Box>
        <Box mb={2}>
          <Button
            type="submit"
            variant="contained"
            endIcon={<SendIcon />}
            fullWidth
          >
            Send Message
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default ContactForm;
