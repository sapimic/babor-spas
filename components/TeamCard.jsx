import React, { useState } from "react";
import styles from "../styles/TeamCard.module.scss";
import { FaMobileAlt, FaEnvelope } from "react-icons/fa";

const TeamCard = ({
  img,
  number,
  personName,
  contactable,
  role,
  mailable,
  mail,
}) => {
  return (
    <div className={styles.team_container}>
      <img src={img} loading="lazy" className={styles.team_image} />
      <p className={styles.text}>{personName}</p>
      <p className={styles.text}>
        <b>{role}</b>
      </p>
      <div className={styles.button_container}>
        {contactable === "true" && (
          <a href={`${number}`} className={`${styles.team_button} button`}>
            <FaMobileAlt
              style={{
                verticalAlign: "middle",
                fontSize: "20px",
                marginRight: "5px",
              }}
            />
            WhatsApp
          </a>
        )}
        {mailable === "true" && (
          <a href={`${mail}`} className={`${styles.team_button} button`}>
            <FaEnvelope
              style={{
                verticalAlign: "top",
                fontSize: "20px",
                marginRight: "10px",
              }}
            />
            E-mail
          </a>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
