import React from "react";
import styles from "./SanzaSection.module.css"; // Import CSS module

const features = [
  {
    img: "https://cdn.shopify.com/s/files/1/0591/6039/5912/files/Generational_expertise.png?v=1738917072",
    title: "Generational Expertise & Craftsmanship",
    text: "Over three generations of carpet-making experience, blending tradition with modern aesthetics to deliver unmatched quality."
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0591/6039/5912/files/Reasonable_price.png?v=1738917072",
    title: "Premium Yet Reasonable",
    text: "Offering luxurious carpets at prices more affordable than big brands, while maintaining superior quality unlike lower-priced alternatives online."
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0591/6039/5912/files/badohi.png?v=1738917072",
    title: "Bhadohi Advantage & Customization",
    text: "Manufactured in Bhadohi, the carpet capital of India, with the flexibility to offer custom designs tailored to unique customer preferences."
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0591/6039/5912/files/shield.png?v=1738917251",
    title: "1-Year Warranty & Exceptional Service",
    text: "All products come with a 1-year warranty, backed by exceptional customer service to ensure complete satisfaction and trust."
  }
];

const SanzaSection = () => {
  return (
    <div className={styles.sanju}>
      <div className={styles.sanza}>
        <div className={styles.sanzaHeader}>
          <h1 className={styles.sanzaTitle}>What Sets Us Apart</h1>
        </div>

        <div className={styles.sanzana}>
          {features.map((feature, index) => (
            <div key={index} className={styles.sanjuCard}>
              <img src={feature.img} alt={feature.title} className={styles.featureImage} />
              <h2 className={styles.sanjuTitle}>{feature.title}</h2>
              <p className={styles.sanjuText}>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanzaSection;