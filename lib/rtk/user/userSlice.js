import axios from "../../api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  error: null,
  responseOK: false,
};
export const fetchAllUsers = createAsyncThunk("user/fetchAllUsers", () => {
  return axios.get("/users").then((response) => response.data);
});
export const fetchUserByID = createAsyncThunk("user/fetchUserByID", (id) => {
  const params = new URLSearchParams([["id", id]]);
  return axios.get("/users", { params }).then((response) => response.data);
});
export const saveUser = createAsyncThunk(
  "user/saveUser",
  ({ firstName, lastName, email, contactNumber, password, documents,expireDate }) => {
    return axios
      .post("/users", {
        firstName,
        lastName,
        email,
        contactNumber,
        password,
        expireDate,
        documents,
        upDocuments:[]
      })
      .then((response) => response.data);
  }
);
export const editUser = createAsyncThunk(
  "user/editUser",
  ({ id , ...editedFields }) => {
    return axios
      .put(`/users/${id}`, {
        ...editedFields
      })
      .then((response) => response.data);
  }
);
export const deleteUserByID = createAsyncThunk("user/deleteUserByID", (id) => {
  
  return axios.delete(`/users/${id}`).then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    //fetchAllUsers
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.error = null;
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.users = [];
      state.error = action.error.message;
    });
    //fetchUserByID
    builder.addCase(fetchUserByID.fulfilled, (state, action) => {
      state.user = action.payload[0];
      state.error = "";
    });
    builder.addCase(fetchUserByID.rejected, (state, action) => {
      state.user = {};
      state.error = action.error.message;
    });
    //saveUser
    builder.addCase(saveUser.fulfilled, (state, action) => {
      state.responseOK = true;
      state.error = null;
    });
    builder.addCase(saveUser.rejected, (state, action) => {
      state.responseOK = false;
      state.error = action.error.message;
    });
    //editUser
    builder.addCase(editUser.fulfilled, (state, action) => {
      state.responseOK = true;
      state.error = null;
    });
    builder.addCase(editUser.rejected, (state, action) => {
      state.responseOK = false;
      state.error = action.error.message;
    });
    //deleteUserByID
    builder.addCase(deleteUserByID.fulfilled, (state, action) => {
      state.responseOK = true;
      state.error = null;
    });
    builder.addCase(deleteUserByID.rejected, (state, action) => {
      state.responseOK = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { reset } = userSlice.actions;
