import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./BlogSection.module.css";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category?: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Tropical Bliss: Rejuvenate in Asia's Idyllic Beaches",
    excerpt:
      "Discover pristine beaches and crystal-clear waters across Asia's most beautiful coastal destinations.",
    image:
      "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    featured: true,
  },
  {
    id: 2,
    title: "Asia's Thrilling Adventures: Hiking, Trekking, and More",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo...",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
  },
  {
    id: 3,
    title: "Unforgettable Experiences: Asia's Must-Visit Destinations",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo...",
    image:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
  },
  {
    id: 4,
    title: "Asia for the Soul: Discover Spiritual Retreats and Practices",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo...",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
  },
];

const BlogSection: React.FC = () => {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section className={styles.blogSection}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.mainHeading}>
            Read Our Latest Travel Blog & Tips Here
          </h2>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et.
          </p>
        </div>

        {/* Blog Grid */}
        <div className={styles.blogGrid}>
          {/* Featured Post */}
          {featuredPost && (
            <div className={styles.featuredPost}>
              <div className={styles.featuredImage}>
                <img src={featuredPost.image} alt={featuredPost.title} />
                <div className={styles.featuredOverlay}>
                  <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
                  <button className={styles.readMoreButton}>
                    READ MORE
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts */}
          <div className={styles.regularPosts}>
            {regularPosts.map((post) => (
              <article key={post.id} className={styles.blogCard}>
                <div className={styles.cardImage}>
                  <img src={post.image} alt={post.title} />
                </div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{post.title}</h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <button className={styles.cardReadMore}>
                    READ MORE
                    <ArrowRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
