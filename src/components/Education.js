import styles from "../styles/education.module.css";
import SectionHeader from "./SectionHeader";

const education = [
  {
    name: "GURU GOBIND SINGH INDRAPRATHA UNIVERSITY",
    place: "Delhi, India | 2017-2021",
    details: [
      "B.Tech in Computer Science Engineering(CSE)",
      'GPA: <span class="font-weight-bolder">8.9</span>/10 (May, 2020)',
      "Coursework: Algorithms, Programming Languages, Database Management Systems(DBMS), Object-Oriented Programming(OOP), Data Structures, etc.",
    ],
    link: "http://www.ipu.ac.in",
  },
  {
    name: "D.A.V PUBLIC SCHOOL",
    place: "Delhi, India | 2016-2017",
    details: [
      "High School - Science with Computer Science(CS)",
      'Score: <strong class="font-weight-bolder">94.2%</strong>(CBSE)',
      "Coursework: Physics, Chemistry, Mathematics, English, Computer Science, etc.",
    ],
    link: "http://davsreshtha.com/",
  },
];

const EducationTile = ({ name, place, details, link }) => {
  return (
    <div className={`${styles.tile} px-3 py-3 my-3`}>
      <h4 className={` h4 font-weight-light`}>
        <a href={link} target="_blank" className={styles.name}>
          {name}
        </a>
      </h4>
      <div className={styles.place}>{place}</div>
      <ul>
        {details.map((detail) => (
          <li key={detail} dangerouslySetInnerHTML={{ __html: detail }} />
        ))}
      </ul>
    </div>
  );
};

export default function Education() {
  return (
    <section id="Education">
      <SectionHeader title="Education" />
      <div className="d-flex flex-wrap my-5 py-5">
        {education.map((ed) => (
          <EducationTile {...ed} />
        ))}
      </div>
    </section>
  );
}
