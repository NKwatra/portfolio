import { Link } from "react-scroll";
import styles from "../styles/header.module.css";

export default function Header({ setActiveIndex }) {
  return (
    <Link to="Home" spy={true} smooth={true} duration={500}>
      <header className={styles.header} onClick={() => setActiveIndex(-1)}>
        <h1 className="h6 font-weight-light text-center p-2">
          <div className={`${styles.name} h4`}>Nishkarsh Kwatra</div>
          <div className={`${styles.profile} mt-n2`}>Full Stack Developer</div>
        </h1>
      </header>
    </Link>
  );
}
