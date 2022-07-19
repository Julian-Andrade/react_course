// useContext
import { useContext } from "react";
import { SomeContext } from "../Components/HookUseContext";

const About = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h2>About</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
    </div>
  );
};

export default About;
