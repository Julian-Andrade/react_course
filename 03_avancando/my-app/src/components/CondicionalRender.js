import { useState } from "react";

const CondicionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Matheus");

  return (
    <div>
      <h2>Isso será exibido?</h2>
      {/* If e Else em JSX */}
      {/* Condição true */}
      {x && <p>Se x for true, sim!</p>}
      {/* If e Else em JSX */}
      {/* Condição false */}
      {!x && <p>Se x for false, falso!</p>}
      <h2>If Ternário</h2>
      {/* If e Else Ternário, Condição, ? - Se for true, : - Se for false */}
      {name === "João" ? (
        <div>
          <p>O nome é João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado!</p>
        </div>
      )}
      <button onClick={() => setName("João")}>Alterar Nome</button>
    </div>
  );
};

export default CondicionalRender;
