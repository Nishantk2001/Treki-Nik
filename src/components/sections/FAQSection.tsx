import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import styles from "./FAQSection.module.css";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What should I prepare before a trip to Asia?",
    answer:
      "Before traveling to Asia, research your destination, check travel advisories, book your flights and accommodation, and prepare a packing list based on the weather and activities planned.",
  },
  {
    id: 2,
    question: "What documents do I need before traveling to Asia?",
    answer:
      "You’ll typically need a valid passport (with at least 6 months’ validity), a visa (if required), travel insurance, vaccination certificates, and printed/digital copies of essential documents.",
  },
  {
    id: 3,
    question: "How can I plan an Asia trip itinerary?",
    answer:
      "Start by listing must-visit places, estimate how many days you'll spend in each location, plan key activities, and balance sightseeing with rest. Use travel apps or blogs to create a practical route.",
  },
  {
    id: 4,
    question: "Which websites should I visit before my trip?",
    answer:
      "Check official tourism websites, visa and entry requirement pages, travel advisories, Google Maps, TripAdvisor, Rome2Rio, XE for currency exchange, and weather forecast sites like AccuWeather.",
  },
  {
    id: 5,
    question: "How much budget should I plan for?",
    answer:
      "Budget depends on country and travel style. For budget travel, estimate $30–$60/day. Mid-range travelers might spend $70–$150/day. Don’t forget to include flights, insurance, and a 10–20% buffer.",
  },
  {
    id: 6,
    question: "Where can I find trusted information about traveling to Asia?",
    answer:
      "You can find helpful information right here! Our travel guide covers destinations, safety tips, cultural norms, visa requirements, food guides, and packing checklists to make your trip smooth and memorable.",
  },
];

const FAQSection: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([1]); // First item open by default

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <div className={styles.headerContent}>
            <h2 className={styles.mainHeading}>
              Enjoy Our Best Quality Tour & Experience
            </h2>
            <p className={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus.
            </p>
            <button className={styles.learnMoreButton}>LEARN MORE</button>
          </div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.faqList}>
            {faqData.map((item) => (
              <div key={item.id} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleItem(item.id)}
                >
                  <span className={styles.questionNumber}>{item.id}.</span>
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={styles.chevron}>
                    {openItems.includes(item.id) ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </span>
                </button>
                {openItems.includes(item.id) && (
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
