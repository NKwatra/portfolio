import React, { useState } from "react";
import { BsEnvelopeFill, BsFillPersonFill, BsStarFill } from "react-icons/bs";
import {
  FaChartLine,
  FaGraduationCap,
  FaPen,
  FaStickyNote,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiBarChart2Fill, RiTableLine } from "react-icons/ri";
import { Link } from "react-scroll";
import styles from "../styles/sidebar.module.css";

const options = [
  {
    title: "About",
    className: styles.about,
    icon: <BsFillPersonFill style={{ fontSize: "2rem", color: "#008073" }} />,
  },
  {
    title: "Experience",
    className: styles.experience,
    icon: <FaChartLine style={{ fontSize: "2rem", color: "#00bcd4" }} />,
  },
  {
    title: "Projects",
    className: styles.project,
    icon: <RiTableLine style={{ fontSize: "2rem", color: "#3f51b5" }} />,
  },
  {
    title: "Skills",
    className: styles.skill,
    icon: <RiBarChart2Fill style={{ fontSize: "2rem", color: "#9c27b0" }} />,
  },
  {
    title: "Awards",
    className: styles.award,
    icon: <BsStarFill style={{ fontSize: "2rem", color: "#f44336" }} />,
  },
  {
    title: "Education",
    className: styles.education,
    icon: <FaGraduationCap style={{ fontSize: "2rem", color: "#ff9800" }} />,
  },
  {
    title: "Contact",
    className: styles.contact,
    icon: <BsEnvelopeFill style={{ fontSize: "2rem", color: "#795548" }} />,
  },
  {
    title: "Blog",
    className: styles.blog,
    icon: <FaPen style={{ color: "#fbc02d", fontSize: "2rem" }} />,
  },
  {
    title: "Resume",
    className: styles.resume,
    icon: <FaStickyNote style={{ fontSize: "2rem", color: "#424242" }} />,
  },
];

export default function Sidebar({ activeIndex, setActiveIndex }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <nav
      className={
        isSidebarVisible
          ? `${styles.visible} ${styles.sidebar}`
          : `${styles.hidden} ${styles.sidebar}`
      }
    >
      <div
        className={
          isSidebarVisible
            ? `${styles.hamburger} mt-n2 ${styles.hamburgerOpen}`
            : `${styles.hamburger} mt-n2`
        }
      >
        <GiHamburgerMenu
          onClick={() => setIsSidebarVisible((current) => !current)}
        />
      </div>
      <ul>
        {options.map((option, index) => (
          <Link
            key={option.title}
            to={option.title}
            spy={true}
            smooth={true}
            duration={500}
          >
            <li
              className={`${styles.navItem} ${option.className} d-flex align-items-center`}
              onClick={() => setActiveIndex(index)}
            >
              {option.icon}
              <span
                className={`${styles.option} ml-3 font-weight-light ${
                  activeIndex === index ? "font-weight-bold" : ""
                }`}
              >
                {option.title}
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
}
