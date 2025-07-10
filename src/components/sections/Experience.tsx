import React from "react";
import { Shield, DollarSign, Home, Play } from "lucide-react";
import styles from "./Experience.module.css";

const Experience: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe Traveling",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: DollarSign,
      title: "Affordable Price",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: Home,
      title: "Comfort Accommodation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis.
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
                src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
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
