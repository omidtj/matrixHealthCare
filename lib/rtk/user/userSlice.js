import axios from "../../api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: {},
  error: null,
};
export const fetchAllUsers = createAsyncThunk("user/fetchAllUsers", () => {
  return axios.get("/users").then((response) => response.data);
});
export const fetchUserByID = createAsyncThunk("user/fetchUserByID", (id) => {
  const params = new URLSearchParams([["id", id]]);
  return axios.get("/users", { params }).then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    //fetchUserByID
    builder.addCase(fetchUserByID.fulfilled, (state, action) => {
      state.user = action.payload[0];
      state.error = "";
    });
    builder.addCase(fetchUserByID.rejected, (state, action) => {
      state.user = {};
      state.error = action.error.message;
    });
    //fetchAllUsers
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.users = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { reset } = userSlice.actions;
