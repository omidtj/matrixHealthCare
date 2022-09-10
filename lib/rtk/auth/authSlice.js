import axios from "../../api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isSignedIn: false,
  isAdmin: false,
  error: null,
};
export const fetchUserByEmail = createAsyncThunk(
  "user/fetchUserByEmail",
  (email) => {
    const params = new URLSearchParams([["email", email]]);
    return axios.get("/users", { params }).then((response) => response.data);
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinUser: (state, action) => {
      state.isSignedIn = true;
      state.isAdmin = false;
    },
    signinAdmin: (state, action) => {
      state.isSignedIn = true;
      state.isAdmin = true;
    },
    signout: () => initialState,
  },
  extraReducers: (builder) => {
    //fetchUserByEmail
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.user = action.payload[0];
      state.error = "";
      
    });
    builder.addCase(fetchUserByEmail.rejected, (state, action) => {
      state.user = {};
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
export const { signinUser, signinAdmin, signout } = authSlice.actions;
