import type { MouseEvent } from "react";
import styles from "./Header.module.css";

function scrollTo(id: string) {
  return (e: MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
}

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo} onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>clavirio</a>
        <nav className={styles.nav}>
          <a href="#features" onClick={scrollTo("features")}>Features</a>
          <a href="#lessons" onClick={scrollTo("lessons")}>Lessons</a>
          <a href="#install" onClick={scrollTo("install")}>Install</a>
          <a href="https://github.com/alexylon/clavirio" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
      </div>
    </header>
  );
}
