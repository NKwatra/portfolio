import styles from "../styles/skills.module.css";
import SectionHeader from "./SectionHeader";

const skills = [
  {
    heading: "HTML",
    items: [
      {
        label: "HTML5",
        image: "/html5.png",
      },
      {
        label: "JSX",
        image: "/react.png",
      },
      {
        label: "HAML",
        image: "/haml.png",
      },
      {
        label: "JADE",
        image: "/jade.png",
      },
      {
        label: "JEKYLL",
        image: "/jekyll.png",
      },
    ],
  },
  {
    heading: "HTML",
    items: [
      {
        label: "HTML5",
        image: "/html5.png",
      },
      {
        label: "JSX",
        image: "/react.png",
      },
      {
        label: "HAML",
        image: "/haml.png",
      },
      {
        label: "JADE",
        image: "/jade.png",
      },
      {
        label: "JEKYLL",
        image: "/jekyll.png",
      },
    ],
  },
  {
    heading: "HTML",
    items: [
      {
        label: "HTML5",
        image: "/html5.png",
      },
      {
        label: "JSX",
        image: "/react.png",
      },
      {
        label: "HAML",
        image: "/haml.png",
      },
      {
        label: "JADE",
        image: "/jade.png",
      },
      {
        label: "JEKYLL",
        image: "/jekyll.png",
      },
    ],
  },
  {
    heading: "HTML",
    items: [
      {
        label: "HTML5",
        image: "/html5.png",
      },
      {
        label: "JSX",
        image: "/react.png",
      },
      {
        label: "HAML",
        image: "/haml.png",
      },
      {
        label: "JADE",
        image: "/jade.png",
      },
      {
        label: "JEKYLL",
        image: "/jekyll.png",
      },
    ],
  },
];

const SkillRow = ({ heading, items }) => {
  return (
    <div
      className={`${styles.skillRow} mx-2 mx-lg-5 px-3 px-lg-4 py-3 pt-lg-4 pt-3 my-3 mt-lg-4`}
    >
      <h4 className={`${styles.heading} h1`}>{heading}</h4>
      <div className={styles.line} />
      <div className="d-flex flex-wrap pt-3">
        {items.map((item) => (
          <div className={styles.skillContainer}>
            <div>
              <img
                src={item.image}
                className={styles.skillImage}
                alt={item.label}
              />
            </div>
            <div className="mt-2">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Skills() {
  return (
    <section id="Skills">
      <SectionHeader title="Skills" />
      {skills.map((skill) => (
        <SkillRow {...skill} />
      ))}
    </section>
  );
}
