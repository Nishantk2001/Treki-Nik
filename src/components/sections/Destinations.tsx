import React, { useState } from "react";
import styles from "./Destinations.module.css";
import HamptaPass from "../../assets/images/hamptapass.webp";
import RoseValley from "../../assets/images/rosevalley.jpg";
import Triund from "../../assets/images/triund.jpg";
import Kareri from "../../assets/images/Kareri-Lake.jpg";
import Yulla from "../../assets/images/yullakanda.jpg";

const Destinations: React.FC = () => {
  const [activeDestination, setActiveDestination] = useState("Kullu");

  const destinations = [
    {
      id: "Kullu",
      name: "Hampta Pass",
      backgroundImage: HamptaPass,
    },
    {
      id: "Dharamshala",
      name: "Kareri Lake",
      backgroundImage: Kareri,
    },
    {
      id: "Kinnuar",
      name: "Yulla Kanda",
      backgroundImage: Yulla,
    },
    {
      id: "Uttarakhand",
      name: "Rose Valley",
      backgroundImage: RoseValley,
    },
    {
      id: "Dharamshala1",
      name: "Triund Trek",
      backgroundImage: Triund,
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
            {/* <button className={styles.viewMoreButton}>VIEW MORE</button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
