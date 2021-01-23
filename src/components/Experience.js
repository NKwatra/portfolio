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
            <li key={prod} dangerouslySetInnerHTML={{ __html: prod }} />
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
      name: "Frontier Techworks",
      link: "https://ftworks.de",
      logo: "/ftworkslogo.png",
    },
    profile: "Full Stack Development Intern",
    summary:
      "Frontier Techworks is a global design and engineering consultancy specializing in React.js, React Native, GraphQL, Node.js, and the extended JavaScript ecosystem.",
    details: {
      product: [
        'Contributed to development of system for client <a href="http://digivet.co" target="_blank">DigiVet</a>.',
        "Collaborated with a team of 6 to develop the Dashboard for DigiVet.",
        "Developed the backend api in a team of 4 developers, integrating features such as email services.",
        "Integrated new features into the Digivet application.",
        "Tools: React-Native // Apollo GraphQL, Gatsby, React, Ant Design // Node.js, MongoDB, Apollo GraphQL(Server).",
      ],
    },
    duration: "Jan 2021 - Present | Remote",
  },
  {
    company: {
      name: "Safe-x",
      link: "http://www.safex.work/",
      logo: "/safex-logo.jpg",
    },
    profile: "Full Stack Development Intern",
    summary:
      "Safe-x is a tool for businesses to ensure a safe working environment amidst this Pandemic by monitoring Heath, Social distancing, and Contact tracing of its Employees.",
    details: {
      product: [
        "Contributed to the developed of MVP from scratch.",
        `Collaborated with the team to develop Safe-x mobile app, integrating features
         such as authentication, device storage, etc.`,
        "Developed the backend API and worked on integrating with frontend.",
        "Contributed to the company website, creating skeleton for landing page and blog.",
        "Tools: React-Native // React, NextJs, Gatsby, Ant Design // Node.js, PostgreSQL.",
      ],
    },
    duration: "Jun 2020 - July 2020 | Remote",
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
