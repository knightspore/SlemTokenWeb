import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Organisms/Header";
import { MetaMaskWrapper } from "../components/_Meta/MetaMaskProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskWrapper>
      <Head>
        <title>$lemtoken</title>
      </Head>
      <Header />
      <div className="container p-6 lg:p-12">
        <Component {...pageProps} />
      </div>
    </MetaMaskWrapper>
  );
}

export default MyApp;
