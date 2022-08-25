import axios from "../../api/axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isSignedIn: false,
  isSignedUp: false,
  isAdmin:false,
  error: null,
};
export const fetchUserByEmail = createAsyncThunk(
  "user/fetchUserByEmail",
  (email) => {
    const params = new URLSearchParams([["email", email]]);
    return axios.get("/users", { params }).then((response) => response.data);
  }
);
export const signup = createAsyncThunk(
  "user/signup",
  ({ firstName, lastName, email, contactNumber, password }) => {
    return axios
      .post("/users", { firstName, lastName, email, contactNumber, password })
      .then((response) => response.data);
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signinUser: (state, action) => {
      state.isSignedIn = true;
      state.isAdmin = false;
      state.isSignedUp = false;
    },
    signinAdmin: (state, action) => {
      state.isSignedIn = true;
      state.isAdmin = true;
      state.isSignedUp = false;
    },
    signout: () => initialState,
  },
  extraReducers: (builder) => {
    //fetchUserByEmail
    builder.addCase(fetchUserByEmail.fulfilled, (state, action) => {
      state.user = action.payload[0];
      state.error = "";
      state.isSignedUp = false;
      state.isSignedIn = false;
    });
    builder.addCase(fetchUserByEmail.rejected, (state, action) => {
      state.user = {};
      state.error = action.error.message;
      state.isSignedUp = false;
      state.isSignedIn = false;
    });
    //signup
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isSignedUp = true;
      state.isSignedIn = false;
      state.error = "";
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.user = {};
      state.isSignedUp = false;
      state.isSignedIn = false;
      state.error = action.error.message;
    });
  },
});

export default authSlice.reducer;
export const { signinUser,signinAdmin, signout } = authSlice.actions;
