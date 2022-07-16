import React from "react";
import styles from "../EditEntryAndLeave/EditEntryAndLeave.module.css"

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
import Radio from "../../../form/Radio";

const EditEntryAndLeave = () => {
  // Id - Identificação
  const itemid = uuidv4();

  const { id } = useParams();

  const { document: financial } = useFetchDocument("financial", id);

  const [date, setDate] = useState(""); // Data
  const [provider, setProvider] = useState(""); // Fornecedor
  const [value, setValue] = useState(); // Valor - R$
  const [categories, setCategories] = useState(""); // Saída ou Entrada
  const [origem, setOrigem] = useState(""); // Obra ou Escritório
  const [construction, setConstruction] = useState(""); // Informar Obra
  const [payment, setPayment] = useState(""); // Forma de pagamento (Débito, Pix, Transferência, Dinheiro, Crédito)
  const [status, setStatus] = useState(""); // Status do pagamento (Pago ou A Pagar)
  const [control, setControl] = useState(""); // Descrição do controle
  const [obs, setObs] = useState(""); // Observação do serviço

  // Authenticate User - Autenticar o Usuário
  const { user } = useAuthValue();

  useEffect(() => {
    if (financial) {
      setDate(financial.date);
      setProvider(financial.provider);
      setValue(financial.value);
      setCategories(financial.categories);
      setOrigem(financial.origem);
      setConstruction(financial.construction);
      setPayment(financial.payment);
      setStatus(financial.status);
      setControl(financial.control);
      setObs(financial.obs);
    }
  }, [financial]);

  // useNavigate
  const navigate = useNavigate();

  const { updateDocument, response } = useUpdateDocument("financial");
  const { documents: fetchCategory } = useFetchDocuments("category");
  const { documents: fetchConstruction } = useFetchDocuments("construction");
  const { documents: fetchPayment } = useFetchDocuments("payment");
  const { documents: fetchStatusPayment } = useFetchDocuments("status_payment");
  const { documents: fetchProvider } = useFetchDocuments("providers");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      date,
      provider,
      value,
      categories,
      origem,
      construction,
      payment,
      status,
      control,
      obs,
      itemid: itemid,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    // redirect to constructions
    navigate("/entry_and_leave");
  };

  return (
    <div>
      {financial && (
        <>
          <h3>{financial.name}</h3>
          <p>Altere os dados do cliente preenchendo o formulário abaixo</p>
          <form onSubmit={handleSubmit}>
            <Input
              text="Data*"
              type="date"
              name="date"
              required="required"
              value={date ? date : ""}
              handleOnChange={(e) => setDate(e.target.value)}
            />
            <Select
              name="provider"
              text="Fornecedor*"
              options={fetchProvider}
              handleOnChange={(e) =>
                setProvider(e.target.options[e.target.selectedIndex].text)
              }
            />
            <Input
              text="Valor*"
              type="number"
              name="value"
              placeholder="R$ 00,00"
              required="required"
              min="0"
              value={value ? value : ""}
              handleOnChange={(e) => setValue(e.target.value)}
            />
            <Select
              name="category"
              text="Categoria*"
              options={fetchCategory}
              handleOnChange={(e) =>
                setCategories(e.target.options[e.target.selectedIndex].text)
              }
            />
            <label>Origem*</label>
            <div className={styles.origem}>
              <Radio
                name="origem"
                type="radio"
                text="Obra"
                value="Obra"
                handleOnChange={(e) => setOrigem(e.target.value)}
              />
              <Radio
                name="origem"
                type="radio"
                text="Escritório"
                value="Escritório"
                handleOnChange={(e) => setOrigem(e.target.value)}
              />
            </div>
            {origem === "Obra" && (
              <Select
                name="construction"
                text="Obra*"
                options={fetchConstruction}
                handleOnChange={(e) =>
                  setConstruction(e.target.options[e.target.selectedIndex].text)
                }
              />
            )}
            <Select
              name="payment"
              text="Forma de Pagamento*"
              options={fetchPayment}
              handleOnChange={(e) =>
                setPayment(e.target.options[e.target.selectedIndex].text)
              }
            />
            <Select
              name="status_payment"
              text="Status do Pagamento*"
              options={fetchStatusPayment}
              handleOnChange={(e) =>
                setStatus(e.target.options[e.target.selectedIndex].text)
              }
            />
            <Input
              text="Controle*"
              type="text"
              name="control"
              placeholder="Insira o controle"
              required="required"
              value={control ? control : ""}
              handleOnChange={(e) => setControl(e.target.value)}
            />
            <Input
              text="Observação"
              type="text"
              name="observation"
              placeholder="Insira a observação"
              value={obs ? obs : ""}
              handleOnChange={(e) => setObs(e.target.value)}
            />
            {!response.loading && <button className="btn">Salvar</button>}
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

export default EditEntryAndLeave;
