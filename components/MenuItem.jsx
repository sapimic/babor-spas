import React from "react";
import styles from "../styles/MenuItem.module.scss";

const MenuItem = ({ heading, time, price, description }) => {
  return (
    <div className={styles.item_container}>
      <h1 className={styles.item_heading}>{heading}</h1>
      <p>{time}</p>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
};

export default MenuItem;
