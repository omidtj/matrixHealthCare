import React from "react";
import { fetchUserByID } from "../../../lib/rtk/user/userSlice";
import { Button, Toolbar, Typography, Stack, Box } from "@mui/material";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";

export default function Users({ user, error }) {
  const handleDownload = (url, fname) => {
    let tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.setAttribute("download", `${fname}.docx`);
    tempLink.click();
  };
  let content = null;
  if (error) content = <div>Error: {error}</div>;
  if (user)
    content = (
      <Box sx={{ width: "100%", height: "100%" }}>
        <Toolbar
          sx={{
            bgcolor: "#37474f",
            color: "white",
            mb: 5,
          }}
        >
          <ArrowCircleDownTwoToneIcon />
          <Typography
            sx={{ flex: "1 1 100%", ml: 1 }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Download Documents (uploaded by {user.firstName} {user.lastName})
          </Typography>
        </Toolbar>
        <Stack
          spacing={2}
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center", m: 5 }}
        >
          {user.upDocuments?.length > 0 ? (
            user.upDocuments.map((doc,index) => (
              <Button
                key={index}
                size="large"
                variant="contained"
                startIcon={<ArrowCircleDownTwoToneIcon />}
                onClick={() => handleDownload(doc.fileUrl, doc.fileName)}
              >
                {doc.fileName}
              </Button>
            ))
          ) : (
            <h3>No Documents For Download</h3>
          )}
        </Stack>
      </Box>
    );

  return <>{content}</>;
}
Users.getInitialProps = async ({ reduxStore, query }) => {
  await reduxStore.dispatch(fetchUserByID(query.slug));
  const { user } = await reduxStore.getState();
  return {
    user: user.user,
    error: user.error,
    protected: true,
    adminOnly: true,
  };
};
