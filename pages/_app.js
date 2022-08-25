import React, { useEffect } from "react";
import App from "next/app";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lightTheme";
import "../styles/globals.css";
import Layout from "../containers/layout/layout";
import ErrorPage from "./error";
//redux
import { Provider } from "react-redux";
import store from "../lib/rtk/store";
//redux-persist
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
let persistor = persistStore(store);

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  let auth = store.getState().auth;
  let content = <Component {...pageProps} />;
  if (pageProps.protected) {
    if (!auth.isSignedIn) {
      content = <ErrorPage />;
    }
    if (pageProps.adminOnly) {
      if (!auth.isAdmin) {
        content = <ErrorPage />;
      }
    }
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Layout>{content}</Layout>
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

MyApp.getInitialProps = async (appContext) => {
  appContext.ctx.reduxStore = store;

  const pageProps = await App.getInitialProps(appContext);
  return {
    ...pageProps,
  };
};

export default MyApp;
