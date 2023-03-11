import React from "react";
import styles from "../styles/LandingHero.module.scss";

const LandingHero = ({ heading, secondaryHeading, url }) => {
  return (
    <div
      style={{
        backgroundImage: "url(./images/home/yinyang-home.jpg)",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
      className={styles.centered_hero}
    >
      <h1 className={styles.centered_heading}>{heading}</h1>
      <h2 className={styles.secondary_heading}>{secondaryHeading}</h2>
    </div>
  );
};

export default LandingHero;
