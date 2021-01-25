import { FaGoogleDrive } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import styles from "../styles/resume.module.css";
import SectionHeader from "./SectionHeader";

const Button = ({ icon, label, href, download }) => {
  return (
    <a
      className={`rounded px-3 px-lg-4 py-lg-3 py-2 ${styles.download} d-inline-block`}
      download={download}
      href={href}
    >
      {icon} <span className="ml-2">{label}</span>
    </a>
  );
};

export default function Resume() {
  return (
    <section id="Resume" className="vh-100">
      <SectionHeader title="Resume" />
      <div
        className={` ${styles.buttonsContainer} pt-5 d-flex justify-content-between px-3`}
      >
        <Button
          icon={<FaGoogleDrive />}
          label={"Checkout"}
          href="https://drive.google.com/file/d/1wDuU3JOqIcwFUpg9ADidMTS2vpNmXuJL/view?usp=sharing"
        />
        <Button
          icon={<FiDownload />}
          label={"Download"}
          href="/nishkarsh-kwatra-resume.pdf"
          download={true}
        />
      </div>
    </section>
  );
}
