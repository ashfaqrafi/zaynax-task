import React from "react";
import { AppProps } from "next/app";

import "../css/index.css";
import "../styles/index.scss";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;
