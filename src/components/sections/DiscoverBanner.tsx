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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>

            <button className={styles.learnMoreButton}>LEARN MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverBanner;
