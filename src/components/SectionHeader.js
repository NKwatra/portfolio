import styles from "../styles/sectionHeader.module.css";
export default function SectionHeader({ title }) {
  return (
    <div className={`h1  p-4 ${styles.container}`}>
      <span className={`${styles.defaultFont} ml-lg-5`}>{title}</span>
    </div>
  );
}
