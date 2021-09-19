import Head from "next/head";
import Link from "next/link";
import shortenHex from "../../utils/shortenHex";
import PayLinkGenerator from "../../components/Molecules/PayLinkGenerator";
import QRCode from "../../components/Atoms/QRCode";

export default function User({ addr }) {
  return (
    <>
      <Head>
        <title>{shortenHex(addr)} | Profile</title>
      </Head>
      <section id="user" className="container flex items-center gap-4">
        <div className="w-24">
          <QRCode addr={addr} size={250} />
        </div>
        <div className="flex flex-col gap-2">
          <a
            href={`https://ropsten.etherscan.io/address/${addr}`}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="block w-auto h-auto p-12"
          >
            <h1 className="text-xl font-bold" title={addr}>
              {addr}
            </h1>
          </a>
        </div>
      </section>
      <section className="mt-8 grid-gap-2">
        <PayLinkGenerator addr={addr} />
      </section>
    </>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      addr: context.params.slug,
    },
  };
}
