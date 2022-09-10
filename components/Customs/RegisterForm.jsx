import React, { useState } from "react";
import {
  TextField,
  Box,
  Container,
  Button,
  Alert,
  Stack,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  ListItemText,
  Select,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from 'dayjs';
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import store from "../../lib/rtk/store";
import { fetchUserByEmail } from "../../lib/rtk/auth/authSlice";
import { saveUser } from "../../lib/rtk/user/userSlice";
import { fetchAllDocs } from "../../lib/rtk/document/documentSlice";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const RegisterForm = () => {
  const [message, setMessage] = useState();
  const [showError, setShowError] = useState();
  const dispatch = useDispatch();

  const [selectedDocs, setSelectedDocs] = React.useState([]);
  const [selectItems, setSelectItems] = React.useState([]);
  const [exDate, setexDate] = React.useState(null);


  //Reset Form
  const resetForm = () => {
    setSelectedDocs([]);
    setexDate(null);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      contactNumber: "",
      password: "",
    });
  };
  //fetch all docs
  const fetchDocs = async () => {
    await dispatch(fetchAllDocs());
    let doc = store.getState().doc;
    setSelectItems(doc.docs);
  };
  //Fetch docs At Startup
  React.useEffect(() => {
    fetchDocs();
  }, []);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    setSelectedDocs(value);
  };
  const handleDataChange = (newValue) => {
    setexDate(newValue);
  };
  const {
    register,
    handleSubmit,
    reset,
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
      resetForm();
      setShowError(true);
      setMessage("the email is already taken");
    } else {
      let documents = selectedDocs;
      let expireDate=dayjs(exDate).format('MM/DD/YYYY');
      await dispatch(
        saveUser({
          firstName,
          lastName,
          email,
          contactNumber,
          expireDate,
          password,
          documents,
        })
      );
      let user = store.getState().user;
      if (user.responseOK) {
        resetForm();
        setShowError(false);
        setMessage("Registration Successful");
      } else {
        resetForm();
        setShowError(true);
        setMessage(auth.error);
      }
    }
  };

  return (
    <Container
      sx={{ width: "100%", display: "flex", justifyContent: "center" }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        {message && (
          <Stack direction="row" spacing={2} mt={2}>
            <Box mb={2} sx={{ width: "100%" }}>
              <Alert severity={showError ? "error" : "success"}>
                {message}
              </Alert>
            </Box>
          </Stack>
        )}
        <Stack direction="row" spacing={2} mt={2}>
          <Box mb={2} sx={{ width: "200px" }}>
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
          <Box mb={2} sx={{ width: "200px" }}>
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
          <Box mb={2} sx={{ width: "200px" }}>
            <TextField
              label="Email"
              variant="filled"
              {...register("email", { required: true })}
            />
          </Box>
          <Box mb={2} sx={{ width: "200px" }}>
            <TextField
              label="Contact Number"
              {...register("contactNumber", { required: true })}
              variant="filled"
            />
          </Box>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Box mb={2} sx={{ width: "200px" }}>
            <TextField
              label="Password"
              {...register("password", { required: true })}
              variant="filled"
            />
          </Box>
        </Stack>
        {selectItems.length != 0 && (
          <Stack direction="row" spacing={2}>
            <Box mb={2} sx={{ width: "200px" }}>
              <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Documents
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={selectedDocs}
                  onChange={handleChange}
                  input={<OutlinedInput label="Documents" />}
                  renderValue={(selected) =>
                    selected.map((obj) => obj.fileName).join(", ")
                  }
                  MenuProps={MenuProps}
                >
                  {selectItems.map((doc) => (
                    <MenuItem key={doc.fileID} value={doc}>
                      <Checkbox
                        checked={
                          selectedDocs.filter((arr) => arr.fileID == doc.fileID)
                            .length > 0
                        }
                      />
                      <ListItemText primary={doc.fileName} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box mb={2} sx={{ width: "200px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  label="Expire Date"
                  inputFormat="MM/DD/YYYY"
                  value={exDate}
                  onChange={handleDataChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>
          </Stack>
        )}

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
