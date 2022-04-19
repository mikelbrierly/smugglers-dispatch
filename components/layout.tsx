import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "./layout.module.scss";
import utilStyles from "../styles/utils.module.scss";

const name = "The Smuggler's Dispatch";
export const siteTitle = "The holonet home of the smuggler's dispatch podcast";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="The Smuggler's Dispatch Podcast"
          content="The home of The Smuggler's Dispatch Podcast on the holonet"
        />
        <meta
          property="og:image"
          content="https://assets.podomatic.net/ts/77/c2/d4/smugglersdispatch/pro/3000x3000_15921976.jpg"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/cover.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
            <h1 className={utilStyles.heading2xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  className={utilStyles.borderCircle}
                  src="/images/cover.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>⬅️ Back to Home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
