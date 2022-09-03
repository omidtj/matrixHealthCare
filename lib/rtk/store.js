import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import authReducer from "./auth/authSlice";
import userReducer from "./user/userSlice";
import docReducer from "./document/documentSlice";

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  doc:docReducer
});

const persistConfig = {
  key: "root",

  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,

  devTools: process.env.NODE_ENV !== "production",

  middleware: [thunk],
});

export default store;
