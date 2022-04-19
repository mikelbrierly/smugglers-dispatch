import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";
import Link from "next/link";
import Image from "next/image";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../lib/posts";

// getStaticProps is only run on the server side
export const getStaticProps: GetStaticProps = () => {
  const allPostsData = getSortedPostsData();

  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>The Smuggler's Dispatch</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">The Smuggler's Dispatch Podcast</h1>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Transmissions</h2>
          <ul>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer>
        <ul>
          <li>
            <a href="https://google.com">
              <img src="" alt="" className="social" />
            </a>
            Spotify
          </li>
          <li>
            <a href="https://google.com">
              <img src="" alt="" className="social" />
            </a>
            Instagram
          </li>
          <li>
            <a href="https://google.com">
              <img src="" alt="" className="social" />
            </a>
            Tik Tok
          </li>
          <li>
            <a href="https://google.com">
              <img src="" alt="" className="social" />
            </a>
            YouTube
          </li>
        </ul>
      </footer>
    </Layout>
  );
}
