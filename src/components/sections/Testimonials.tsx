import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Louna Daniel",
      designation: "Solo Traveler",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Treki Nik helped me discover trails I never imagined existed. Trekking through Tirthan Valley was not just a trip — it was a soul-refreshing experience. I’ll definitely be back for more!",
    },
    {
      id: 2,
      name: "Joe Marshall",
      designation: "Adventure Photographer",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Every frame I captured felt like a postcard. The guides knew every viewpoint, every hidden waterfall. Treki Nik is a goldmine for creators and adventurers alike!",
    },
    {
      id: 3,
      name: "Luna Muller",
      designation: "Backpacking Enthusiast",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Hiking the Great Himalayan trails with Treki Nik gave me more than mountains — it gave me memories, meaningful connections, and a renewed love for India’s raw beauty.",
    },
    {
      id: 4,
      name: "Akashay Jaggi",
      designation: "Travel Blogger",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "What stood out was the warmth of the locals, the seamless planning, and the feeling of belonging. Treki Nik made Himachal feel like home.",
    },
    {
      id: 5,
      name: "Sarah Chen",
      designation: "Nature Lover",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "I joined the trek as a solo participant and left with new friends and unforgettable views. From the pine forests to stargazing camps — every second was magical!",
    },
    {
      id: 6,
      name: "Michael Torres",
      designation: "First-Time Trekker",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "This was my first trek ever, and Treki Nik made it so comfortable and exciting. I was nervous, but the support team and fellow trekkers made it an adventure of a lifetime.",
    },
  ];

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.scrollContainer}>
        <div className={styles.scrollTrack}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className={styles.testimonialCard}
            >
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>{testimonial.text}</p>

                <div className={styles.authorInfo}>
                  <div className={styles.avatarWrapper}>
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className={styles.avatar}
                    />
                  </div>
                  <div className={styles.authorDetails}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorDesignation}>
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
