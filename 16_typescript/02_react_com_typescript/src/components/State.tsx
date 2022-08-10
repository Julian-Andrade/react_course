import { useState, ChangeEvent } from "react";

const State = () => {
  const [text, setText] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h2>o texto é: {text}</h2>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default State;
