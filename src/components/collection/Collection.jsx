import React from 'react';
import Slider from "react-slick";
import styles from './Collection.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carpet1 from '../../assets/carpet1.jpg';
import carpet2 from '../../assets/carpet2.jpg';
import carpet3 from '../../assets/carpet3.jpg';
import carpet4 from '../../assets/carpet4.webp';
import carpet5 from '../../assets/carpet5.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <button className={styles.prevArrow} onClick={onClick}>
    <FaChevronLeft />
  </button>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <button className={styles.nextArrow} onClick={onClick}>
    <FaChevronRight />
  </button>
);


const Collection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 images at a time
    slidesToScroll: 1,
    autoplay: true,
    arrows:true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />, 
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ]
  };

  const rugs = [
    { id: 1, name: "Abstract Area Rug Premium Hand Tufted Carpet", image: carpet1, originalPrice: 23998, salePrice: 11999, onSale: true, isNew: false },
    { id: 2, name: "Abstract Blocks Hand Tufted Carpet", image: carpet2, originalPrice: 9998, salePrice: 4999, onSale: true, isNew: false },
    { id: 3, name: "Abstract Leafy Art Hand Tufted Carpet", image: carpet3, originalPrice: 23998, salePrice: 11999, onSale: true, isNew: false },
    { id: 4, name: "Achromic Beige Premium Hand Tufted Carpet", image: carpet4, originalPrice: 23998, salePrice: 11999, onSale: true, isNew: false },
    { id: 5, name: "Anak Round Shaggy Carpet & Rug", image: carpet5, originalPrice: 5298, salePrice: 2649, onSale: true, isNew: true },
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Browse Our Bestsellers</h1>

      <Slider {...settings} className={styles.slider}>
        {rugs.map((rug) => (
          <div key={rug.id} className={styles.productCard}>
            <div className={styles.imageContainer}>
              <img src={rug.image} alt={rug.name} className={styles.productImage} />
              
              <div className={styles.badgeContainer}>
                {rug.onSale && <span className={styles.saleBadge}>Sale</span>}
                {rug.isNew && <span className={styles.newBadge}>New</span>}
              </div>
            </div>

            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{rug.name}</h3>
              <div className={styles.priceContainer}>
                <span className={styles.originalPrice}>Rs. {rug.originalPrice.toLocaleString()}</span>
                <span className={styles.salePrice}>from Rs. {rug.salePrice.toLocaleString()}</span>
              </div>
              <div className={styles.saveBadge}>Save 50%</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Collection;
