import React, { useState } from "react";
import styles from "./Destinations.module.css";

const Destinations: React.FC = () => {
  const [activeDestination, setActiveDestination] = useState("japan");

  const destinations = [
    {
      id: "indonesia",
      name: "Indonesia",
      backgroundImage:
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      id: "thailand",
      name: "Thailand",
      backgroundImage:
        "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      id: "turkey",
      name: "Turkey",
      backgroundImage:
        "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      id: "japan",
      name: "Japan",
      backgroundImage:
        "https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
    {
      id: "singapore",
      name: "Singapore",
      backgroundImage:
        "https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
    },
  ];

  const activeDestinationData = destinations.find(
    (dest) => dest.id === activeDestination
  );

  return (
    <section className={styles.destinationsSection}>
      {/* Dynamic Background */}
      <div
        className={styles.backgroundImage}
        style={{
          backgroundImage: `url(${activeDestinationData?.backgroundImage})`,
        }}
      ></div>
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Destination Cards */}
          <div className={styles.destinationCards}>
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className={`${styles.destinationCard} ${
                  activeDestination === destination.id ? styles.active : ""
                }`}
                onMouseEnter={() => setActiveDestination(destination.id)}
              >
                <span className={styles.visitLabel}>VISIT</span>
                <h3 className={styles.destinationName}>{destination.name}</h3>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className={styles.viewMoreContainer}>
            <button className={styles.viewMoreButton}>VIEW MORE</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
