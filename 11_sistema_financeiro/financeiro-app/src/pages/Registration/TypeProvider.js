import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

// uuid
import { v4 as uuidv4 } from "uuid";

// Form
import Input from "../../form/Input";

const TypeProvider = () => {
  // Id - Identificação
  const id = uuidv4();

  // States - Estados
  const [name, setName] = useState(""); // Saída ou Entrada

  // Authenticate User - Autenticar o Usuário
  const { user } = useAuthValue();

  // useNavigate
  const navigate = useNavigate();

  // Broken Objects - Quebra de Objetos
  const { insertDocument, response } = useInsertDocument("type_provider");

  // Function Submit Form - Função de Envio do Formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");

    // Insert Files Inside Database - Inserir Arquivos no Database
    insertDocument({
      name,
      itemid: id,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // Refresh Page - Recarregar a Página
    navigate("/registration/type_provider");
  };

  return (
    <div>
      <h2>Tipo de Fornecedor</h2>
      <p>Cadastre o tipo de fornecedor preenchendo o formulário abaixo</p>
      <p>Exemplo - (Material, Serviço)</p>
      <form onSubmit={handleSubmit}>
        {/* Register Input - Input de Registro */}
        <Input
          type="text"
          name="typeProvider"
          text="Tipo de Fornecedor"
          placeholder="Insira o tipo do fornecedor"
          value={name}
          required="required"
          handleOnChange={(e) => setName(e.target.value)}
        />
        {/* Error Form - Erro no Formulário */}
        {!response.loading && <button className="btn">Salvar</button>}
        {response.loading && (
          <button className="btn" disabled>
            Aguarde...
          </button>
        )}
      </form>
    </div>
  );
};

export default TypeProvider;
