import React from "react";
import styles from "./Story.module.css";

const Story = () => {
  return (
    <section className={styles.storySection}>
      <div className={styles.container}>
        <div className={styles.videoContainer}>
          {/* Correctly embedding a YouTube video using an iframe */}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_OstmeuzA1E"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.videoPlayer}
          ></iframe>
        </div>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Our Story</h2>
          <p className={styles.paragraph}>
            At Carpet Planet, our journey began in Bhadohi, the 'Carpet Capital of India,' 
            where craftsmanship and tradition thrive. Founded by Wali Sheikh, a third-generation 
            carpet enthusiast, our brand blends centuries-old weaving techniques with modern innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;