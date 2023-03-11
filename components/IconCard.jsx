import React from "react";
import styles from "../styles/Card.module.scss";

const IconCard = ({ heading, body, img }) => {
  return (
    <div className={styles.card}>
      <img
        src={img}
        alt="icon"
        height="50px"
        width="50px"
        className={styles.card_img}
      />
      <h2 className={styles.card_heading}>{heading}</h2>
      <p className={styles.card_body}>{body}</p>
    </div>
  );
};

export default IconCard;
