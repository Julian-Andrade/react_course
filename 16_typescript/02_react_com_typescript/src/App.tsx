// 4 - Importação de Componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando a Props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - Hook => useState
import State from "./components/State";
import { createContext } from "react";

// 10 - Context API
import Context from "./components/Context";

// 9 - Types
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo"; // Aceita somente os valores fixados!

// 10 - Context API
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variáveis
  const name: string = "Julian";
  const age: number = 30;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // 8 - Types
  const myText: textOrNull = "Tem algum texto aqui!";
  let mySecondText: textOrNull = null;

  // mySecondText = "Opa";

  const testingFixed: fixed = "Isso";

  // 10 - Context API
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && <p>Está Trabalhando!</p>}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Andrade Silva" />
        <Destructuring
          title="Primeiro Post"
          content="Algum Conteúdo"
          commentsQty={10}
          tags={["ts", "js"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo Post"
          content="Algum Conteúdo"
          commentsQty={20}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na primeira variável.</p>}
        {mySecondText && <p>Tem texto na segunda variável.</p>}
        {testingFixed && (
          <p>Tem um texto na terceira variável, ele é: {testingFixed}</p>
        )}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
