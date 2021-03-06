import Head from "next/head";
import { useEffect, useState } from "react";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Education from "../src/components/Education";
import Experience from "../src/components/Experience";
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Project from "../src/components/Project";
import Resume from "../src/components/Resume";
import Sidebar from "../src/components/Sidebar";
import Skills from "../src/components/Skills";
import styles from "../src/styles/index.module.css";

const Sections = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Contact",
  "Resume",
];

export default function Index() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [elementPositions, setElementPositions] = useState([]);

  useEffect(() => {
    const bodyReact = document.body.getBoundingClientRect();
    setElementPositions(
      Sections.map(
        (section) =>
          document.getElementById(section).getBoundingClientRect().top -
          bodyReact.top
      )
    );
  }, []);

  useEffect(() => {
    const sectionActivator = () => {
      let currentScroll = document.documentElement.scrollTop;
      console.log(currentScroll);
      let index = elementPositions.length - 2;
      for (let i = 1; i < elementPositions.length; i++) {
        if (elementPositions[i] > currentScroll) {
          index = i - 2;
          break;
        }
      }
      setActiveIndex(index);
    };

    document.addEventListener("scroll", sectionActivator, { passive: true });
    () => document.removeEventListener(sectionActivator);
  }, [elementPositions]);

  return (
    <div className="container-fluid px-0">
      <Head>
        <title>Nishkarsh Kwatra | Full Stack Developer</title>
        <link rel="icon" href="/no-bugs.png" />
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
        <Project />
        <Skills />
        <Education />
        <Contact />
        <Resume />
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
