import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let userName = "João";

  const [name, setName] = useState("Matheus");

  const changeNames = () => {
    userName = "João Souza";
    setName("Matheus Battitsti");
    // console.log(userName);
  };
  // console.log(name);

  // 2 - useState e Input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(age)
  };

  return (
    <div>
      {/* 1 - useState */}
      <h3> 1 - useState</h3>
      <p>Variável: {userName}</p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Alterar Nomes</button>
      {/* 2 - useState e Input */}
      <h3> 2 - useState e Input</h3>
      <p>Digite a sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Você tem {age} anos.</p>
      <hr />
    </div>
  );
};

export default HookUseState;
