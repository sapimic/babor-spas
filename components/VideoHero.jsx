import React from "react";
import styles from "../styles/VideoHero.module.scss";
import { FiPlayCircle } from "react-icons/fi";

const VideoHero = () => {
  return (
    <div className={styles.video_hero}>
      <h1 className={styles.video_heading}>Enjoy your stay</h1>
      <h2 className={styles.secondary_heading}>Come and visit us</h2>
      <a
        href="https://www.youtube.com/watch?v=tY2Gb3WOdzw"
        target="_blank"
        rel="noreferrer"
      >
        <FiPlayCircle className={styles.video_play} />
      </a>
    </div>
  );
};

export default VideoHero;
