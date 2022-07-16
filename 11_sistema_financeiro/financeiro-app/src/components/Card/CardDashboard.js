import React from "react";

// Styles
import styles from "./CardDashboard.module.css";

const CardRegistration = ({ title, info, cardside, cardtitle, cardinfo }) => {
  return (
    <div className={styles.card}>
      <div className={styles[cardside]}></div>
      <div className={styles.card_body}>
        <h2 className={styles[cardtitle]}>{title}</h2>
        <h2 className={styles[cardinfo]}>R$ {info}</h2>
      </div>
    </div>
  );
};

export default CardRegistration;
