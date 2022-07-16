import React from "react";

// Hooks
import { useEffect, useState } from "react";
import { useUpdateDocument } from "../../../hooks/useUpdateDocument";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../../context/AuthContext";
import { useFetchDocument } from "../../../hooks/useFetchDocument";

// uuid
import { v4 as uuidv4 } from "uuid";

// Form
import Input from "../../../form/Input";

const EditClient = () => {
  // Id - Identificação
  const itemid = uuidv4();

  const { id } = useParams();

  const { document: clients } = useFetchDocument("clients", id);

  // States - Estados
  const [name, setName] = useState(""); // Nome do Fornecedor
  const [birthday, setBirthday] = useState(""); //
  const [doc, setDoc] = useState(""); // Documento - CPF, CNPJ
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

  // Authenticate User - Autenticar o Usuário
  const { user } = useAuthValue();

  useEffect(() => {
    if (clients) {
      setName(clients.name);
      setBirthday(clients.birthday);
      setDoc(clients.doc);
      setTelephone(clients.telephone);
      setEmail(clients.email);
      setCep(clients.cep);
      setStreet(clients.street);
      setNumber(clients.number);
      setComplement(clients.complement);
      setDistrict(clients.district);
      setState(clients.state);
      setCity(clients.city);
    }
  }, [clients]);

  // useNavigate
  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("clients");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name,
      birthday,
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
      itemid: itemid,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    // redirect to clients
    navigate("/clients");
  };

  return (
    <div>
      {clients && (
        <>
          <h3>{clients.name}</h3>
          <p>Altere os dados do cliente preenchendo o formulário abaixo</p>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              value={name}
              name="name"
              text="Nome*"
              required="required"
              placeholder="Insira o nome"
              handleOnChange={(e) => setName(e.target.value)}
            />
            {doc.length <= 14 && (
              <Input
                type="date"
                value={birthday ? birthday : ""}
                name="birthday"
                text="Data de Nascimento"
                handleOnChange={(e) => setBirthday(e.target.value)}
              />
            )}
            <Input
              type="text"
              value={doc}
              name="document"
              text={doc.length <= 14 ? "CPF*" : "CNPJ*"}
              required="required"
              placeholder={doc.length <= 14 ? "insira o CPF" : "insira o CNPJ*"}
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
            {!response.loading && <button className="btn">Editar</button>}
            {response.loading && (
              <button className="btn" disabled>
                Aguarde...
              </button>
            )}
            {response.error && <p className="error">{response.error}</p>}
          </form>
        </>
      )}
    </div>
  );
};

export default EditClient;
