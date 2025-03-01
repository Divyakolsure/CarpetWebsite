import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './NewArrivals.module.css';  // Import the CSS module
import carpet1 from '../../assets/carpet1.jpg';
 import carpet2 from '../../assets/carpet2.jpg';
 import carpet3 from '../../assets/carpet3.jpg';
 import carpet4 from '../../assets/carpet4.webp';
 import carpet5 from '../../assets/carpet5.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
 const categories = ['Round Tufted Carpets', 'Round Shaggy Carpets', 'Irregular Carpet'];
 const products = [
     {
         title: 'Circlique Round Hand Tufted Carpet & Rug',
         originalPrice: 'Rs. 11,198.00',
         salePrice: 'Rs. 5,599.00',
         discount: 'Save 50%',
         image: carpet1},
 
     {
         title: 'Plushique Round Hand Tufted Carpet & Rug',
         originalPrice: 'Rs. 11,198.00',
         salePrice: 'Rs. 5,599.00',
         discount: 'Save 50%',
         image: carpet2
     },
     {
         title: 'Fluffova Round Hand Tufted Carpet & Rug',
         originalPrice: 'Rs. 19,998.00',
         salePrice: 'Rs. 9,999.00',
         discount: 'Save 50%',
         image: carpet3
     }
     ,
     {
         title: 'Fluffova Round Hand Tufted Carpet & Rug',
         originalPrice: 'Rs. 19,998.00',
         salePrice: 'Rs. 9,999.00',
         discount: 'Save 50%',
         image: carpet3
     }
     ,
     {
         title: 'Fluffova Round Hand Tufted Carpet & Rug',
         originalPrice: 'Rs. 19,998.00',
         salePrice: 'Rs. 9,999.00',
         discount: 'Save 50%',
         image: carpet3
     }
     ,
     {
         title: 'Fluffova Round Hand Tufted Carpet & Rug',
         originalPrice: 'Rs. 19,998.00',
         salePrice: 'Rs. 9,999.00',
         discount: 'Save 50%',
         image: carpet3
     }
 ];
 
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


const NewArrivals = () => {
 
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
 
     const [activeCategory, setActiveCategory] = useState(categories[0]);
 
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>New Arrivals</h1>
      <Slider {...settings} className={styles.slider}>
                {products.map((product, index) => (
                    <div className={styles.productCard} key={index}>
                        <div className={styles.saleBadge}>Sale</div>
                        <div className={styles.addToCart}></div>
                        <img src={product.image} alt={product.title} className={styles.productImage} />
                        <div className={styles.productDetails}>
                            <h3 className={styles.productTitle}>{product.title}</h3>
                            <div className={styles.priceContainer}>
                                <span className={styles.originalPrice}>{product.originalPrice}</span>
                                <span className={styles.priceSeparator}>from</span>
                                <span className={styles.salePrice}>{product.salePrice}</span>
                            </div>
                            <div className={styles.discountBadge}>{product.discount}</div>
                        </div>
                    </div>
                ))}
            </Slider>
    </div>
  );
};

export default NewArrivals;
