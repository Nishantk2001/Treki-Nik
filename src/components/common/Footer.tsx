import React, { useState } from "react";
import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <img
              src="src\assets\images\trekinik.png"
              alt="TrekiNik Logo"
              className={styles.logoImage}
            />
            <div className={styles.brandInfo}>
              <p>Green Enclave</p>
              <p>Mohali India</p>
              <p>160055</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Twitter size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Page Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Page</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Important Link</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Career
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Term & Condition
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className={styles.newsletterSection}>
            <h4 className={styles.sectionTitle}>Our Newsletter</h4>
            <p className={styles.newsletterDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec.
            </p>
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className={styles.emailInput}
                required
              />
              <button type="submit" className={styles.signupButton}>
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            Founder of Treki Nik @Nishant Kumar
          </p>
          <p className={styles.rights}>Copyright © 2025. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
