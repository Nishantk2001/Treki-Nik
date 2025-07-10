import React from "react";
import { Camera } from "lucide-react";
import styles from "./TravelSection.module.css";

const TravelSection: React.FC = () => {
  return (
    <section className={styles.travelSection}>
      <div className={styles.container}>
        {/* Left side - Large landscape image */}
        <div className={styles.leftContent}>
          <div className={styles.heroImage}>
            <img
              src="https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1"
              alt="Beautiful mountain landscape with turquoise waters"
            />
          </div>
        </div>

        {/* Right side - Content and cards */}
        <div className={styles.rightContent}>
          {/* Header content */}
          <div className={styles.headerSection}>
            <h1 className={styles.mainHeading}>
              Begin Your New Life Experience With Exploring New Destination
            </h1>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>ABOUT US</button>
              <button className={styles.secondaryButton}>EXPLORE TRIP</button>
            </div>
          </div>

          {/* Cards grid */}
          <div className={styles.cardsGrid}>
            {/* Top card - Hotel/Couple */}
            <div className={styles.topCard}>
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1"
                alt="Luxury Hotel Experience"
              />
            </div>

            {/* Bottom left - Temple */}
            <div className={styles.bottomLeftCard}>
              <img
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1"
                alt="Ancient Temples"
              />
            </div>

            {/* Bottom right - Dark card with text */}
            <div className={styles.bottomRightCard}>
              <div className={styles.iconWrapper}>
                <Camera size={24} />
              </div>
              <h3>Variation Of Asian Travel Trip</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing ligula eget
                dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
