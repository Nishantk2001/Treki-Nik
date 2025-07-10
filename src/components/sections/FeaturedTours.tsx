import React from "react";
import styles from "./FeaturedTours.module.css";
import TourCard from "../ui/TourCard";

interface Tour {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: number;
  rating: number;
  image: string;
}

const FeaturedTours: React.FC = () => {
  const tours: Tour[] = [
    {
      id: 1,
      title: "Bali Island Tour",
      location: "Bali, Indonesia",
      duration: "7 Days",
      price: 1200,
      rating: 4.8,
      image: "bali-tour.jpg",
    },
    // Add more tours...
  ];

  return (
    <section className={styles.featuredTours}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Tours</h2>
          <p className={styles.sectionSubtitle}>
            Explore our most popular adventures
          </p>
        </div>

        <div className={styles.toursGrid}>
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
