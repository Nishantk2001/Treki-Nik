import React from "react";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Users,
} from "lucide-react";
import styles from "./Hero.module.css";

const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.overlay}></div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.heroText}>
            <p className={styles.subtitle}>Feel The Experience</p>
            <h1 className={styles.title}>
              Explore The
              <br />
              Majestic Asia
              <br />
              Landscape Now
            </h1>
            <button className={styles.ctaButton}>
              <span>GET STARTED</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Bottom Info Cards */}
          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <MapPin size={20} />
              </div>
              <div className={styles.cardContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <Users size={20} />
              </div>
              <div className={styles.cardContent}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aenean commodo ligula.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className={styles.socialLinksWrapper}>
          <div className={styles.socialLinks}>
            <a href="#" className={styles.socialLink}>
              <Facebook size={20} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Twitter size={20} />
            </a>
            <a href="#" className={styles.socialLink}>
              <Instagram size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className={styles.scrollIndicator}>
            <span className={styles.scrollText}>SCROLL</span>
            <ChevronDown size={20} className={styles.scrollIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
