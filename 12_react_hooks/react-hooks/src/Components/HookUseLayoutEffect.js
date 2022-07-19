import { useLayoutEffect, useEffect, useState } from "react";

const HookUseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");
    setName("Alterou o nome!");
  }, []);

  // useLayoutEffect sempre será invocado primeiro.
  // pode ser utilizado para criar um Modal.

  useLayoutEffect(() => {
    console.log("1");
    setName("Outro nome!");
  }, []);

  console.log(name);

  return (
    <div>
      <h2>HookUseLayoutEffect</h2>
      <p>Nome: {name}</p>
      <hr />
    </div>
  );
};

export default HookUseLayoutEffect;
