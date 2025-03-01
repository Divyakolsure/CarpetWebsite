import React from "react";
import styles from "./FindCarpetsByColours.module.css";
import carpet1 from '../../assets/carpet1.jpg';
import carpet2 from '../../assets/carpet2.jpg';
import carpet3 from '../../assets/carpet3.jpg';
import carpet4 from '../../assets/carpet4.webp';
import carpet5 from '../../assets/carpet5.jpg';
const carpets = [
  { color: "Black", imgSrc: carpet1 },
  { color: "Navy Blue", imgSrc: carpet2 },
  { color: "Grey", imgSrc: carpet3},
  { color: "White", imgSrc: carpet5 },
  { color: "Red", imgSrc: carpet4 },
  { color: "Green", imgSrc: carpet1 },
  { color: "Beige", imgSrc: carpet2 },
  { color: "Brown", imgSrc: carpet3 },
];

const FindCarpetsByColours = () => {
  return (
    <div className={styles.colourSection}>
      <h2 className={styles.sectionTitle}>Find Carpets By Colours</h2>

      <div className={styles.colourGrid}>
        {carpets.map((carpet, index) => (
          <div key={index} className={styles.colourCard}>
            <img
              src={carpet.imgSrc}
              alt={`${carpet.color} Carpet`}
              className={styles.carpetImage}
            />
            <div className={styles.colourLabel}>{carpet.color}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindCarpetsByColours;
