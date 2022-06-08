import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

const Search = () => {
  const [searchParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + searchParams;

  const { data: items, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados Encontrados</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 4 - Rota Dinâmica / Dynamic Route */}
              <Link to={`/product/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Search;
