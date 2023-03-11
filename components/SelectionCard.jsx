import React from "react";
import styles from "../styles/SelectionCard.module.scss";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const SelectionCard = ({ img, link, linkText }) => {
  return (
    <div className={styles.selection_container}>
      <div className={styles.selection_card}>
        <img
          src={img}
          alt="background"
          className={styles.card_bg}
          loading="lazy"
        />
      </div>
      <Link href={link}>
        <a className={styles.selection_link}>
          {linkText} <FaLongArrowAltRight className={styles.arrow} />
        </a>
      </Link>
    </div>
  );
};

export default SelectionCard;
