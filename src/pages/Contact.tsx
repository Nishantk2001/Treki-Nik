import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Globe,
  Users,
  Star,
  Calendar,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import styles from "./Contact.module.css";
import Yullakanda from "../assets/images/yullakanda.jpg";
import Triund from "../assets/images/triund.jpg";
import KareriLake from "../assets/images/Kareri-Lake.jpg";
import Kheerganga from "../assets/images/kheerganga.jpg";
import Mountain from "../assets/images/Mountain.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    travelDate: "",
    travelers: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelDate: "",
        travelers: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    // {
    //   icon: MapPin,
    //   title: "Visit Our Office",
    //   details: [
    //     "123 Adventure Street",
    //     "Travel District, TD 12345",
    //     "New York, USA",
    //   ],
    //   color: "blue",
    // },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 82191 48539", "+91 7876657726", "Available 24/7"],
      color: "green",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@treki-nik.com",
        "support@treki-nik.com",
        "bookings@treki-nik.com",
      ],
      color: "orange",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Sat: 10:00 AM - 4:00 PM",
        "Sun: Emergency Only",
      ],
      color: "purple",
    },
  ];

  const trekLocations = [
    {
      city: "Triund",
      state: "Kangra",
      image: Triund,
      trekDifficulty: "Easy to Moderate",
      description: "A short scenic trek with views of Dhauladhar range.",
    },
    {
      city: "Yulla Kanda",
      state: "Kinnaur",
      image: Yullakanda,
      trekDifficulty: "Moderate",
      description: "A spiritual and peaceful trail through alpine meadows.",
    },
    {
      city: "Kareri Lake",
      state: "Kangra",
      image: KareriLake,
      trekDifficulty: "Moderate",
      description: "Crystal clear lake trek nestled in the Dhauladhar hills.",
    },
    {
      city: "Kheerganga",
      state: "Kullu",
      image: Kheerganga,
      trekDifficulty: "Easy to Moderate",
      description: "Famous for its hot springs and vibrant hippie vibes.",
    },
  ];

  const stats = [
    { icon: Users, number: "50K+", label: "Happy Travelers" },
    { icon: Globe, number: "100+", label: "Destinations" },
    { icon: Star, number: "4.9/5", label: "Customer Rating" },
    { icon: Calendar, number: "24/7", label: "Support Available" },
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img src={Mountain} alt="Contact Us" className={styles.heroImage} />
          <div className={styles.heroOverlay}></div>
        </div>

        <div className={styles.floatingElements}>
          <div className={`${styles.floatingElement} ${styles.element1}`}></div>
          <div className={`${styles.floatingElement} ${styles.element2}`}></div>
          <div className={`${styles.floatingElement} ${styles.element3}`}></div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Get in <span className={styles.brandName}>Touch</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Ready to embark on your next adventure? Our travel experts are
              here to help you plan the perfect journey
            </p>
          </div>

          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statCard}>
                <stat.icon className={styles.statIcon} />
                <div className={styles.statNumber}>{stat.number}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className={styles.contactInfoSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Multiple Ways to
              <span className={styles.titleAccent}>Reach Us</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Choose the most convenient way to get in touch with our travel
              experts
            </p>
          </div>

          <div className={styles.contactInfoGrid}>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`${styles.contactCard} ${styles[info.color]}`}
              >
                <div className={styles.contactIcon}>
                  <info.icon className={styles.iconMedium} />
                </div>
                <h3 className={styles.contactTitle}>{info.title}</h3>
                <div className={styles.contactDetails}>
                  {info.details.map((detail, idx) => (
                    <p key={idx} className={styles.contactDetail}>
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className={styles.formMapSection}>
        <div className={styles.container}>
          <div className={styles.formMapGrid}>
            {/* Contact Form */}
            <div className={styles.formContainer}>
              <div className={styles.formHeader}>
                <h3 className={styles.formTitle}>Plan Your Adventure</h3>
                <p className={styles.formSubtitle}>
                  Tell us about your dream destination and we'll create the
                  perfect itinerary for you
                </p>
              </div>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle className={styles.successIcon} />
                  <h4>Thank You!</h4>
                  <p>
                    Your message has been sent successfully. We'll get back to
                    you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.formLabel}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.formLabel}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="phone" className={styles.formLabel}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="destination" className={styles.formLabel}>
                        Preferred Destination
                      </label>
                      <select
                        id="destination"
                        name="destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                      >
                        <option value="">Select a destination</option>
                        <option value="europe">Europe</option>
                        <option value="asia">Asia</option>
                        <option value="africa">Africa</option>
                        <option value="americas">Americas</option>
                        <option value="oceania">Oceania</option>
                        <option value="custom">Custom Destination</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="travelDate" className={styles.formLabel}>
                        Travel Date
                      </label>
                      <input
                        type="date"
                        id="travelDate"
                        name="travelDate"
                        value={formData.travelDate}
                        onChange={handleInputChange}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="travelers" className={styles.formLabel}>
                        Number of Travelers
                      </label>
                      <select
                        id="travelers"
                        name="travelers"
                        value={formData.travelers}
                        onChange={handleInputChange}
                        className={styles.formSelect}
                      >
                        <option value="">Select number</option>
                        <option value="1">1 Traveler</option>
                        <option value="2">2 Travelers</option>
                        <option value="3-5">3-5 Travelers</option>
                        <option value="6-10">6-10 Travelers</option>
                        <option value="10+">10+ Travelers</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.formLabel}>
                      Tell us about your dream trip *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={styles.formTextarea}
                      rows={5}
                      placeholder="Describe your ideal adventure, special requirements, or any questions you have..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className={styles.submitButton}>
                    <Send className={styles.buttonIcon} />
                    Send Message
                    <ArrowRight className={styles.buttonArrow} />
                  </button>
                </form>
              )}
            </div>

            {/* Interactive Map */}
            <div className={styles.mapContainer}>
              <div className={styles.mapHeader}>
                <h3 className={styles.mapTitle}>Find Us Worldwide</h3>
                <p className={styles.mapSubtitle}>
                  Visit our offices around the globe
                </p>
              </div>

              {/* Embedded Map */}
              <div className={styles.mapWrapper}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27153.87422595363!2d76.9201108914538!3d31.709494746768772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904e2398b53816f%3A0xb75b22625e4a704b!2sShri%20Triloknath%2C%20Temple!5e0!3m2!1sen!2sin!4v1753257265381!5m2!1sen!2sin"
                  className={styles.map}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Treki-Nik Office Location"
                ></iframe>
                <div className={styles.mapOverlay}>
                  <div className={styles.mapPin}>
                    <MapPin className={styles.mapPinIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className={styles.locationsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Global
              <span className={styles.titleAccent}>Offices</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Visit us at any of our worldwide locations for personalized travel
              consultation
            </p>
          </div>

          <div className={styles.locationsGrid}>
            {trekLocations.map((location, index) => (
              <div key={index} className={styles.locationCard}>
                <div className={styles.locationImageContainer}>
                  <img
                    src={location.image}
                    alt={`${location.city} Office`}
                    className={styles.locationImage}
                  />
                  <div className={styles.locationOverlay}>
                    <MapPin className={styles.locationIcon} />
                  </div>
                </div>
                <div className={styles.locationInfo}>
                  <h3 className={styles.locationCity}>{location.city}</h3>
                  <p className={styles.locationstate}>{location.state}</p>
                  <p className={styles.locationAddress}>
                    {location.description}
                  </p>
                  <p className={styles.locationPhone}>
                    {location.trekDifficulty}
                  </p>
                  <button className={styles.locationButton}>
                    <MessageCircle className={styles.buttonIcon} />
                    Contact for Trek
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Start Your Journey?</h2>
            <p className={styles.ctaSubtitle}>
              Don't wait any longer. Your dream adventure is just one
              conversation away.
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>
                <Phone className={styles.buttonIcon} />
                Call Now
              </button>
              <button className={styles.secondaryButton}>
                <Mail className={styles.buttonIcon} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
