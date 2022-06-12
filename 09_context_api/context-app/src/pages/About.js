import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

// 5 - Context mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const About = () => {
  const { counter } = useContext(CounterContext);

  // 5 - Contexto mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Sobre</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default About;
