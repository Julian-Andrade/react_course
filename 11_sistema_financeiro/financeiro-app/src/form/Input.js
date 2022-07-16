const Input = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  min,
  required
}) => {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        min={min}
        onChange={handleOnChange}
        value={value}
        required={required}
      />
    </div>
  );
};

export default Input;
