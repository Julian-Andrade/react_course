import { useEffect, useState } from "react";

const HookUseEffect = () => {
  // 1 - useEffect, sem dependências
  useEffect(() => {
    console.log("Estou sendo executado!");
  });

  const [number, setNumber] = useState(1);

  const changeSomething = () => {
    setNumber(number + 1);
  };

  // 2 - useEffect, array de dependências vazio
  useEffect(() => {
    console.log("Serei executado apenas uma vez!");
  }, []);

  // 3 - useEffect, array de dependências
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    if (anotherNumber > 0) {
      console.log("Sou executado apenas quando o anotherNumber muda!");
    }
  }, [anotherNumber]);

  const changeAnotherNumber = () => {
    setAnotherNumber(anotherNumber + 1);
  };

  // 4 - useEffect, cleanUp
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello World!");
    }, 2000);
    return () => clearTimeout(timer);
  }, [anotherNumber]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Number: {number}</p>
      <button onClick={changeSomething}>Executar!</button>
      <p>Number: {anotherNumber}</p>
      <button onClick={changeAnotherNumber}>Change Number!</button>
      <hr />
    </div>
  );
};

export default HookUseEffect;
