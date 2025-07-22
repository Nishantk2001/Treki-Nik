import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./Gallery.module.css";
import RoseValley from "../../assets/images/RoseVally.jpeg";
import TriundTrek from "../../assets/images/triund.jpg";
import YullaKanda from "../../assets/images/yullakanda.jpg";
import Kheergangatrek from "../../assets/images/kheerganga.jpg";

const Gallery: React.FC = () => {
  const destinations = [
    {
      id: 1,
      title: "Rose Valley",
      location: "Uttarakhand",
      image: RoseValley,
      size: "large",
    },
    {
      id: 2,
      title: "Triund Trek",
      location: "Dharamshala, Kangra",
      image: TriundTrek,
      size: "medium",
    },
    {
      id: 3,
      title: "Yulla Kanda",
      location: "Kinnaur",
      image: YullaKanda,
      size: "medium",
    },
    {
      id: 4,
      title: "Kheerganga trek",
      location: "Kullu",
      image: Kheergangatrek,
      size: "wide",
    },
  ];

  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>
        <div className={styles.galleryGrid}>
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`${styles.galleryItem} ${styles[destination.size]}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={destination.image}
                  alt={destination.title}
                  className={styles.image}
                />
                <div className={styles.overlay}></div>

                <div className={styles.content}>
                  <div className={styles.textContent}>
                    <h3 className={styles.title}>{destination.title}</h3>
                    <p className={styles.location}>{destination.location}</p>
                  </div>

                  <button className={styles.exploreButton}>
                    <ArrowUpRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
