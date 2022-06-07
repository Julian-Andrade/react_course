import "./App.css";

// React
import { useState, useEffect } from "react";

// Custom Hook
import { useFetch } from "./hook/useFetch";

// Local to rescue
const url = "http://localhost:3000/products";

function App() {
  // Save the files
  // const [products, setProducts] = useState([]);

  // 4 - Import custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);
  // console.log(data);

  // Add new products
  const [name, setName] = useState(``);
  const [price, setPrice] = useState(``);

  // // 1 - Rescuing data
  // useEffect(() => {
  //   async function fetchData() {
  //     // Search data
  //     const res = await fetch(url);
  //     // Transform data in JavaScript Archive
  //     const data = await res.json();
  //     // Set data to setProducts for use
  //     setProducts(data);
  //   }
  //   fetchData();
  // }, []);

  // 2 - Add products
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };

    // const res = await fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // // 3 - Dynamic loading
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - Refactoring post
    httpConfig(product, "POST");

    // 4 - Set states empty
    setName(``);
    setPrice(``);
  };

  // * - Function remove product
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* 6 - Loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - Preço: R$ {product.price}
                <button onClick={() => handleRemove(product.id)}>
                  Remover
                </button>
              </li>
            ))}
        </ul>
      )}
      <div className="add_product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              min="1"
            />
          </label>
          {/* 7 - State loading at post */}
          {loading && <input type="submit" disabled value="Aguarde!" />}
          {!loading && <input type="submit" value="Enviar" />}
        </form>
      </div>
    </div>
  );
}

export default App;
