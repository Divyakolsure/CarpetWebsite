import React, { useRef, useEffect } from 'react';
import styles from './Reviews.module.css';

const reviews = [
    {
        name: 'Ashish Goenka',
        date: 'a month ago',
        content: 'I bought 4 reels Carpet Grass on urgent basis. Not only did they deliver to Kolkata within 3 days, the quality of the Grass Carpet is amazing. Very cooperative...',
        avatar: 'A',
    },
    {
        name: 'Subodh Desai',
        date: 'a month ago',
        content: 'Hi, This place called Carpet Planet is a great place to buy all type of carpets at Delhi. I have enquired online for some carpet...',
        avatar: 'S',
    },
    {
        name: 'Shantanu Chatterjee',
        date: '2 months ago',
        content: 'We were looking for a carpet for our home and were particular about the material, texture, and color. After extensive search...',
        avatar: 'S',
    },
    {
        name: 'Mohit Bhardwaj',
        date: 'a month ago',
        content: 'I recently purchased the Blue Turquoise Shaggy rug, and I couldn\'t be happier with it! The rug looks incredibly elegant and...',
        avatar: 'M',
    },
    {
        name: 'Bharatkumar P. Modi',
        date: '5 months ago',
        content: 'Dear Vali and Carpet Planet, I had an amazing experience shopping at Carpet Planet in Delhi. The quality and variety of carpets...',
        avatar: 'B',
    },
    {
        name: 'Sanjay Shinde',
        date: '3 months ago',
        content: 'I am thrilled with my purchase from CARPET PLANET! The woolen carpet I received exceeded my expectations...',
        avatar: 'S',
    }
];

const Reviews = () => {
    const carouselRef = useRef(null);
    const cardWidth = 320;

    const scroll = (direction) => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += direction * cardWidth;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            scroll(1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const toggleShowMore = (e) => {
        e.preventDefault();
        const content = e.target.previousElementSibling;
        if (content.style.height === '60px' || content.style.height === '') {
            content.style.height = 'auto';
            e.target.textContent = 'Show less';
        } else {
            content.style.height = '60px';
            e.target.textContent = 'Show more';
        }
    };

    return (
        <div className={styles.reviewsContainer}>
            <div className={styles.reviewsCarousel} ref={carouselRef}>
                {reviews.map((review, index) => (
                    <div className={styles.reviewCard} key={index}>
                        <div className={styles.reviewHeader}>
                            <div className={styles.stars}>★ ★ ★ ★ ★ <span className={styles.verified}>✓</span></div>
                        </div>
                        <div className={styles.reviewContent} style={{ height: '60px', overflow: 'hidden' }}>
                            {review.content}
                        </div>
                        <a href="#" className={styles.showMore} onClick={toggleShowMore}>Show more</a>
                        <div className={styles.reviewerInfo}>
                            <div className={styles.reviewerAvatar}>{review.avatar}</div>
                            <div>
                                <div className={styles.reviewerName}>{review.name}</div>
                                <div className={styles.reviewDate}>{review.date}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className={`${styles.navigationArrow} ${styles.prev}`} onClick={() => scroll(-1)}>&#10094;</button>
            <button className={`${styles.navigationArrow} ${styles.next}`} onClick={() => scroll(1)}>&#10095;</button>

            <div className={styles.storeInfo}>
                <img src="https://via.placeholder.com/60" alt="Carpet Planet" className={styles.storeLogo} />
                <div className={styles.storeName}>Carpet Planet</div>
                <div className={styles.storeRating}>
                    <div className={styles.storeRatingScore}>5.0</div>
                    <div className={styles.storeRatingStars}>★ ★ ★ ★ ★</div>
                </div>
                <div className={styles.storeReviewsCount}>71 reviews</div>
                <a href="#" className={styles.leaveReviewBtn}>Leave a Review</a>
            </div>
        </div>
    );
};

export default Reviews;
