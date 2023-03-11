import React from "react";
import styles from "../styles/MenuItem.module.scss";

const MenuItem = ({ children, menuHeading }) => {
  return (
    <div className={styles.menu_item}>
      <h1 className={styles.menu_heading}>{menuHeading}</h1>
      {children}
    </div>
  );
};

export default MenuItem;
