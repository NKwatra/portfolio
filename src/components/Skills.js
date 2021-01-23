import styles from "../styles/skills.module.css";
import SectionHeader from "./SectionHeader";

const skills = [
  {
    heading: "Programming Languages",
    items: [
      {
        label: "JavaScript",
        image: "/javascript-logo.svg",
      },
      {
        label: "Java",
        image: "/java-logo.jpg",
      },
      {
        label: "C++",
        image: "/c++logo.png",
      },
      {
        label: "C",
        image: "/c-logo.png",
      },
      {
        label: "SQL",
        image: "/sql-logo.png",
      },
    ],
  },
  {
    heading: "FRONT END",
    items: [
      {
        label: "HTML5",
        image: "/html5.png",
      },
      {
        label: "CSS3",
        image: "/css3.png",
      },
      {
        label: "React",
        image: "/react.png",
      },
      {
        label: "Bootstrap",
        image: "/bootstrap.png",
      },
      {
        label: "Ant Design",
        image: "/antd.svg",
      },
    ],
  },
  {
    heading: "BACK END",
    items: [
      {
        label: "Node.js",
        image: "/nodejs.png",
      },
      {
        label: "MongoDB",
        image: "/mongodb.png",
      },
      {
        label: "Express",
        image: "/express.png",
      },
      {
        label: "GraphQL",
        image: "/graphql.svg",
      },
      {
        label: "Next.js",
        image: "/nextjs.png",
      },
    ],
  },
  {
    heading: "Mobile App",
    items: [
      {
        label: "Android",
        image: "/android.jpeg",
      },
      {
        label: "React-Native",
        image: "/react.png",
      },
    ],
  },
  {
    heading: "Tools",
    items: [
      {
        label: "Git",
        image: "/git-logo.png",
      },
      {
        label: "Android Studio",
        image: "/android-studio.jpeg",
      },
      {
        label: "VS Code",
        image: "/vscode.png",
      },
      {
        label: "Npm",
        image: "/npm-logo.png",
      },
      {
        label: "Github",
        image: "/github.png",
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
    <section id="Skills" className="pb-3">
      <SectionHeader title="Skills" />
      {skills.map((skill) => (
        <SkillRow {...skill} />
      ))}
    </section>
  );
}
