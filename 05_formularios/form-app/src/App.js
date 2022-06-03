import "./App.css";

//Components
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm
        user={{
          name: "Josias",
          email: "josias@gmail.com",
          textarea: "Biografia do usuário aqui!",
          role: "admin",
        }}
      />
    </div>
  );
}

export default App;
