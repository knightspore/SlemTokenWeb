import Head from "next/head";
import "../styles/globals.css";
import { MetaMaskWrapper } from "../components/_Meta/MetaMaskProvider";
import LoginStatusIndicator from "../components/LoginStatusIndicator";

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskWrapper>
      <Head>
        <title>$lemtoken</title>
      </Head>
      <LoginStatusIndicator />
      <Component {...pageProps} />
    </MetaMaskWrapper>
  );
}

export default MyApp;
