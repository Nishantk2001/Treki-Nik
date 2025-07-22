import React from "react";
import { Camera } from "lucide-react";
import styles from "./TravelSection.module.css";
import Ladakh from "../../assets/images/ladakh.jpg";
import Rosevalley from "../../assets/images/rosevalley.jpg";
import Triund from "../../assets/images/Holiday.jpg";

const TravelSection: React.FC = () => {
  return (
    <section className={styles.travelSection}>
      <div className={styles.container}>
        {/* Left side - Large landscape image */}
        <div className={styles.leftContent}>
          <div className={styles.heroImage}>
            <img src={Ladakh} alt="Ladakh" />
          </div>
        </div>

        {/* Right side - Content and cards */}
        <div className={styles.rightContent}>
          {/* Header content */}
          <div className={styles.headerSection}>
            <h1 className={styles.mainHeading}>
              Discover Hidden Gems and Create Unforgettable Memories
            </h1>
            <p className={styles.description}>
              Whether you're seeking adventure, culture, or relaxation — our
              handpicked destinations offer something for every traveler. Embark
              on journeys that transform and inspire.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>ABOUT US</button>
              <button className={styles.secondaryButton}>EXPLORE TRIPS</button>
            </div>
          </div>

          {/* Cards grid */}
          <div className={styles.cardsGrid}>
            {/* Top card - Hotel/Couple */}
            <div className={styles.topCard}>
              <img src={Rosevalley} alt="Rose Valley, Uttarakhand, India" />
            </div>

            {/* Bottom left - Temple */}
            <div className={styles.bottomLeftCard}>
              <img src={Triund} alt="Historic temple in Southeast Asia" />
            </div>

            {/* Bottom right - Dark card with text */}
            <div className={styles.bottomRightCard}>
              <div className={styles.iconWrapper}>
                <Camera size={24} />
              </div>
              <h3>Explore Asia’s Cultural Wonders</h3>
              <p>
                From ancient temples to bustling street markets — capture every
                moment and feel the heartbeat of vibrant cultures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelSection;
