import {
  MapPin,
  Users,
  Calendar,
  Award,
  Heart,
  Compass,
  Globe,
  Camera,
  Leaf,
  Shield,
  Star,
  Zap,
  Mail,
  Linkedin,
} from "lucide-react";
import styles from "./About.module.css";
import TeamMember1 from "../assets/images/Nishantkumar.jpg";
import Karerilake from "../assets/images/Kareri-Lake.jpg";

const About = () => {
  const stats = [
    { icon: Users, number: "50K+", label: "Happy Travelers" },
    { icon: MapPin, number: "100+", label: "Destinations" },
    { icon: Calendar, number: "8+", label: "Years Experience" },
    { icon: Award, number: "25+", label: "Travel Awards" },
  ];

  const features = [
    { icon: Heart, text: "Passionate Team" },
    { icon: Compass, text: "Expert Guidance" },
    { icon: Globe, text: "Global Network" },
    { icon: Camera, text: "Memorable Moments" },
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainable Travel",
      description:
        "We promote eco-friendly practices and support local communities in every destination",
    },
    {
      icon: Users,
      title: "Cultural Respect",
      description:
        "Fostering genuine connections and respect between travelers and local cultures",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "Your safety and security are our top priorities in every adventure we plan",
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description:
        "Every traveler is unique, and we tailor experiences to match your dreams and preferences",
    },
    {
      icon: Star,
      title: "Excellence",
      description:
        "We strive for perfection in every detail, from planning to execution",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "Embracing new technologies and ideas to enhance your travel experience",
    },
  ];

  const teamMembers = [
    {
      name: "Nishant Kumar",
      role: "Founder & CEO",
      location: "Chandigarh, India",
      image: TeamMember1,
      bio: "Adventure seeker with 15+ years in travel industry",
      specialty: "Expedition Planning",
    },
    {
      name: "Marco Rodriguez",
      role: "Head of Operations",
      location: "Barcelona, Spain",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in sustainable tourism and local partnerships",
      specialty: "Cultural Immersion",
    },
    {
      name: "Aisha Patel",
      role: "Experience Designer",
      location: "Mumbai, India",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Passionate about creating unique and memorable journeys",
      specialty: "Custom Itineraries",
    },
    {
      name: "James Thompson",
      role: "Adventure Guide Lead",
      location: "Sydney, Australia",
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Professional guide with expertise in extreme adventures",
      specialty: "Outdoor Expeditions",
    },
  ];

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}>
          <img
            src={Karerilake}
            alt="Travel Adventure"
            className={styles.heroImage}
          />
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
              About <span className={styles.brandName}>Treki-Nik</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Crafting extraordinary travel experiences and turning wanderlust
              into unforgettable journeys across the globe
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

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>
                Our Journey
                <span className={styles.titleAccent}>Began with a Dream</span>
              </h2>
              <p className={styles.storyText}>
                Founded in 2016, Treki-Nik was born from a simple belief: that
                travel has the power to transform lives, broaden perspectives,
                and create connections that transcend borders. What started as a
                small group of passionate travelers has grown into a trusted
                companion for adventurers worldwide.
              </p>
              <p className={styles.storyText}>
                We don't just plan trips; we craft experiences that ignite
                curiosity, foster cultural understanding, and create memories
                that last a lifetime. Every journey we design is a story waiting
                to be written, a adventure waiting to unfold.
              </p>

              <div className={styles.featuresList}>
                {features.map((item, index) => (
                  <div key={index} className={styles.featureItem}>
                    <item.icon className={styles.featureIcon} />
                    <span className={styles.featureText}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.storyImageContainer}>
              <div className={styles.storyImageWrapper}>
                <img
                  src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Travel team planning"
                  className={styles.storyImage}
                />
              </div>
              <div className={styles.decorativeShape1}></div>
              <div className={styles.decorativeShape2}></div>
            </div>
          </div>

          <div className={styles.missionVisionGrid}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <Compass className={styles.iconLarge} />
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardText}>
                To make extraordinary travel accessible to everyone by providing
                personalized, sustainable, and authentic experiences that
                connect travelers with local cultures, natural wonders, and
                fellow adventurers from around the world.
              </p>
            </div>

            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <Globe className={styles.iconLarge} />
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardText}>
                To be the world's most trusted travel companion, inspiring a
                million travelers to explore responsibly, embrace diversity, and
                return home with hearts full of stories and minds expanded by
                the beauty of our planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Our Core
              <span className={styles.titleAccent}>Values</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              These principles guide every decision we make and every experience
              we create
            </p>
          </div>

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <value.icon className={styles.iconMedium} />
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaSection}>
            <h3 className={styles.ctaTitle}>Ready to Start Your Adventure?</h3>
            <p className={styles.ctaSubtitle}>
              Join thousands of travelers who have trusted us to create their
              perfect journey
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryButton}>Plan Your Trip</button>
              <button className={styles.secondaryButton}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Meet Our
              <span className={styles.titleAccent}>Travel Experts</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              Our diverse team of travel enthusiasts brings together decades of
              experience, local knowledge, and an unwavering passion for
              creating extraordinary adventures
            </p>
          </div>

          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.memberImageContainer}>
                  <img
                    src={member.image}
                    alt={member.name}
                    className={styles.memberImage}
                  />
                  <div className={styles.locationBadge}>
                    <MapPin className={styles.locationIcon} />
                  </div>
                </div>

                <div className={styles.memberInfo}>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberLocation}>
                    <MapPin className={styles.locationIconSmall} />
                    {member.location}
                  </p>
                  <p className={styles.memberBio}>{member.bio}</p>

                  <div className={styles.specialtyBadge}>
                    <span className={styles.specialtyLabel}>Specialty: </span>
                    <span className={styles.specialtyText}>
                      {member.specialty}
                    </span>
                  </div>

                  <div className={styles.socialLinks}>
                    <button className={styles.socialButton}>
                      <Mail className={styles.socialIcon} />
                    </button>
                    <button className={styles.socialButton}>
                      <Linkedin className={styles.socialIcon} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
