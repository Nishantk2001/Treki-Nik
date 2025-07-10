import React from "react";
import styles from "./TourCard.module.css";
import { FiStar, FiMapPin, FiClock } from "react-icons/fi";

interface TourCardProps {
  tour: {
    id: number;
    title: string;
    location: string;
    duration: string;
    price: number;
    rating: number;
    image: string;
  };
}

const TourCard: React.FC<TourCardProps> = ({ tour }) => {
  return (
    <div className={styles.tourCard}>
      <div className={styles.imageContainer}>
        <img
          src={`/assets/images/${tour.image}`}
          alt={tour.title}
          className={styles.image}
        />
        <div className={styles.priceTag}>${tour.price}</div>
      </div>

      <div className={styles.content}>
        <div className={styles.rating}>
          <FiStar className={styles.starIcon} />
          <span>{tour.rating}</span>
        </div>

        <h3 className={styles.title}>{tour.title}</h3>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <FiMapPin className={styles.metaIcon} />
            <span>{tour.location}</span>
          </div>
          <div className={styles.metaItem}>
            <FiClock className={styles.metaIcon} />
            <span>{tour.duration}</span>
          </div>
        </div>

        <button className={styles.bookButton}>Book Now</button>
      </div>
    </div>
  );
};

export default TourCard;
