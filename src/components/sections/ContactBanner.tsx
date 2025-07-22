import React from "react";
import styles from "./ContactBanner.module.css";

const ContactBanner: React.FC = () => {
  return (
    <section className={styles.contactBanner}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Plan Your Next Asia <br />
              Escape with Treki Nik
            </h2>
            <p className={styles.description}>
              Discover stunning beaches, vibrant cities, and peaceful retreats
              across Asia. Reach out now and unlock special travel offers
              curated just for you.
            </p>
            <button className={styles.contactButton}>LET’S TALK TRAVEL</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
