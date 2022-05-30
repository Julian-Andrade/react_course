const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
      <h2>Detalhes do Carro:</h2>
      <ul>
        <li>Marca: {brand}</li>
        <li>KM: {km}</li>
        <li>Cor: {color}</li>
      </ul>
      {newCar === true ? <p>"Carro Novo"</p> : <p>"Carro Semi-novo"</p>}
    </div>
  );
};

export default CarDetails;
