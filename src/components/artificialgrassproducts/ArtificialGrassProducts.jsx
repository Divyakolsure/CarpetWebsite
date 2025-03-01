import React from "react";
import styles from "./ArtificialGrassProducts.module.css";
import carpet1 from '../../assets/carpet1.jpg';
import carpet2 from '../../assets/carpet2.jpg';
import carpet3 from '../../assets/carpet3.jpg';
import carpet4 from '../../assets/carpet4.webp';
import carpet5 from '../../assets/carpet5.jpg';
const ArtificialGrassProducts = () => {
  const products = [
    {
      id: 1,
      title: "Carpet planet – High Density Artificial Grass 25MM (6.5 Feet width)",
      originalPrice: "Rs. 3,998.00",
      currentPrice: "Rs. 1,999.00",
      discount: "Save 50%",
      imageUrl: carpet1,
    },
    {
      id: 2,
      title: "Carpet planet – High Density Artificial Grass 25MM (4 Feet width)",
      originalPrice: "Rs. 3,298.00",
      currentPrice: "Rs. 1,649.00",
      discount: "Save 50%",
      imageUrl: carpet2,
    },
    {
      id: 3,
      title: "Carpet planet – High Density Artificial Grass 25MM (2.5 Feet width)",
      originalPrice: "Rs. 3,098.00",
      currentPrice: "Rs. 1,549.00",
      discount: "Save 50%",
      imageUrl: carpet3,
    },
    {
      id: 4,
      title: "Carpet planet – High Density Artificial Grass 25MM (3.3 Feet width)",
      originalPrice: "Rs. 3,998.00",
      currentPrice: "Rs. 1,999.00",
      discount: "Save 50%",
      imageUrl: carpet4,
    },
  ];

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Artificial Grass</h2>
      </div>

      <h3 className={styles.categoryTitle}>Artificial Grass</h3>
      <div className={styles.sizeTabs}>
        <div className={`${styles.sizeTab} ${styles.active}`}>25mm</div>
        <div className={styles.sizeTab}>35 mm</div>
        <div className={styles.sizeTab}>40mm</div>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.saleBadge}>Sale</div>
            <div className={styles.addToCart}></div>
            <img src={product.imageUrl} alt={product.title} className={styles.productImage} />
            <div className={styles.productDetails}>
              <h4 className={styles.productTitle}>{product.title}</h4>
              <div className={styles.priceContainer}>
                <span className={styles.originalPrice}>{product.originalPrice}</span>
                <span className={styles.priceSeparator}>from</span>
                <span className={styles.currentPrice}>{product.currentPrice}</span>
              </div>
              <span className={styles.discountBadge}>{product.discount}</span>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.navigationArrow}>
        <span className={styles.arrowIcon}></span>
      </div>
    </div>
  );
};

export default ArtificialGrassProducts;
