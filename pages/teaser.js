import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";

export default function teaser() {
  return (
    <Layout>
      <Head>
        <title>Episode 1: Trailer</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>Smuggler's Dispatch Teaser episode!</h1>
    </Layout>
  );
}
