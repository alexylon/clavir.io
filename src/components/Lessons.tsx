import { lessons } from "../data/lessons";
import styles from "./Lessons.module.css";

export default function Lessons() {
  return (
    <section id="lessons" className={styles.section}>
      <div className="container">
        <h2 className={styles.heading}>15 Built-in Lessons</h2>
        <p className="section-intro">
          Each lesson introduces new keys and builds on the previous ones. Start from the home row and work your way up to full paragraphs and code.
        </p>
        <div className={styles.grid}>
          {lessons.map((l) => (
            <div className={styles.item} key={l.num}>
              <span className={styles.num}>{l.num}</span>
              <span className={styles.name}>{l.name}</span>
              <span className={styles.detail}>{l.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
