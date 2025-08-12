import React from "react";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import styles from "./UpcomingTripBanner.module.css";
import Madhmaheshwar from "../../assets/images/madhmaheshwar.jpg";

interface TripDetails {
  id: string;
  destination: string;
  location: string;
  dates: string;
  duration: string;
  spotsLeft: number;
  daysUntil: number;
  imageUrl: string;
  imageAlt: string;
}

interface UpcomingTripBannerProps {
  className?: string;
  tripDetails?: TripDetails;
}

const defaultTripDetails: TripDetails = {
  id: "shri-madmaheshwar-temple",
  destination: "Shri Madmaheshwar Temple",
  location: "Uttarakhand, India",
  dates: "August 15-18, 2025",
  duration: "4 days",
  spotsLeft: 8,
  daysUntil: 16,
  imageUrl: Madhmaheshwar,
  imageAlt: "shri-madmaheshwar-temple",
};

const UpcomingTripBanner: React.FC<UpcomingTripBannerProps> = ({
  className,
  tripDetails = defaultTripDetails,
}) => {
  return (
    <section className={`${styles.banner} ${className || ""}`}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
          <img
            src={tripDetails.imageUrl}
            alt={tripDetails.imageAlt}
            className={styles.tripImage}
          />
        </div>

        <div className={styles.contentSection}>
          <div className={styles.content}>
            <div className={styles.tripInfo}>
              <div className={styles.badge}>Next Adventure</div>
              <h3 className={styles.destination}>{tripDetails.destination}</h3>
              <p className={styles.location}>{tripDetails.location}</p>
            </div>

            <div className={styles.details}>
              <div className={styles.detail}>
                <Calendar className={styles.icon} />
                <span>{tripDetails.dates}</span>
              </div>
              <div className={styles.detail}>
                <Users className={styles.icon} />
                <span>{tripDetails.spotsLeft} spots left</span>
              </div>
              <div className={styles.detail}>
                <MapPin className={styles.icon} />
                <span>{tripDetails.duration}</span>
              </div>
            </div>

            <button className={styles.joinButton}>
              Join This Trek
              <ArrowRight className={styles.buttonIcon} />
            </button>
          </div>

          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <span className={styles.countdownNumber}>
                {tripDetails.daysUntil}
              </span>
              <span className={styles.countdownLabel}>Days</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTripBanner;
