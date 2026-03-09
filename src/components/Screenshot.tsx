import styles from "./Screenshot.module.css";

export default function Screenshot() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.wrapper}>
            <span className={styles.label}>Dark</span>
            <img
              src="/images/screenshot_dark.png"
              alt="Clavirio dark theme — typing lesson with virtual keyboard and live stats"
              className={styles.image}
            />
          </div>
          <div className={styles.wrapper}>
            <span className={styles.label}>Light</span>
            <img
              src="/images/screenshot_light.png"
              alt="Clavirio light theme — typing lesson with virtual keyboard and live stats"
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
