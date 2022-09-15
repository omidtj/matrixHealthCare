import React from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import { EditForm } from "../../../components/Customs";
import { fetchUserByID } from "../../../lib/rtk/user/userSlice";
import { fetchAllDocs } from "../../../lib/rtk/document/documentSlice";

const EditUser = ({ user, error , docs}) => {
  let content = null;
  if (error) content = <div>Error: {error}</div>;
  if (user) content = <EditForm eUser={user} edocs={docs} />;
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Toolbar
        sx={{
          bgcolor: "#37474f",
          color: "white",
        }}
      >
        <BorderColorTwoToneIcon />
        <Typography
          sx={{ flex: "1 1 100%", ml: 1 }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Edit User 
        </Typography>
      </Toolbar>
      {content}
    </Box>
  );
};
export default EditUser;

EditUser.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(fetchUserByID(query.slug));
  await reduxStore.dispatch(fetchAllDocs());
  const { user,doc } = await reduxStore.getState();
  return {
    user: user.user,
    error: user.error,
    docs:doc.docs,
    protected: true,
    adminOnly: true,
  };
};
