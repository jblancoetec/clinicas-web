import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import Layout from "../components/_layout/Layout";
import UserContextProvider from "../components/contexto/UserContextProvider";

config.autoAddCss = false;

const MyApp = ({ Component, pageProps }: AppProps) => (
  <UserContextProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </UserContextProvider>
);
export default MyApp;
