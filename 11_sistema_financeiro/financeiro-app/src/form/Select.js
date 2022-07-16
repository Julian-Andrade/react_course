const Select = ({ name, text, options, handleOnChange, value }) => {
  return (
    <div>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value && value}
      >
        <option>Selecione uma opção</option>
        {options &&
          options.map((option) => (
            <option value={option.id} key={option.id}>
              {option.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Select;
