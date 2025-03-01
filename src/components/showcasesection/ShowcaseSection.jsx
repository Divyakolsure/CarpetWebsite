import React, { useState, useRef, useEffect } from 'react';
import styles from './ShowcaseSection.module.css';
import carpet1 from '../../assets/carpet1.jpg';
import carpet2 from '../../assets/carpet2.jpg';
import carpet3 from '../../assets/carpet3.jpg';
import carpet4 from '../../assets/carpet4.webp';
const rooms = [
    { label: 'Living Room', image: carpet1 },
    { label: 'Dining Room', image: carpet2 },
    { label: 'Bed Room', image: carpet3 },
    { label: 'Kids Room', image: carpet4 }
];

const ShowcaseSection = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const sliderRef = useRef(null);

    const updateSliderPosition = () => {
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.children[0].offsetWidth;
            const gapWidth = 20;
            sliderRef.current.style.transform = `translateX(-${slideIndex * (cardWidth + gapWidth)}px)`;
        }
    };

    useEffect(() => {
        updateSliderPosition();
    }, [slideIndex]);

    const prevSlide = () => {
        if (slideIndex > 0) setSlideIndex(slideIndex - 1);
    };

    const nextSlide = () => {
        if (slideIndex < rooms.length - 1) setSlideIndex(slideIndex + 1);
    };

    return (
        <div className={styles.showcaseSection}>
            <h2 className={styles.showcaseTitle}>Find the Perfect Carpet for Every Space</h2>
            
            <button className={`${styles.sliderNav} ${styles.prev}`} onClick={prevSlide}>&#10094;</button>
            
            <div className={styles.roomSlider} ref={sliderRef}>
                {rooms.map((room, index) => (
                    <div className={styles.roomCard} key={index}>
                        <img src={room.image} alt={room.label} className={styles.roomImage} />
                        <div className={styles.roomLabel}>{room.label}</div>
                    </div>
                ))}
            </div>
            
            <button className={`${styles.sliderNav} ${styles.next}`} onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default ShowcaseSection;
