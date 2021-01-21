import styles from "../styles/home.module.css";
export default function Home() {
  return (
    <section
      className={`${styles.container} d-flex justify-content-center align-items-center`}
    >
      <h2 className={`display-4 ${styles.title}`}>
        <div>
          I want to <span className={styles.tealBack}>build things</span>
        </div>
        <div>
          that <span className={styles.tealUnderline}>make lives better.</span>
        </div>
      </h2>
    </section>
  );
}
