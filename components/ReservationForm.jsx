import React from "react";
import styles from "../styles/ReservationForm.module.scss";

const ReservationForm = () => {
  return (
    <form className={styles.form} name="reservation" method="POST">
      <label htmlFor="fullname">Full Name</label>
      <input type="text" name="Full Name" placeholder="Full Name" required />
      <label htmlFor="email">E-mail</label>
      <input type="email" name="E-mail" placeholder="E-mail" required />
      <label htmlFor="date">Desired Date</label>
      <input type="date" name="date" />
      <label htmlFor="time">Desired Time</label>
      <input type="time" name="time" />
      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        placeholder="Leave us any additional information here."
      ></textarea>
      <button type="submit" className={styles.form_button}>
        Send Request
      </button>
      <p className={styles.confirmation_text}>
        Our reception will contact you to confirm your appointment as quickly as
        possible.
      </p>
      <p>Working hours: 8:30 - 18:30</p>
    </form>
  );
};

export default ReservationForm;
