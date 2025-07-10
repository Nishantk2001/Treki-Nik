import React from "react";
import styles from "./ContactBanner.module.css";

const ContactBanner: React.FC = () => {
  return (
    <section className={styles.contactBanner}>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading}>
              Get Closer With Us &<br />
              Get Special Promo
            </h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p>
            <button className={styles.contactButton}>CONTACT US</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
