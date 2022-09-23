import React from "react";
import {
  Button,
  Stack,
  Box,
  Toolbar,
  TextField,
  Chip,
  Typography,
  Collapse,
  Alert,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import DriveFolderUploadTwoToneIcon from "@mui/icons-material/DriveFolderUploadTwoTone";
import ArrowCircleDownTwoToneIcon from "@mui/icons-material/ArrowCircleDownTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import store from "../lib/rtk/store";
import { fetchUserByEmail } from "../lib/rtk/auth/authSlice";
import { editUser } from "../lib/rtk/user/userSlice";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const User = () => {
  // local states
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileName, setFileName] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedTab, setSelectedTab] = React.useState(0);
  const dispatch = useDispatch();
  //old auth
  let auth = store.getState().auth;
  //when user signed in for a long time we need fresh data
  const getFreshUserData = async (email) => {
    await dispatch(fetchUserByEmail(email));
    //fresh auth
    auth = store.getState().auth;
    console.log(auth.user);
  };
  React.useEffect(() => {
    getFreshUserData(auth.user.email);
  }, []);
  // handles
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const POST_URL = `${process.env.NEXT_PUBLIC_UPLOAD}`;
    ////
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "healthcare");

    const data = await fetch(POST_URL, {
      method: "POST",
      body: formData,
    }).then((r) => r.json());
    if (data) {
      const updatedDoc = [...auth.user.upDocuments];
      updatedDoc.push({
        fileID: data.asset_id,
        fileName,
        fileUrl: data.secure_url,
      });
      console.log(updatedDoc);
      await dispatch(editUser({ id: auth.user.id, upDocuments: updatedDoc }));
      let user = store.getState().user;
      if (user.responseOK) {
        setOpen(true);
        setFileName("");
        setSelectedFile(null);
      }
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileName = (event) => {
    setFileName(event.target.value);
  };
  //download doc
  const handleDownload = (url, fname) => {
    let tempLink = document.createElement("a");
    tempLink.href = url;
    tempLink.setAttribute("download", `${fname}.docx`);
    tempLink.click();
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<ArrowCircleDownTwoToneIcon />}
          label="DOWNLOAD"
          {...a11yProps(0)}
        />
        <Tab
          icon={<DriveFolderUploadTwoToneIcon />}
          label="UPLOAD"
          {...a11yProps(1)}
        />
      </Tabs>
      <TabPanel value={selectedTab} index={0}>
        <Toolbar
          sx={{
            bgcolor: "#37474f",
            color: "white",
            mb: 5,
            mt: 1,
          }}
        >
          <ArrowCircleDownTwoToneIcon />
          <Typography
            sx={{ flex: "1 1 100%", ml: 1 }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Download Documents
          </Typography>
        </Toolbar>
        <Stack
          spacing={2}
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center", m: 5 }}
        >
          {auth.user.documents?.length > 0 ? (
            auth.user.documents.map((doc, index) => (
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
      </TabPanel>
      <TabPanel value={selectedTab} index={1}>
        <Toolbar
          sx={{
            bgcolor: "#37474f",
            color: "white",
            mb: 5,
            mt: 1,
          }}
        >
          <DriveFolderUploadTwoToneIcon />
          <Typography
            sx={{ flex: "1 1 100%", ml: 1 }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Upload Documents
          </Typography>
        </Toolbar>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Collapse in={open}>
            <Alert
              severity="success"
              variant="filled"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                    setFileName("");
                    setSelectedFile(null);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2, width: "250px" }}
            >
              Saved Successfully
            </Alert>
          </Collapse>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "flex-end", justifyContent: "center", mb: 5 }}
          >
            <TextField
              label="File Name"
              variant="filled"
              value={fileName}
              onChange={handleFileName}
            />
            <Button
              variant="outlined"
              endIcon={<CloudUploadTwoToneIcon />}
              component="label"
            >
              Upload File
              <input
                type="file"
                accept="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                hidden
                onChange={handleFileSelect}
              />
            </Button>
            {selectedFile && (
              <Chip
                icon={<CheckCircleTwoToneIcon />}
                label={selectedFile?.name}
                color="success"
              />
            )}
            <Button
              type="submit"
              variant="contained"
              endIcon={<SaveTwoToneIcon />}
            >
              Submit
            </Button>
          </Stack>
        </form>
      </TabPanel>
    </Box>
  );
};
export async function getStaticProps(context) {
  return {
    props: {
      protected: true,
    },
  };
}
export default User;
