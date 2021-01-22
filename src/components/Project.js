import { useState } from "react";
import { AiFillGithub, AiOutlineClose } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdLaunch } from "react-icons/md";
import styles from "../styles/project.module.css";
import SectionHeader from "./SectionHeader";

const projects = [
  {
    title: "Code Island",
    github: "",
    live: "",
    desc:
      "Online headquarters for the local Code for America brigade in Rhode Island.",
    cover: "/code-island.jpg",
    techStack: [
      "Ruby on Rails backend",
      "Bulma CSS frontend",
      "String interpolation via recursion",
      "Dependency free JS config",
    ],
  },
  {
    title: "Code Island",
    github: "",
    live: "",
    desc:
      "Online headquarters for the local Code for America brigade in Rhode Island.",
    cover: "/code-island.jpg",
    techStack: [
      "Ruby on Rails backend",
      "Bulma CSS frontend",
      "String interpolation via recursion",
      "Dependency free JS config",
    ],
  },
  {
    title: "Code Island",
    github: "#",
    live: "#",
    desc:
      "Online headquarters for the local Code for America brigade in Rhode Island.",
    cover: "/code-island.jpg",
    techStack: [
      "Ruby on Rails backend",
      "Bulma CSS frontend",
      "String interpolation via recursion",
      "Dependency free JS config",
    ],
  },
  {
    title: "Code Island",
    github: "",
    live: "",
    desc:
      "Online headquarters for the local Code for America brigade in Rhode Island.",
    cover: "/code-island.jpg",
    techStack: [
      "Ruby on Rails backend",
      "Bulma CSS frontend",
      "String interpolation via recursion",
      "Dependency free JS config",
    ],
  },
  {
    title: "Code Island",
    github: "",
    live: "",
    desc:
      "Online headquarters for the local Code for America brigade in Rhode Island.",
    cover: "/code-island.jpg",
    techStack: [
      "Ruby on Rails backend",
      "Bulma CSS frontend",
      "String interpolation via recursion",
      "Dependency free JS config",
    ],
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
      <div className="card w-100 my-3 position-relative">
        <img
          src={cover}
          className={`card-img-top ${styles.pointer} ${styles.cover}`}
          alt="project cover"
          onClick={() => setShowExtra(true)}
        />
        <div className="card-body">
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
                Technologies
              </div>
              <ul className="mt-lg-3 ml-lg-3">
                {techStack.map((stack) => (
                  <li key={stack} className={styles.listItem}>
                    {stack}
                  </li>
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
    <section id="Projects">
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
