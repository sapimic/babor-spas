import React from "react";
import styles from "../styles/LocationHero.module.scss";

const LocationHero = ({ bgColor, location, description, imgUrl }) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={styles.location_hero}>
      <div className={styles.location_text}>
        <h1>{location}</h1>
        <p>{description}</p>
      </div>
      <img
        src={imgUrl}
        alt="Location"
        loading="lazy"
        className={styles.location_img}
      />
    </div>
  );
};

export default LocationHero;
