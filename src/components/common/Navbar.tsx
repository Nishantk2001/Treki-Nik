import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const Navbar: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(`.${styles.navbar}`)) {
        setIsMobileMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const trekOptions = [
    { name: "Mountain Treks", path: "/treks/mountain" },
    { name: "Forest Trails", path: "/treks/forest" },
    { name: "Desert Adventures", path: "/treks/desert" },
    { name: "Coastal Walks", path: "/treks/coastal" },
    { name: "Winter Expeditions", path: "/treks/winter" },
    { name: "Day Hikes", path: "/treks/day-hikes" },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          Treki Nik
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>

          {/* All Treks Dropdown */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownToggle}
              onClick={toggleDropdown}
              onMouseEnter={() => setIsDropdownOpen(true)}
            >
              All Treks
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${
                  isDropdownOpen ? styles.chevronRotated : ""
                }`}
              />
            </button>

            <div
              className={`${styles.dropdownMenu} ${
                isDropdownOpen ? styles.dropdownOpen : ""
              }`}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              {trekOptions.map((trek, index) => (
                <Link
                  key={index}
                  to={trek.path}
                  className={styles.dropdownItem}
                  onClick={() => setIsDropdownOpen(false)}
                >
                  {trek.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/about" className={styles.navLink}>
            About
          </Link>
          <Link to="/blogs" className={styles.navLink}>
            Blogs
          </Link>
          <Link to="/contact" className={styles.navLink}>
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <button className={styles.ctaButton}>GET STARTED →</button>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.mobileMenuOverlay} ${
          isMobileMenuOpen ? styles.overlayOpen : ""
        }`}
      >
        <div
          className={`${styles.mobileMenu} ${
            isMobileMenuOpen ? styles.mobileMenuOpen : ""
          }`}
        >
          <Link
            to="/"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Home
          </Link>

          {/* Mobile All Treks Dropdown */}
          <div className={styles.mobileDropdown}>
            <button
              className={styles.mobileDropdownToggle}
              onClick={toggleDropdown}
            >
              All Treks
              <ChevronDown
                size={16}
                className={`${styles.chevron} ${
                  isDropdownOpen ? styles.chevronRotated : ""
                }`}
              />
            </button>

            <div
              className={`${styles.mobileDropdownMenu} ${
                isDropdownOpen ? styles.mobileDropdownOpen : ""
              }`}
            >
              {trekOptions.map((trek, index) => (
                <Link
                  key={index}
                  to={trek.path}
                  className={styles.mobileDropdownItem}
                  onClick={closeMobileMenu}
                >
                  {trek.name}
                </Link>
              ))}
            </div>
          </div>

          <Link
            to="/about"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/blogs"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className={styles.mobileNavLink}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>

          {/* Mobile CTA Button */}
          <button className={styles.mobileCTAButton}>GET STARTED →</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
