import React from "react";
import styles from "../styles/ServiceCard.module.scss";

const ServiceCard = ({ img, heading }) => {
  return (
    <div>
      <img src={img} className={styles.service_image} loading="lazy" />
      <p className={styles.service_heading}>{heading}</p>
    </div>
  );
};

export default ServiceCard;
