import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import styles from "../styles/ContactTeam.module.scss";

const ContactTeam = () => {
  return (
    <div className={styles.team_container}>
      <div className={styles.team_text}>
        <h1>Meet our therapists</h1>
        <p>
          Our spa team is simply extraordinary. Comprised of highly trained and
          experienced professionals, they are known for their expertise in the
          latest spa treatments and techniques. They have a deep understanding
          of the body and its needs, and are dedicated to providing personalized
          care and attention to each and every guest. From the moment you step
          into our spa, you will be enveloped in an atmosphere of tranquility
          and relaxation.
        </p>
        <a
          href="https://wa.me/+18492742902"
          target="_blank"
          className="button mt-20"
        >
          <FaMobileAlt
            style={{
              verticalAlign: "middle",
              fontSize: "20px",
              marginRight: "10px",
            }}
          />
          WhatsApp
        </a>
      </div>
      <img
        src="../images/team/blue-team.jpg"
        alt="Team Picture"
        className={styles.team_picture}
      />
    </div>
  );
};

export default ContactTeam;
