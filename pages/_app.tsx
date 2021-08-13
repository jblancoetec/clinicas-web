import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>
          Área de Hemoterapia - Hospital de Clinicas &quot;José de San
          Martín&quot;
        </title>
      </Head>
      <Header />
      <main style={{ backgroundColor: "var(--gris)", overflow: "auto" }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
export default MyApp;
