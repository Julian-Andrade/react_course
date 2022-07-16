import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

// uuid
import { v4 as uuidv4 } from "uuid";

// Form
import Input from "../../form/Input";

const Payment = () => {
  // Id - Identificação
  const id = uuidv4();

  // States - Estados
  const [name, setName] = useState(""); // Saída ou Entrada

  // Authenticate User - Autenticar o Usuário
  const { user } = useAuthValue();

  // useNavigate
  const navigate = useNavigate();

  // Broken Objects - Quebra de Objetos
  const { insertDocument, response } = useInsertDocument("type_construction");

  // Function Submit Form - Função de Envio do Formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");

    // Insert Files Inside Database - Inserir Arquivos no Database
    insertDocument({
      name,
      id: id,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // Refresh Page - Recarregar a Página
    navigate("/registration/type_construction");
  };

  return (
    <div>
      <h2>Tipo de Obra</h2>
      <p>Cadastre o tipo de obra preenchendo o formulário abaixo.</p>
      <p>Exemplo - (Construção, Reforma)</p>
      <form onSubmit={handleSubmit}>
        {/* Register Input - Input de Registro */}
        <Input
          type="text"
          name="type_construction"
          text="Tipo de Obra"
          placeholder="Insira o tipo de obra"
          value={name}
          required="required"
          handleOnChange={(e) => setName(e.target.value)}
        />
        {/* Error Form - Erro no Formulário */}
        {!response.loading && <button className="btn">Cadastrar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  );
};

export default Payment;
