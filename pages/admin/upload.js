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
} from "@mui/material";
import CloudUploadTwoToneIcon from "@mui/icons-material/CloudUploadTwoTone";
import SaveTwoToneIcon from "@mui/icons-material/SaveTwoTone";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import DriveFolderUploadTwoToneIcon from "@mui/icons-material/DriveFolderUploadTwoTone";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import store from "../../lib/rtk/store";
import { saveDoc } from "../../lib/rtk/document/documentSlice";
import DocumentsTable from "../../components/Customs/DocumentsTable";
const Form = () => {
  // a local state to store the currently selected file.
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [fileName, setFileName] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const POST_URL = "https://api.cloudinary.com/v1_1/ded8buvyc/auto/upload";
    ////
    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("upload_preset", "healthcare");

    const data = await fetch(POST_URL, {
      method: "POST",
      body: formData,
    }).then((r) => r.json());
    if (data) {
      await dispatch(
        saveDoc({ fileID: data.asset_id, fileName, fileUrl: data.secure_url })
      );
      let doc = store.getState().doc;
      if (doc.responseOK) {
        setOpen(true);
        setFileName("");
        setSelectedFile("");
        window.location.reload();
      }
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleFileName = (event) => {
    setFileName(event.target.value);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Toolbar
        sx={{
          bgcolor: "#37474f",
          color: "white",
          mb: 5,
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
        sx={{ alignItems: "flex-end", justifyContent: "center" }}
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
          sx={{ alignItems: "flex-end", justifyContent: "center" }}
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
            <input type="file" hidden onChange={handleFileSelect} />
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
      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: "flex-end", justifyContent: "center", mt: 5 }}
      >
        <DocumentsTable />
      </Stack>
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
export default Form;
