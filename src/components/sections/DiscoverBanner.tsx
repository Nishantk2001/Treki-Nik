import React from "react";
import styles from "./DiscoverBanner.module.css";

const DiscoverBanner: React.FC = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <h2 className={styles.title}>
              Discover A Mesmerizing
              <br />
              Nature Landscape &<br />
              Stunning Culture
            </h2>
          </div>

          <div className={styles.rightContent}>
            <p className={styles.description}>
              From the misty forests of Jibhi to the rugged trails of Spiti,
              experience Himachal like never before. Our treks connect you with
              local traditions, mountain serenity, and unforgettable memories —
              one trail at a time.
            </p>

            <button className={styles.learnMoreButton}>LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverBanner;
