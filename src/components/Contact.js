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
      <div className={`position-relative my-3 ${styles.entry}`}>
        <div className="text-center">
          <a
            className={`${styles.iconContainer} pt-3 ${styles.anchor}`}
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
            href={cnt.link}
            target="_blank"
          >
            {cnt.icon}
          </a>
        </div>
        <div className={`text-center pt-2 ml-lg-3 pt-lg-3`}>
          <a href={cnt.link} target="_blank" className={styles.anchorText}>
            {cnt.label}
          </a>
        </div>
        <Tooltip label={cnt.tooltipLabel} active={showTooltip} />
      </div>
      <br />
    </>
  );
};

export default function Contact() {
  return (
    <section id="Contact" className="vh-100">
      <SectionHeader title="Contact" />
      <div className="py-5 my-5">
        {contact.map((cnt) => (
          <ContactRow cnt={cnt} key={cnt.link} />
        ))}
      </div>
    </section>
  );
}
