import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hook/useFetch";

const Product = () => {
  // 4 - Rota Dinâmica / Dynamic Route
  const { id } = useParams();

  // 5 - Carregamento Individual de Dados / Loading Individual Data
  const url = "http://localhost:3000/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>Id do Produto: {id}</p>
      {error && <p>Ocorreu um erro ao carregar os dados!</p>}
      {loading && <p>Obtendo os dados...</p>}
      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R$ {product.price}</p>
          {/* 6 - Nested Route */}
          <Link to={`/product/${product.id}/info`}>Mais Informações...</Link>
        </div>
      )}
    </>
  );
};

export default Product;
