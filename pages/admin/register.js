import React from "react";
import { Box, Toolbar, Typography, Paper } from "@mui/material";
import PersonAddAltTwoToneIcon from "@mui/icons-material/PersonAddAltTwoTone";
import { RegisterForm } from "../../components/Customs";
import { fetchAllDocs } from "../../lib/rtk/document/documentSlice";

const Register = ({docs}) => {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
      <RegisterForm edocs={docs} />
    </Box>
  );
};
export default Register;
Register.getInitialProps = async ({ reduxStore }) => {
  await reduxStore.dispatch(fetchAllDocs());
  const { doc } = await reduxStore.getState();
  return {
    docs: doc.docs,
    protected: true,
    adminOnly: true,
  };
};
