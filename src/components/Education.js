import styles from "../styles/education.module.css";
import SectionHeader from "./SectionHeader";

const education = [
  {
    name: "UNIVERSITY OF PENNSYLVANIA",
    place: "Philadelphia, PA",
    details: ["B.A. in Psychology", "Summa Cum Laude"],
    link: "#",
  },
  {
    name: "UNIVERSITY OF PENNSYLVANIA",
    place: "Philadelphia, PA",
    details: ["B.A. in Psychology", "Summa Cum Laude"],
    link: "#",
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
          <li key={detail}>{detail}</li>
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
