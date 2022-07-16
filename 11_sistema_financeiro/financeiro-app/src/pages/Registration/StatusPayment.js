import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

// Form
import Input from "../../form/Input";

// uuid
import { v4 as uuidv4 } from "uuid";

const StatusPayment = () => {
  // Id - Identificação
  const id = uuidv4();

  // States - Estados
  const [name, setName] = useState(""); // Saída ou Entrada

  // Authenticate User - Autenticar o Usuário
  const { user } = useAuthValue();

  // useNavigate
  const navigate = useNavigate();

  // Broken Objects - Quebra de Objetos
  const { insertDocument, response } = useInsertDocument("status_payment");

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
    navigate("/registration/status_payment");
  };

  return (
    <div>
      <h2>Status do Pagamento</h2>
      <p>Cadastre o status do pagamento preenchendo o formulário abaixo.</p>
      <p>Exemplo - (Pago, A Pagar)</p>
      <form onSubmit={handleSubmit}>
        {/* Register Input - Input de Registro */}
        <Input
          type="text"
          name="category"
          text="Status do Pagamento"
          placeholder="Insira o status de pagamento"
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

export default StatusPayment;
