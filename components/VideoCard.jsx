import React from "react";
import styles from "../styles/VideoCard.module.scss";

const VideoCard = ({ link }) => {
  return (
    <div>
      <iframe
        src={link}
        className={styles.video_frame}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoCard;
