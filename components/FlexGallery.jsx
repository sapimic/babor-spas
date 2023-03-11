import React from "react";
import styles from "../styles/FlexGallery.module.scss";

const FlexGallery = () => {
  return (
    <div className={styles.flex_gallery}>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/bar.jpg"
          alt="Bar"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Bar</h1>
      </div>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/pool.jpg"
          alt="Bar"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Pool</h1>
      </div>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/jacuzzi.jpg"
          alt="Bar"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Jacuzzi</h1>
      </div>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/gym.jpg"
          alt="Bar"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Gym</h1>
      </div>
    </div>
  );
};

export default FlexGallery;
