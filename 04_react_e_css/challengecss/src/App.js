// Styles
import "./App.css";

// Components
import CarDetails from "./components/CarDetails";

function App() {
  const cars = [
    { id: 1, brand: "Ford", name: "F250", color: "Branca", type: "Caminhonete" },
    { id: 2, brand: "Fiat", name: "Pulse", color: "Preto", type: "SUV" },
    { id: 3, brand: "Peugeot", name: "208", color: "Branca", type: "Hatch" },
    { id: 4, brand: "Mini", name: "Countryman", color: "Grafite", type: "SUV" },
    { id: 5, brand: "Toyota", name: "Corolla", color: "Chumbo", type: "Sedan" },
  ];

  return (
    <div className="App">
      <h1 className={"title"}>Detalhes de Carros</h1>
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          name={car.name}
          color={car.color}
          type={car.type}
        />
      ))}
    </div>
  );
}

export default App;
