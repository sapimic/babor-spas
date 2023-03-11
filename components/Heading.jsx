import React from "react";
import styles from "../styles/Heading.module.scss";

const Heading = ({ subHeading, mainHeading }) => {
  return (
    <div>
      <h1 className={styles.main_heading}>{mainHeading}</h1>
      <p className={styles.sub_heading}>{subHeading}</p>
      <hr className={styles.heading_underline} />
    </div>
  );
};

export default Heading;
