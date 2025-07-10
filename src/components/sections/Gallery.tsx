import React from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./Gallery.module.css";

const Gallery: React.FC = () => {
  const destinations = [
    {
      id: 1,
      title: "Kelingking Beach",
      location: "Nusa Penida, Bali",
      image:
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&fit=crop",
      size: "large",
    },
    {
      id: 2,
      title: "Grand Palace",
      location: "Bangkok, Thailand",
      image:
        "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      size: "medium",
    },
    {
      id: 3,
      title: "Cappadocia",
      location: "Turkey",
      image:
        "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      size: "medium",
    },
    {
      id: 4,
      title: "Padar Island",
      location: "East Nusa Tenggara",
      image:
        "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
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
