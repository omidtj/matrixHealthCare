import React, { useState, useEffect } from "react";
import { Box, Toolbar, Typography } from "@mui/material";
import BorderColorTwoToneIcon from "@mui/icons-material/BorderColorTwoTone";
import { EditForm } from "../../../components/Customs";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { fetchUserByID } from "../../../lib/rtk/user/userSlice";
import store from "../../../lib/rtk/store";
const EditUser = () => {
  const [userForEditing, setUserForEditing] = useState(null);
  //hooks
  const dispatch = useDispatch();
  const router = useRouter();
  //
  const { uid } = router.query;
  const getUser = async () => {
    await dispatch(fetchUserByID(uid));
    const user = store.getState().user;
    if (user.responseOK) setUserForEditing(user.user);
  };
  //useEffect
  useEffect(() => {
    getUser();
  }, []);
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
          Edit User {userForEditing?.firstName}
        </Typography>
      </Toolbar>
      {userForEditing && <EditForm eUser={userForEditing} />}
    </Box>
  );
};
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
      adminOnly: true,
    },
  };
}

export default EditUser;
