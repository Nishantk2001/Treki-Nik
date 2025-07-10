import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Louna Daniel",
      designation: "Designation",
      avatar:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      id: 2,
      name: "Joe Marshall",
      designation: "Designation",
      avatar:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      id: 3,
      name: "Luna Muller",
      designation: "Designation",
      avatar:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      id: 4,
      name: "Roy Franklin",
      designation: "Designation",
      avatar:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      id: 5,
      name: "Sarah Chen",
      designation: "Designation",
      avatar:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
    },
    {
      id: 6,
      name: "Michael Torres",
      designation: "Designation",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
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
