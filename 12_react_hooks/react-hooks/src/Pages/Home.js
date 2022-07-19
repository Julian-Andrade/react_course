// Hooks
import HookUseEffect from "../Components/HookUseEffect";
import HookUseReducer from "../Components/HookUseReducer";
import HookUseState from "../Components/HookUseState";
import HookUseRef from "../Components/HookUseRef";
import HookUseCallback from "../Components/HookUseCallback";
import HookUseMemo from "../Components/HookUseMemo";
import HookUseLayoutEffect from "../Components/HookUseLayoutEffect";
import HookUseImperativeHandle from "../Components/HookUseImperativeHandle";
import HookCustom from "../Components/HookCustom";

// useContext
import { useContext } from "react";
import { SomeContext } from "../Components/HookUseContext";


const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext</h2>
      <p>Valor do context: {contextValue}</p>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
      <HookUseLayoutEffect />
      <HookUseImperativeHandle />
      <HookCustom />
    </div>
  );
};

export default Home;
