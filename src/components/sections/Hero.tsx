import React, { useState, useEffect } from "react";
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
import Img3 from "../../assets/images/img3.jpg";
import Img2 from "../../assets/images/img2.jpg";
import Img1 from "../../assets/images/img1.jpg";

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background images
  const backgroundImages = [Img3, Img2, Img1];

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className={styles.heroContainer}>
      {/* Multiple Background Images */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className={`${styles.backgroundImage} ${
            index === currentImageIndex ? styles.active : ""
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      <div className={styles.overlay}></div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <div className={styles.contentContainer}>
          <div className={styles.heroText}>
            <p className={styles.subtitle}>Feel The Experience</p>
            <h1 className={styles.title}>
              Find Yourself
              <br />
              Where the Earth
              <br />
              Touches the Sky.
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

        {/* Image Indicators */}
        {/* <div className={styles.imageIndicators}>
          {backgroundImages.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentImageIndex ? styles.indicatorActive : ""
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Switch to image ${index + 1}`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
