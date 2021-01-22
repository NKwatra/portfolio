import { useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/contact.module.css";
import SectionHeader from "./SectionHeader";

const contact = [
  {
    icon: <BsEnvelopeFill style={{ fontSize: "2rem", cursor: "pointer" }} />,
    label: "kwatraniskarsh@gmail.com",
    link: "mailto:kwatranishkarsh@gmail.com",
    tooltipLabel: "Email Nishkarsh",
  },
  {
    icon: <AiFillGithub style={{ fontSize: "2rem", cursor: "pointer" }} />,
    label: "https://www.github.com/NKwatra/",
    link: "https://github.com/NKwatra/",
    tooltipLabel: "Find Nishkarsh on Github",
  },
  {
    icon: <FaLinkedinIn style={{ fontSize: "2rem", cursor: "pointer" }} />,
    label: "https://www.linkedin.com/in/kwatran/",
    link: "https://www.linkedin.com/in/kwatran/",
    tooltipLabel: "Find Nishkarsh on LinkedIn",
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

const ContactRow = ({ cnt }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <>
      <a
        href={cnt.link}
        target="_blank"
        className={`${styles.entry} position-relative d-inline-block my-3`}
      >
        <span
          className={styles.iconContainer}
          onMouseOver={() => setShowTooltip(true)}
          onMouseOut={() => setShowTooltip(false)}
        >
          <span className="ml-3 d-inline-block mt-3">{cnt.icon}</span>
        </span>
        <span className={`ml-3 d-inline-block ${styles.label} mt-3`}>
          {cnt.label}
        </span>
        <Tooltip label={cnt.tooltipLabel} active={showTooltip} />
      </a>
      <br />
    </>
  );
};

export default function Contact() {
  return (
    <section id="Contact">
      <SectionHeader title="Contact" />
      <div className="py-5 my-5">
        {contact.map((cnt) => (
          <ContactRow cnt={cnt} key={cnt.link} />
        ))}
      </div>
    </section>
  );
}
