import React from "react";
import styles from "../styles/SelectionCard.module.scss";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const SelectionCard = ({ img, link, linkText }) => {
  return (
    <Link href={link}>
      <div className={styles.selection_container}>
        <div className={styles.selection_card}>
          <img
            src={img}
            alt="background"
            className={styles.card_bg}
            loading="lazy"
          />
        </div>
        <a className={styles.selection_link}>
          {linkText} <FaLongArrowAltRight className={styles.arrow} />
        </a>
      </div>
    </Link>
  );
};

export default SelectionCard;
