import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1 - useReducer
  // 1.1 - const [state, dispatch] => state (variável), dispatch (executar função)
  // 1.2 - useReducer ((state, action)) => state (variável), action (ação) => não obrigatório
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  // 2 - useReducer (Avançado)
  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa" },
    { id: 2, text: "Fazer outra coisa" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        // Deixa o input vazio para colocar novos valores
        setTaskText("");
        // Retorna o array atual + o novo array
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.id);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD" });
  };

  const handleRemove = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      {/* 1 - useReducer */}
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Alterar Valor</button>
      {/* 2 - useReducer => Avançado */}
      <h3>Tarefas:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => handleRemove(task.id)}>
          {task.text}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default HookUseReducer;
