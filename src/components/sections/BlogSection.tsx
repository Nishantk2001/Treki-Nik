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
    title: "Bhrigu Lake Trek: A High-Altitude Gem in Himachal",
    excerpt:
      "Nestled above Manali, the Bhrigu Lake trek offers panoramic views of the Pir Panjal range and a glacial lake steeped in mythology.",
    image:
      "https://images.pexels.com/photos/1619568/pexels-photo-1619568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    featured: true,
  },
  {
    id: 2,
    title: "Hiking the Hampta Pass: A Gateway to Himachal's Hidden Valleys",
    excerpt:
      "Journey through alpine meadows, glacial valleys, and dramatic mountain passes on one of Himachal’s most scenic treks.",
    image:
      "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
  },
  {
    id: 3,
    title: "Trek to Triund: The Beginner’s Paradise in the Dhauladhar Range",
    excerpt:
      "Perfect for first-time trekkers, Triund offers panoramic views of the Dhauladhar peaks and a peaceful escape above McLeod Ganj.",
    image:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1",
  },
  {
    id: 4,
    title: "Spiti Valley Treks: Explore the Cold Desert of Himachal",
    excerpt:
      "Experience the stark beauty of Spiti with high-altitude treks, ancient monasteries, and soul-stirring landscapes.",
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
