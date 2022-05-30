import { useState } from "react";

const ManageData = () => {
  let someData = 10;
  // Trabalhar com Hooks
  const [number, setNumber] = useState(15);
  return (
    <div>
      <div>
        <p>Valor: R${someData}</p>
        <button onClick={() => (someData = 15)}>Alterar Variável</button>
      </div>
      <div>
        <p>Valor: R${number} </p>
        <button onClick={() => setNumber(25)}>Alterar Variável State</button>
      </div>
    </div>
  );
};

export default ManageData;
