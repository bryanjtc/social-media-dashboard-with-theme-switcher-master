import React, { useContext } from "react";
import Image from "next/image";
import styles from "./BigCard.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import IconUp from "../IconUp/IconUp";

const BigCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const {
    username,
    numbers,
    mediumTitle,
    smallText,
    smallTextColor,
    type,
    icon,
    iconText,
    iconColor,
  } = props;
  return (
    <div>
      <div
        className={`${styles.big_card} ${styles[type]} ${
          darkMode ? `${styles.big_card_dark}` : ""
        }`}
      >
        <div className={styles.big_card_social}>
          <Image className={styles.big_card_image} alt={iconText} src={icon} />
          <p
            className={`${styles.big_card_username} ${
              darkMode ? `${styles.dark}` : ""
            }`}
          >
            {username}
          </p>
        </div>
        <p
          className={`${styles.big_card_numbers} ${
            darkMode ? `${styles.dark}` : ""
          }`}
        >
          {numbers}
        </p>
        <p
          className={`${styles.big_card_medium_title} ${
            darkMode ? `${styles.dark}` : ""
          }`}
        >
          {mediumTitle}
        </p>
        <div className={styles.big_card_small_text_container}>
          <IconUp iconColor={iconColor} />
          <p
            className={`${styles.big_card_small_text} ${styles[smallTextColor]} ${
              darkMode ? `${styles.dark}` : ""
            }`}
          >
            {smallText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
