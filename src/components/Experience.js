import Image from "next/image";
import styles from "../styles/experience.module.css";
import SectionHeader from "./SectionHeader";

const ExperienceTile = ({
  company: { logo, name, link },
  profile,
  summary,
  details: { product },
  duration,
}) => {
  return (
    <div className={`${styles.tile} my-5`}>
      <a
        href={link}
        target="_blank"
        className={`d-flex flex-column justify-content-center align-items-center ${styles.anchor}`}
      >
        <Image src={logo} width={80} height={80} className={styles.logo} />
        <span className={`h3 font-weight-light mt-2 ${styles.name}`}>
          {name}
        </span>
      </a>
      <div className={styles.line} />
      <div className={`${styles.profile} text-center h4 mt-4`}>{profile}</div>
      <div className="mt-3">
        <em className={` h5 ${styles.summary}`}>{summary}</em>
      </div>
      <p className="mt-4 mt-lg-5">
        <h6 className={`text-uppercase font-weight-light ${styles.subHeading}`}>
          Developed Product
        </h6>
        <ul>
          {product.map((prod) => (
            <li key={prod}>{prod}</li>
          ))}
        </ul>
      </p>
      <p className={`${styles.durationContainer}`}>
        <span className={styles.duration}>{duration}</span>
      </p>
    </div>
  );
};

const experience = [
  {
    company: {
      name: "WESPIRE",
      link: "#",
      logo: "/wespire-logo.jpg",
    },
    profile: "Full Stack Developer",
    summary:
      "SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns.",
    details: {
      product: [
        "Contribute core features across entire stack (20k+ lines of code, 250+ pulls)",
        "Lead front-end development, creating and documenting app-wide design system",
        "Oversee transition from page-based styles to modular component styles",
        "Guide best practices around accessible, semantic UI/UX",
        "Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml",
      ],
    },
    duration: "Feb 2010 - Sept 2011 | Pawtucket, RI",
  },
  {
    company: {
      name: "WESPIRE",
      link: "#",
      logo: "/wespire-logo.jpg",
    },
    profile: "Full Stack Developer",
    summary:
      "SaaS platform that enables enterprise companies to build, run, and measure their positive impact campaigns.",
    details: {
      product: [
        "Contribute core features across entire stack (20k+ lines of code, 250+ pulls)",
        "Lead front-end development, creating and documenting app-wide design system",
        "Oversee transition from page-based styles to modular component styles",
        "Guide best practices around accessible, semantic UI/UX",
        "Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass // HTML, JSX, Haml",
      ],
    },
    duration: "Feb 2010 - Sept 2011 | Pawtucket, RI",
  },
];

export default function Experience() {
  return (
    <section id="Experience">
      <SectionHeader title="Experience" />
      {experience.map((exp, index) => (
        <ExperienceTile key={`${index}`} {...exp} />
      ))}
    </section>
  );
}
