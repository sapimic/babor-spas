import React from "react";
import styles from "../styles/FlexGallery.module.scss";

const FlexGallery = () => {
  return (
    <div className={styles.flex_gallery}>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/facial.jpg"
          alt="Facial and Skin"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Facial and Skin</h1>
      </div>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/treatments-spa.jpg"
          alt="Treatments Spa"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Treatments Spa</h1>
      </div>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/massage-therapy.jpg"
          alt="Massage Therapy"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Massage Therapy</h1>
      </div>
      <div className={styles.gallery_item}>
        <img
          src="/images/home/beauty-salon.jpg"
          alt="Beauty Salon"
          loading="lazy"
          className={styles.gallery_img}
        />
        <h1 className={styles.gallery_h}>Beauty Salon</h1>
      </div>
    </div>
  );
};

export default FlexGallery;
