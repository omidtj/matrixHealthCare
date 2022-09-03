import axios from "../../api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  docs: [],
  doc: {},
  error: null,
  responseOK: false,
};

export const fetchAllDocs = createAsyncThunk("doc/fetchAllDocs", () => {
  return axios.get("/documents").then((response) => response.data);
});
export const fetchDocByID = createAsyncThunk("doc/fetchDocByID", (id) => {
  const params = new URLSearchParams([["id", id]]);
  return axios.get("/documents", { params }).then((response) => response.data);
});
export const saveDoc = createAsyncThunk(
  "doc/saveDoc",
  ({ fileID, fileName, fileUrl }) => {
    return axios
      .post("/documents", { fileID, fileName, fileUrl })
      .then((response) => response.data);
  }
);
export const deleteDocByID = createAsyncThunk("doc/deleteDocByID", (id) => {
  return axios.delete(`/documents/${id}`).then((response) => response.data);
});

const docSlice = createSlice({
  name: "doc",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    //fetchAllDocs
    builder.addCase(fetchAllDocs.fulfilled, (state, action) => {
      state.docs = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllDocs.rejected, (state, action) => {
      state.docs = [];
      state.error = action.error.message;
    });
    //fetchDocByID
    builder.addCase(fetchDocByID.fulfilled, (state, action) => {
      state.doc = action.payload[0];
      state.error = "";
    });
    builder.addCase(fetchDocByID.rejected, (state, action) => {
      state.doc = {};
      state.error = action.error.message;
    });
    //saveDoc
    builder.addCase(saveDoc.fulfilled, (state, action) => {
      state.responseOK = true;
      state.error = null;
    });
    builder.addCase(saveDoc.rejected, (state, action) => {
      state.responseOK = false;
      state.error = action.error.message;
    });
    //deleteDocByID
    builder.addCase(deleteDocByID.fulfilled, (state, action) => {
      state.responseOK = true;
      state.error = null;
    });
    builder.addCase(deleteDocByID.rejected, (state, action) => {
      state.responseOK = false;
      state.error = action.error.message;
    });
  },
});

export default docSlice.reducer;
export const { reset } = docSlice.actions;
