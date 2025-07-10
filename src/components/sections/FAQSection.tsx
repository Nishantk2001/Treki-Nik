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
    question: "What to prepare trip to Asia",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  },
  {
    id: 2,
    question: "What document you need before go to asia",
    answer:
      "You'll need a valid passport, visa (depending on your destination), travel insurance, vaccination certificates, and copies of important documents. Make sure your passport has at least 6 months validity remaining.",
  },
  {
    id: 3,
    question: "How to scheduling Asia trip itinerary",
    answer:
      "Start by choosing your destinations, research the best time to visit, book flights and accommodations in advance, plan your daily activities, and leave some flexibility for spontaneous experiences.",
  },
  {
    id: 4,
    question: "8 Website must read before your trip",
    answer:
      "Essential websites include official tourism boards, travel advisories, weather forecasts, local transportation guides, cultural etiquette resources, currency exchange rates, and travel forums for insider tips.",
  },
  {
    id: 5,
    question: "This is the best budget you need to prepare",
    answer:
      "Budget varies by destination and travel style. Generally, plan for accommodation, meals, transportation, activities, shopping, and emergency funds. Research local costs and add 20% buffer for unexpected expenses.",
  },
  {
    id: 6,
    question: "This site give you the information about travel to Asia",
    answer:
      "Our comprehensive travel guide provides detailed information about destinations, cultural insights, practical tips, safety guidelines, and authentic local experiences to make your Asian adventure unforgettable.",
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
