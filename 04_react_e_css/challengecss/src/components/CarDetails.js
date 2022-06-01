import styles from "./CarDetails.module.css";

const CarDetails = ({ brand, name, color, type }) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.titleCard}>{brand}</h3>
      <ul className={styles.listCard}>
        <li>Nome: {name}</li>
        <li>Cor: {color}</li>
        <li>Tipo: {type}</li>
      </ul>
    </div>
  );
};

export default CarDetails;
