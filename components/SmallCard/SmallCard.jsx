import React, { useContext } from "react";
import Image from "next/image";
import styles from "./SmallCard.module.css";
import { ThemeContext } from "../../context/ThemeContext";
import IconUp from "../IconUp/IconUp";

const SmallCard = (props) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  const {
    title,
    numbers,
    smallText,
    smallTextColor,
    icon,
    iconText,
    iconColor,
  } = props;
  return (
    <div className={`${styles.small_card} ${darkMode ? `${styles.dark}` : ""}`}>
      <div className={styles.small_card_left}>
        <p className={`${styles.small_card_title} ${darkMode ? `${styles.dark}` : ""}`}>{title}</p>
        <p className={`${styles.small_card_numbers} ${darkMode ? `${styles.dark}` : ""}`}>
          {numbers}
        </p>
      </div>
      <div className={styles.small_card_right}>
        <Image className={styles.small_card_image} alt={iconText} src={icon} />
        <div className={styles.small_card_small_text_container}>
          <IconUp iconColor={iconColor} />
          <p className={`${styles.small_card_small_text} ${styles[smallTextColor]}`}>
            {smallText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
