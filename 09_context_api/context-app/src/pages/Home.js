// Styles
import "./Home.css";

// Context
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// Components
import ChangeCounter from "../components/ChangeCounter";

// 4 - Refatorando context com hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5 - Context mais completo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // 5 - Contexto mais complexo
  const { color, dispatch } = useTitleColorContext();

  // 6 - Alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* 3 - Alterando valor do contexto */}
      <ChangeCounter />
      {/* 6 - Alterando contexto complexo */}
      <div>
        <button onClick={() => setTitleColor("RED")}>Cor: Vermelha</button>
        <button onClick={() => setTitleColor("BLUE")}>Cor: Blue</button>
      </div>
    </div>
  );
};

export default Home;
