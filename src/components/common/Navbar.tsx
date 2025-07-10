import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Treki Nik
        </Link>
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/tours" className={styles.navLink}>
            Tours
          </Link>
          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>
        <button className={styles.ctaButton}>GET STARTED →</button>
      </div>
    </nav>
  );
};

export default Navbar;
