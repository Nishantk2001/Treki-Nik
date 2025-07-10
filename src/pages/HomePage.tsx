import React from "react";
import Hero from "../components/sections/Hero";
import styles from "./HomePage.module.css";
import Gallery from "../components/sections/Gallery";
import Experience from "../components/sections/Experience";
import DiscoverBanner from "../components/sections/DiscoverBanner";
import Destinations from "../components/sections/Destinations";
import Testimonials from "../components/sections/Testimonials";
import TravelSection from "../components/sections/TravelSection";
import FAQSection from "../components/sections/FAQSection";
import BlogSection from "../components/sections/BlogSection";
import ContactBanner from "../components/sections/ContactBanner";

const HomePage: React.FC = () => {
  return (
    <div className={styles.homePage}>
      <Hero />
      <Gallery />
      <Experience />
      <DiscoverBanner />
      <Destinations />
      <Testimonials />
      <TravelSection />
      <FAQSection />
      <BlogSection />
      <ContactBanner />
    </div>
  );
};

export default HomePage;
