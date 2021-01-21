import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/sidebar.module.css";

export default function Sidebar({ options }) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <nav
      className={
        isSidebarVisible
          ? `${styles.visible} ${styles.sidebar}`
          : `${styles.hidden} ${styles.sidebar}`
      }
    >
      <div className={styles.hamburger}>
        <GiHamburgerMenu
          onClick={() => setIsSidebarVisible((current) => !current)}
        />
      </div>
      <ul>
        {options.map((option) => (
          <li className={styles.navItem}>{option.title}</li>
        ))}
      </ul>
    </nav>
  );
}
