import { useState } from "react";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdLaunch } from "react-icons/md";
import styles from "../styles/project.module.css";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Sunshine",
    github: "https://github.com/NKwatra/Sunshine",
    live:
      "https://github.com/NKwatra/Sunshine/releases/download/v1.0.0/Sunshine.apk",
    desc:
      "A cross platform mobile application that gives weather forecast for next 16 days",
    cover: "/sunshine.png",
    techStack: [
      "Developed in <strong>React-Native</strong> using Expo.",
      "Supports units preference setting to either Imperial or Metric.",
      "Loads weather based on current location or predefined state.",
      "Synchornises data automatically every 6 hours and stores it locally for offline viewing.",
    ],
  },
  {
    title: "Movify",
    github: "https://github.com/NKwatra/Movify",
    live:
      "https://github.com/NKwatra/Movify/releases/download/v1.0.0/movify.apk",
    desc: "An android application to search for latest movies and trailers",
    cover: "/movify.png",
    techStack: [
      "Developed using <strong>Android SDK</strong> and Java.",
      "Integrated TmDb API for movie data and Youtube Android Player API for trialers.",
      "SQLite Database for storing favourites for offline viewing.",
      "Used ViewPager and Fragments for tabs and screens.",
    ],
  },
  {
    title: "Portfolio",
    github: "https://github.com/NKwatra/Protfolio",
    live: "https://portfolio-six-gilt.vercel.app",
    desc: "Portfolio website of Nishkarsh Kwatra (this website).",
    cover: "/portfolio.png",
    techStack: ["Developed using <strong>NextJs</strong> and bootsrap."],
  },
];

const Tooltip = ({ label, active }) => {
  return (
    <div
      className={
        active ? `${styles.tooltip} ${styles.visible}` : `${styles.tooltip}`
      }
    >
      {label}
    </div>
  );
};

const ProjectTile = ({ title, github, live, desc, cover, techStack }) => {
  const [showExtra, setShowExtra] = useState(false);
  const [showLiveTooltip, setShowLiveTooltip] = useState(false);
  const [showCodeTooltip, setShowCodeTooltip] = useState(false);
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className={`card w-100 my-3 position-relative ${styles.shadow}`}>
        <img
          src={cover}
          className={`card-img-top ${styles.pointer} ${styles.cover}`}
          alt="project cover"
          onClick={() => setShowExtra(true)}
        />
        <div className="card-body bg-white">
          <div className="d-flex justify-content-between">
            <h5
              className={`card-title font-weight-light h4 ${styles.teal} ${styles.pointer}`}
              onClick={() => setShowExtra(true)}
            >
              {title}
            </h5>
            <BiDotsVerticalRounded
              className={`${styles.teal} ${styles.pointer} ${styles.menu}`}
              onClick={() => setShowExtra(true)}
            />
          </div>
          <p className={`card-text mt-2 ${styles.lineHeight}`}>{desc}</p>
        </div>
        <div
          className={
            showExtra ? `${styles.extra} ${styles.show}` : `${styles.extra}`
          }
        >
          {showExtra ? (
            <div>
              <AiOutlineClose
                className={styles.close}
                onClick={() => setShowExtra(false)}
              />
              <div
                className={`mt-4 ml-4 ${styles.extraHeading} font-weight-light h4`}
              >
                Features
              </div>
              <ul className="mt-lg-3 ml-lg-3 pr-1">
                {techStack.map((stack) => (
                  <li
                    key={stack}
                    className={styles.listItem}
                    dangerouslySetInnerHTML={{ __html: stack }}
                  />
                ))}
              </ul>
              <div className={styles.line} />
              <div className={styles.actionContainer}>
                <a
                  href={live}
                  target="_blank"
                  className={`${styles.action}`}
                  onMouseEnter={() => setShowLiveTooltip(true)}
                  onMouseLeave={() => setShowLiveTooltip(false)}
                >
                  <Tooltip label="View Online" active={showLiveTooltip} />
                  <MdLaunch className={`${styles.actionIcon} ml-3 mt-3`} />
                </a>
                <a
                  href={github}
                  target="_blank"
                  className={`${styles.action} ml-4`}
                  onMouseEnter={() => setShowCodeTooltip(true)}
                  onMouseLeave={() => setShowCodeTooltip(false)}
                >
                  <Tooltip label="View Code" active={showCodeTooltip} />
                  <AiFillGithub className={`${styles.actionIcon} ml-3 mt-3`} />
                </a>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  return (
    <section id="Projects" className="pb-3">
      <SectionHeader title="Projects" />
      <div className="container-fluid">
        <div className="row">
          {projects.map((project) => (
            <ProjectTile {...project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
