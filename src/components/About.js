import styles from "../styles/about.module.css";
import SectionHeader from "./SectionHeader";

const details = [
  `I am a senior in college, still in the process of exploring life and figuring out what I love. 
  I am passionate about building products that make life easier and I am open to, and excited about collaborating 
  with people from different domains such as Designers, Marketing, Finance, etc. to make products that make lives better.
  I have always belived that lives can be immensely impacted by improving products of day to day use, and this was my driving factor
  for learning to build mobile apps and websites.`,
  `Apart from coding, I am interested in working on personal development. I often read books and
  listen to podcasts and videos on personal mastery. I have been following works of Robin Sharma, Tony Robbins etc for 2-3 years.`,
];

const tagline = `Ambitious full stack developer with a passion for collaboration, learning, and teaching.`;

const focii = [
  { label: "React-Native", href: "https://reactnative.dev" },
  { label: "React", href: "https://reactjs.org" },
  { label: "MongoDB", href: "https://www.mongodb.com" },
  { label: "Kotlin", href: "https://kotlinlang.org" },
  { label: "Android", href: "https://developer.android.com" },
];

export default function About() {
  return (
    <section id="About">
      <SectionHeader title="About" />
      <div className={`px-4 pt-3 ${styles.detail}`}>
        <blockquote
          className={`mx-lg-5 ${styles.brownText} pl-3 pl-lg-4 my-3 my-lg-5`}
        >
          <h2 className={styles.quote}>{tagline}</h2>
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
