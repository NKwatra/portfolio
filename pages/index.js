import Head from "next/head";
import { useState } from "react";
import About from "../src/components/About";
import Experience from "../src/components/Experience";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Sidebar from "../src/components/Sidebar";
import styles from "../src/styles/index.module.css";

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <div className="container-fluid px-0">
      <Head>
        <title>Nishkarsh Kwatra | Full Stack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header setActiveIndex={setActiveIndex} />
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <main className={styles.content}>
        <Home />
        <About />
        <Experience />
      </main>
    </div>
  );

  {
    /* <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div> */
  }
}
