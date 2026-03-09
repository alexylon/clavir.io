import styles from "./Screenshot.module.css";

export default function Screenshot() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.wrapper}>
          <img
            src="/screenshot.png"
            alt="Clavirio running in a terminal — showing a typing lesson with virtual keyboard and live stats"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
