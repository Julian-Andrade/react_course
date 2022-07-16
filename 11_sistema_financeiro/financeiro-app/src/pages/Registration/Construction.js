// React Router
import { useNavigate } from "react-router-dom";

// Hooks
import { useState } from "react";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// uuid
import { v4 as uuidv4 } from "uuid";

// Form
import Input from "../../form/Input";
import Select from "../../form/Select";

const Construction = () => {
  // Id - Identificação
  const id = uuidv4();

  // States - Estados
  const [nameConstruction, setNameConstruction] = useState(""); // Saída ou Entrada
  const [cod, setCod] = useState(""); // Código
  const [type, setType] = useState(""); // Saída ou Entrada
  const [clients, setClients] = useState(""); // Cliente
  const [begin, setBegin] = useState(""); // Data de início da obra
  const [final, setFinal] = useState(""); // Data de término da obra
  const [budget, setBudget] = useState(""); // Valor de orçamento para realizar a obra

  // States - Endereço
  const [cep, setCep] = useState(""); // CEP
  const [street, setStreet] = useState(""); // Rua
  const [number, setNumber] = useState(""); // Número
  const [complement, setComplement] = useState(""); // Complemento
  const [district, setDistrict] = useState(""); // Bairro
  const [state, setState] = useState(""); // Estado
  const [city, setCity] = useState(""); // Cidade

  // Authenticate User - Autenticar o Usuário
  const { user } = useAuthValue();

  // Type Provider
  const { documents: fetchClients } = useFetchDocuments("clients");
  const { documents: fetchTypeConstruction } =
    useFetchDocuments("type_construction");

  // useNavigate
  const navigate = useNavigate();

  // Broken Objects - Quebra de Objetos
  const { insertDocument, response } = useInsertDocument("construction");

  // Date
  let dateBegin = new Date(begin);
  let dateFinal = new Date(final);
  let dateDifference = Math.abs(dateFinal - dateBegin);
  const daysDifference = dateDifference / (1000 * 3600 * 24);

  // Function Submit Form - Função de Envio do Formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Insert Files Inside Database - Inserir Arquivos no Database
    insertDocument({
      name: `Obra ${cod} | ${nameConstruction}`,
      nameConstruction,
      cod,
      type,
      clients,
      begin,
      final,
      difference: daysDifference,
      budget,
      cep,
      street,
      number,
      complement,
      district,
      state,
      city,
      itemid: id,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // Refresh Page - Recarregar a Página
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Obra</h2>
      <p>Cadastre a obra preenchendo o formulário abaixo</p>
      <form onSubmit={handleSubmit}>
        {/* Register Input - Input de Registro */}
        <Input
          type="text"
          name="construction"
          text="Obra*"
          placeholder="Insira o nome da obra"
          value={nameConstruction}
          required="required"
          handleOnChange={(e) => setNameConstruction(e.target.value)}
        />
        <Input
          type="number"
          name="codigo"
          text="Código*"
          placeholder="Insira o código da obra"
          value={cod}
          min="0"
          required="required"
          handleOnChange={(e) => setCod(e.target.value)}
        />
        <Select
          name="type"
          text="Tipo da obra*"
          options={fetchTypeConstruction}
          handleOnChange={(e) =>
            setType(e.target.options[e.target.selectedIndex].text)
          }
        />
        <Select
          name="clientes"
          text="Cliente*"
          options={fetchClients}
          handleOnChange={(e) =>
            setClients(e.target.options[e.target.selectedIndex].text)
          }
        />
        <Input
          type="date"
          name="begin"
          text="Início da obra*"
          value={begin}
          required="required"
          handleOnChange={(e) => setBegin(e.target.value)}
        />
        <Input
          type="date"
          name="final"
          text="Conclusão da obra*"
          value={final}
          required="required"
          handleOnChange={(e) => setFinal(e.target.value)}
        />
        <Input
          type="number"
          name="budget"
          text="Valor da obra*"
          placeholder="R$ 0,00"
          value={budget}
          min="0"
          required="required"
          handleOnChange={(e) => setBudget(e.target.value)}
        />
        <h3>Endereço</h3>
        <Input
          type="text"
          value={cep}
          name="cep"
          text="CEP"
          placeholder="Insira o CEP"
          handleOnChange={(e) => setCep(e.target.value)}
        />
        <Input
          type="text"
          value={street}
          name="street"
          text="Rua"
          placeholder="Insira o nome da rua"
          handleOnChange={(e) => setStreet(e.target.value)}
        />
        <Input
          type="text"
          value={number}
          name="number"
          text="Número"
          placeholder="Insira o número"
          handleOnChange={(e) => setNumber(e.target.value)}
        />
        <Input
          type="text"
          value={complement}
          name="complement"
          text="Complemento"
          placeholder="Insira o complemento"
          handleOnChange={(e) => setComplement(e.target.value)}
        />
        <Input
          type="text"
          value={district}
          name="district"
          text="Bairro"
          placeholder="Insira o bairro"
          handleOnChange={(e) => setDistrict(e.target.value)}
        />
        <Input
          type="text"
          value={state}
          name="state"
          text="Estado"
          placeholder="Insira o estado"
          handleOnChange={(e) => setState(e.target.value)}
        />
        <Input
          type="text"
          value={city}
          name="city"
          text="Cidade"
          placeholder="Insira a cidade"
          handleOnChange={(e) => setCity(e.target.value)}
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

export default Construction;
