import React from "react";
import styles from "../styles/ProductCard.module.scss";

const ProductCard = ({ img, name, price, type }) => {
  return (
    <div className={styles.product_container}>
      <img
        src={img}
        alt="background"
        className={styles.product_image}
        loading="lazy"
      />
      <div className={`${styles.heading_wrapper} flex-row space-between`}>
        <p>{name}</p>
        <p>{price}</p>
      </div>
      <p className={styles.product_type}>{type}</p>
    </div>
  );
};

export default ProductCard;
