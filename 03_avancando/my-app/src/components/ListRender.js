import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias", "Julian"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Matheus", age: 31 },
    { id: 2, name: "João", age: 28 },
    { id: 3, name: "Carlos", age: 45 },
  ]);

  const deleteUser = () => {
    // Math.floor (transforma em número inteiro) , Math.random (cria um número aleatório de 0 a 1), multiplica por 4
    const randomNumber = Math.floor(Math.random() * 4);
    // Filtra o array users, se randomNumber for diferente de user.id, cria um array novo sem os valores!
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };
  return (
    <div>
      <ul>
        {list.map((name, i) => (
          <li key={i}>{name}</li>
        ))}
      </ul>
      <div>
        {/* users.map (nome do array / map JavaScript), user (propriedade p/ mapear o array) */}
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              Nome: {user.name} - Idade: {user.age}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button onClick={deleteUser}>Delete User</button>
      </div>
    </div>
  );
};

export default ListRender;
