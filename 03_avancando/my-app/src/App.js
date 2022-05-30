import "./App.css";
import { useState } from "react";

// Images
import City from "./assets/city.jpg";
// Components
import ManageData from "./components/ManageData";
import ListRender from "./components/ListRender";
import CondicionalRender from "./components/CondicionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";
import UserDetails from "./components/UserDetails";

function App() {
  // const name = "Joaquim";
  const [userName, setUserName] = useState("Julian");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 234562 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 123478 },
  ];

  // Executando uma função
  function showMessage() {
    console.log(`Evento do componente pai!`);
  }

  // Statelift
  // useState gerenciado pelo component Pai
  // Forma de alteraçào do useState (handleMessage)
  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  // Array de Usuários
  const people = [
    { id: 1, name: "Josué", age: 22, work: "Pedreiro" },
    { id: 2, name: "Edvaldo", age: 55, work: "Eletricista" },
    { id: 3, name: "Matheus", age: 32, work: "Engenheiro Civil" },
    { id: 4, name: "João", age: 17, work: "Estudante" },
  ];

  return (
    <div className="App">
      <h2>Avançando em React</h2>
      {/* Imagem em public, podemos acessá-la diretamente com a barra '/' */}
      <div>
        <img src="/img1.jpg" alt="Paisagem por do Sol" />
      </div>
      {/* Imagem fora da public, src > assets (não é regra!) */}
      <div>
        <img src={City} alt="Cidade a noite" />
      </div>
      <hr />
      <ManageData />
      <ListRender />
      <CondicionalRender />
      <ShowUserName name={userName} />
      <div>
        <button onClick={() => setUserName("Andrade Silva")}>
          Alterar Nome
        </button>
      </div>
      <hr />
      {/* Component Cardetails */}
      <CarDetails brand="Volkswagen" km={100000} color="Azul" newCar={false} />
      {/* Reaproveitando Component */}
      <CarDetails brand="Ferrai" km={0} color="Vermelho" newCar={true} />
      <CarDetails brand="Renault" km={130000} color="Preto" newCar={false} />
      {/* Cardetails - loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          newCar={car.newCar}
          km={car.km}
        />
      ))}
      <hr />
      {/* Fragment */}
      <Fragment propFragment="Teste" />
      {/* Children Component */}
      <Container myValue="testing">
        <p>E este é o parágrafo!</p>
      </Container>
      <hr />
      {/* Executar Função */}
      <ExecuteFunction myFunction={showMessage} />
      <hr />
      {/* Statelift */}
      {/* Component para consumir o useState */}
      <Message msg={message} />
      {/* Component para executar o useState */}
      <ChangeMessageState handleMessage={handleMessage} />
      <hr />
      {/* Desafio - Challenge */}
      <h3>Cadastro de Usuários</h3>
      {people.map((user) => (
        <UserDetails
          key={user.id}
          name={user.name}
          age={user.age}
          work={user.work}
        />
      ))}
    </div>
  );
}

export default App;
