import React from "react";

// Hooks
import { useEffect, useState } from "react";
import { useUpdateDocument } from "../../../hooks/useUpdateDocument";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useFetchDocument } from "../../../hooks/useFetchDocument";
import { useFetchDocuments } from "../../../hooks/useFetchDocuments";

// uuid
import { v4 as uuidv4 } from "uuid";

// Form
import Input from "../../../form/Input";
import Select from "../../../form/Select";

const EditConstructions = () => {
  // Id - Identificação
  const itemid = uuidv4();

  const { id } = useParams();

  const { document: construction } = useFetchDocument("construction", id);

  // States - Estados
  const [name, setName] = useState(""); // Saída ou Entrada
  const [cod, setCod] = useState(""); // Código
  const [type, setType] = useState(""); // Saída ou Entrada
  const [clients, setClients] = useState(""); // Cliente
  const [begin, setBegin] = useState(""); // Data de início da obra
  const [final, setFinal] = useState(""); // Data de término da obra
  const [budget, setBudget] = useState(); // Valor de orçamento para realizar a obra

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

  useEffect(() => {
    if (construction) {
      setName(construction.name);
      setCod(construction.cod);
      setType(construction.type);
      setClients(construction.clients);
      setBegin(construction.begin);
      setFinal(construction.final);
      setBudget(construction.budget);
      setCep(construction.cep);
      setStreet(construction.street);
      setNumber(construction.number);
      setComplement(construction.complement);
      setDistrict(construction.district);
      setState(construction.state);
      setCity(construction.city);
    }
  }, [construction]);

  // useNavigate
  const navigate = useNavigate();

  // Date
  let dateBegin = new Date(begin);
  let dateFinal = new Date(final);
  let dateDifference = Math.abs(dateFinal - dateBegin);
  const daysDifference = dateDifference / (1000 * 3600 * 24);

  const { updateDocument, response } = useUpdateDocument("construction");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
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
      itemid: itemid,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    // redirect to constructions
    navigate("/constructions");
  };

  return (
    <div>
      {construction && (
        <>
          <h3>{construction.name}</h3>
          <p>Altere os dados do cliente preenchendo o formulário abaixo</p>
          <form onSubmit={handleSubmit}>
            {/* Register Input - Input de Registro */}
            <Input
              type="text"
              name="construction"
              text="Obra*"
              placeholder="Insira o nome da obra"
              value={name}
              required="required"
              handleOnChange={(e) => setName(e.target.value)}
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
              value={budget || ""}
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
        </>
      )}
    </div>
  );
};

export default EditConstructions;
