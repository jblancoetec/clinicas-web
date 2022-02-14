import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import Layout from "../components/_layout/Layout";
import { SessionProvider } from "next-auth/react";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </SessionProvider>
);
export default MyApp;
