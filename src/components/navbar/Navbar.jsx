import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaUser, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";
import carpetLogo from "../../assets/carpetLogo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    {
      title: "Shop By Category ▼",
      options: [
        "Hand Tufted Carpets",
        "Shaggy Carpets",
        "Irregular Shaped Carpets",
        "Hand Knotted Carpets",
        "Modern Abstract Carpets",
        "Modern Persian Carpets",
        "Round Tufted Carpets",
        "Round Shaggy Carpets",
        "Abstract Carpets",
        "Floral Carpets",
        "Geomatric Carpets",
        "Solid Carpets",
        "Traditional Carpets",
      ],
    },
    {
      title: "Shop by Rooms ▼",
      options: ["Living Room", "Bed Room", "Dining Room", "Kids Room"],
    },
    {
      title: "Artificial Grass ▼",
      options: ["25 mm", "35 mm", "40 mm", "50 mm"],
    },
    {
      title: "Shop By Color ▼",
      options: ["Red", "Black", "Blue", "Green", "Beige", "White", "Brown", "Grey"],
    },
    {
      title: "Shop by Size ▼",
      options: ["3x5", "4x6", "5x7", "5x8", "6x8", "6x9", "7x10", "8x10", "8x11", "9x12", "10x13"],
    },
    {
      title: "Shop by Shape ▼",
      options: ["Rectangular", "Irregular", "Square", "Round"],
    },
    {
      title: "Shop By Material ▼",
      options: ["Wool", "Viscose Silk", "Microfibre", "Wool-Viscose Mix"],
    },
    {
      title: "Services ▼",
      options: ["Vertical Garden", "Carpet Cleaning & Repair", "Wall to Wall Carpet", "Customized Carpets", "Enquiry for Bulk Order"],
    },
    {
      title: "About Us ▼",
      options: ["About Us", "Blogs", "Gallery"],
    },
    { title: "Contact Us", options: [] },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarItem}>
        {/* Hamburger Menu for Mobile */}
        <button className={styles.hamburger} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Logo */}
        <div className={styles.logo}>
          <img src={carpetLogo} alt="Carpet Planet Logo" className={styles.logoImage} />
        </div>

        {/* Search Bar */}
        <div className={styles.searchBar}>
          <select className={styles.dropdown1}>
            <option>All products</option>
          </select>
          <input type="text" placeholder="Search..." className={styles.searchInput} />
          <button className={styles.searchButton}>
            <FaSearch />
          </button>
        </div>

        {/* User Actions */}
        <div className={styles.userActions}>
          <div className={styles.login}>
            <FaUser /> <span>Log in</span>
          </div>
          <div className={styles.cart}>
            <FaShoppingCart />
            <span className={styles.cartCount}>1</span>
            <span className={styles.price}>Rs. 42,336.00</span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Hides on Scroll */}
      <div className={`${styles.bottomNav} ${isScrolled ? styles.hidden : ""}`}>
        {menuItems.map((item, index) => (
          <div key={index} className={styles.dropdown}>
            {item.title}
            {item.options.length > 0 && (
              <ul className={styles.dropdownMenu}>
                {item.options.map((option, idx) => (
                  <li key={idx}>{option}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Sidebar Navigation */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className={styles.mobiledrop}>
              {item.title}
              {item.options.length > 0 && (
                <ul className={styles.mobileDropdown}>
                  {item.options.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
