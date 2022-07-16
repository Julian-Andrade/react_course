import styles from "./Provider.module.css";

import { useState } from "react";
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// uuid
import { v4 as uuidv4 } from "uuid";

// Form
import Input from "../../form/Input";
import Select from "../../form/Select";

const Provider = () => {
  // Id - Identificação
  const id = uuidv4();

  // States - Estados
  const [name, setName] = useState(""); // Nome do Fornecedor
  const [typeProvider, setTypeProvider] = useState(""); // Tipo do Fornecedor, Produto ou Serviço
  const [doc, setDoc] = useState(""); // Documento
  const [telephone, setTelephone] = useState(""); // Telefone
  const [email, setEmail] = useState(""); // Email

  // States - Endereço
  const [cep, setCep] = useState(""); // CEP
  const [street, setStreet] = useState(""); // Rua
  const [number, setNumber] = useState(""); // Número
  const [complement, setComplement] = useState(""); // Complemento
  const [district, setDistrict] = useState(""); // Bairro
  const [state, setState] = useState(""); // Estado
  const [city, setCity] = useState(""); // Cidade

  // Show PJ and PF Form
  const [showPjForm, setShowPjForm] = useState(false);

  // Authenticate User - Autenticar o Usuário
  const { user } = useAuthValue();

  // useNavigate
  const navigate = useNavigate();

  // Type Provider
  const { documents: fetchTypeProvider } = useFetchDocuments("type_provider");

  // Broken Objects - Quebra de Objetos
  const { insertDocument, response } = useInsertDocument("providers");

  // Execute showPjForm or showPfForm
  function toggleShowPjForm() {
    setShowPjForm(!showPjForm);
  }

  // Function Submit Form - Função de Envio do Formulário
  const handleSubmitPjForm = (e) => {
    e.preventDefault();

    // Insert Files Inside Database - Inserir Arquivos no Database
    insertDocument({
      name,
      typeProvider,
      doc,
      telephone,
      email,
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

  const handleSubmitPfForm = (e) => {
    e.preventDefault();

    // Insert Files Inside Database - Inserir Arquivos no Database
    insertDocument({
      name,
      typeProvider,
      doc,
      telephone,
      email,
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
    <div className={styles.container_provider}>
      <h2>Fornecedor</h2>
      <p>Cadastre o fornecedor preenchendo o formulário abaixo.</p>
      <div className={styles.button_provider}>
        <button className="btn" onClick={toggleShowPjForm}>
          {!showPjForm ? "Pessoa Física" : "Pessoa Jurídica"}
        </button>
      </div>
      {/* Register Input - Input de Registro */}
      {!showPjForm ? (
        <form onSubmit={handleSubmitPjForm}>
          <h3>Dados Cadastrais</h3>
          <Input
            type="text"
            value={name}
            name="name"
            text="Nome*"
            required="required"
            placeholder="Insira o nome"
            handleOnChange={(e) => setName(e.target.value)}
          />
          <Select
            name="typeProvider"
            text="Tipo de Fornecedor*"
            options={fetchTypeProvider}
            handleOnChange={(e) =>
              setTypeProvider(e.target.options[e.target.selectedIndex].text)
            }
          />
          <Input
            type="text"
            value={doc}
            name="cnpj"
            text="CNPJ*"
            required="required"
            placeholder="Insira o CNPJ"
            handleOnChange={(e) => setDoc(e.target.value)}
          />
          <Input
            type="text"
            value={telephone}
            name="telephone"
            text="Telefone"
            placeholder="Insira o telefone"
            handleOnChange={(e) => setTelephone(e.target.value)}
          />
          <Input
            type="text"
            value={email}
            name="email"
            text="E-mail"
            placeholder="Insira o e-mail"
            handleOnChange={(e) => setEmail(e.target.value)}
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
      ) : (
        <form onSubmit={handleSubmitPfForm}>
          <h3>Dados Cadastrais</h3>
          <Input
            type="text"
            value={name}
            name="name"
            text="Nome*"
            required="required"
            placeholder="Insira o nome"
            handleOnChange={(e) => setName(e.target.value)}
          />
          <Select
            name="typeProvider"
            text="Tipo de Fornecedor*"
            options={fetchTypeProvider}
            handleOnChange={(e) =>
              setTypeProvider(e.target.options[e.target.selectedIndex].text)
            }
          />
          <Input
            type="text"
            value={doc}
            name="cpf"
            text="CPF*"
            required="required"
            placeholder="Insira o CPF"
            handleOnChange={(e) => setDoc(e.target.value)}
          />
          <Input
            type="text"
            value={telephone}
            name="telephone"
            text="Telefone"
            placeholder="Insira o telefone"
            handleOnChange={(e) => setTelephone(e.target.value)}
          />
          <Input
            type="text"
            value={email}
            name="email"
            text="E-mail"
            placeholder="Insira o e-mail"
            handleOnChange={(e) => setEmail(e.target.value)}
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
      )}
    </div>
  );
};

export default Provider;
