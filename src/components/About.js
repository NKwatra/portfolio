import styles from "../styles/about.module.css";
import SectionHeader from "./SectionHeader";

const details = [
  ` I’ve always sought out opportunities and challenges that are
meaningful to me. Although my professional path has taken many twists
and turns — from touring and recording artist, to employee of the year
at a non-profit, to dean's scholar at UPenn, to small business owner
and entrepreneur — I've never stopped engaging my passion to help
others and solve problems.`,
  `As a web developer, I enjoy using my obsessive attention to detail, my
unequivocal love for making things, and my mission-driven work ethic
to literally change the world. That's why I’m excited to make a big
impact at a high growth company.`,
];

const focii = [
  { label: "Accessbility", href: "#" },
  { label: "React", href: "#" },
  { label: "Design Systems", href: "#" },
];

export default function About() {
  return (
    <section id="About">
      <SectionHeader title="About" />
      <div className={`px-4 pt-3 ${styles.detail}`}>
        <blockquote
          className={`mx-lg-5 ${styles.brownText} pl-3 pl-lg-4 my-3 my-lg-5`}
        >
          <h2 className={styles.quote}>
            Mission-driven full stack developer with a passion for thoughtful UI
            design, collaboration, and teaching.
          </h2>
        </blockquote>
        {details.map((detail, index) => (
          <p className="px-lg-5" key={`${index}`}>
            {detail}
          </p>
        ))}
        <div className={`px-lg-5 ${styles.focus} mb-5`}>
          <span className="font-weight-bold">Current Focus: </span>
          {focii.map((focus, index) => (
            <a href={focus.href} key={`${index}`} target="_blank">
              {focus.label}
              {index === focii.length - 1 ? null : " // "}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
