import React from "react";
import {
  Box,
  Toolbar,
  Typography,
  Paper,
} from "@mui/material";
import PersonAddAltTwoToneIcon from '@mui/icons-material/PersonAddAltTwoTone';

import { RegisterForm } from "../../components/Customs";

const Register = () => {
  return (
    <Box sx={{ width: "100%",height:'100%' }}>
        <Toolbar
          sx={{
            bgcolor: "#37474f",
            color: "white",
          }}
        >
          <PersonAddAltTwoToneIcon />
          <Typography
            sx={{ flex: "1 1 100%", ml: 1 }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Add User
          </Typography>
        </Toolbar>
        <RegisterForm />
    </Box>
  );
};

export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      adminOnly: true,
    },
  };
}

export default Register;
