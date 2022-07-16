import React from "react";

// Styles
import styles from "./CardRegistration.module.css";

// Icons
import { BsPlusCircleFill } from "react-icons/bs";

// React Router
import { Link } from "react-router-dom";

const CardRegistration = ({ title, info, to }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card_left}></div>
      <div className={styles.card_body}>
        <h2>{title}</h2>
        <p>{info}</p>
        <Link to={to}>
          <button className="btn btn-card">
            <BsPlusCircleFill /> Novo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardRegistration;
