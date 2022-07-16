import styles from "./Radio.module.css";

const Radio = ({
  type,
  text,
  name,
  id,
  handleOnChange,
  value,
  min,
  required,
}) => {
  return (
    <label htmlFor={name} className={styles.container_radio}>{text}
      <input
        type={type}
        name={name}
        id={id}
        min={min}
        onChange={handleOnChange}
        value={value}
        required={required}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Radio;
