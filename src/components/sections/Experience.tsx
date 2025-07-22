import React from "react";
import { Shield, Home, Play, Wallet } from "lucide-react";
import styles from "./Experience.module.css";

const Experience: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe Traveling",
      description:
        "Your safety is our top priority. All our treks are led by trained local guides, equipped with essential gear, and supported by reliable logistics for a smooth experience on every trail.",
    },
    {
      icon: Wallet,
      title: "Affordable Price",
      description:
        "We believe adventure should be accessible. Our curated treks offer the best value — without compromising on quality or comfort — so you can focus on the journey, not the budget.",
    },
    {
      icon: Home,
      title: "Comfort Accommodation",
      description:
        "Stay in cozy homestays, well-equipped campsites, or scenic guesthouses. Our accommodations blend local charm with basic comfort — perfect for a restful night after a day of adventure.",
    },
  ];

  return (
    <section className={styles.experienceSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <div className={styles.textContent}>
              <h2 className={styles.title}>
                Experience The
                <br />
                New Adventure
              </h2>
              <p className={styles.description}>
                Step beyond the usual and discover Himachal's raw, untouched
                beauty. Whether you're chasing snow-capped peaks or walking
                through lush alpine forests, Treki Nik helps you live the thrill
                — safely and authentically.
              </p>
            </div>

            <div className={styles.features}>
              {features.map((feature, index) => (
                <div key={index} className={styles.feature}>
                  <div className={styles.iconWrapper}>
                    <feature.icon size={24} />
                  </div>
                  <div className={styles.featureContent}>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Image with Video Thumbnails */}
          <div className={styles.rightContent}>
            <div className={styles.mainImageWrapper}>
              <img
                src="src/assets/images/holiday.jpg"
                alt="Rice terraces landscape"
                className={styles.mainImage}
              />

              {/* Video Thumbnails */}
              <div className={styles.videoThumbnails}>
                <div className={styles.videoThumbnail}>
                  <img
                    src="https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                    alt="Temple architecture"
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playButton}>
                    <Play size={20} fill="white" />
                  </div>
                </div>

                <div className={styles.videoThumbnail}>
                  <img
                    src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                    alt="Local market scene"
                    className={styles.thumbnailImage}
                  />
                  <div className={styles.playButton}>
                    <Play size={20} fill="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
