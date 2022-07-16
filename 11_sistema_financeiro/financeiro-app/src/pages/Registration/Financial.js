import styles from "./Financial.module.css";

// State
import { useState } from "react";

// Hooks
import { useInsertDocument } from "../../hooks/useInsertDocument";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";

// React Router
import { useNavigate } from "react-router-dom";

// Context
import { useAuthValue } from "../../context/AuthContext";

// uuid
import { v4 as uuidv4 } from "uuid";

// Components
import Select from "../../form/Select";
import Radio from "../../form/Radio";
import Input from "../../form/Input";

const Financial = () => {
  // States
  const [date, setDate] = useState(""); // Data
  const [provider, setProvider] = useState(""); // Fornecedor
  const [value, setValue] = useState(); // Valor - R$
  const [categories, setCategories] = useState(""); // Saída ou Entrada
  const [origem, setOrigem] = useState(false); // Obra ou Escritório
  const [construction, setConstruction] = useState(""); // Informar Obra
  const [payment, setPayment] = useState(""); // Forma de pagamento (Débito, Pix, Transferência, Dinheiro, Crédito)
  const [status, setStatus] = useState(""); // Status do pagamento (Pago ou A Pagar)
  const [control, setControl] = useState(""); // Descrição do controle
  const [obs, setObs] = useState(""); // Observação do serviço
  const [formError, setFormError] = useState(""); // Erro do formulário
  const [budget] = useState("");

  // Autenticação do usuário
  const { user } = useAuthValue();

  const navigate = useNavigate();

  const id = uuidv4();

  const { insertDocument, response } = useInsertDocument("financial");
  const { updateDocument } = useUpdateDocument("construction");
  const { documents: fetchCategory } = useFetchDocuments("category");
  const { documents: fetchPayment } = useFetchDocuments("payment");
  const { documents: fetchStatusPayment } = useFetchDocuments("status_payment");
  const { documents: fetchProvider } = useFetchDocuments("providers");
  const { documents: fetchConstruction } = useFetchDocuments("construction");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    if (formError) return;

    insertDocument({
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
      itemid: id,
      uid: user.uid,
      createdBy: user.displayName,
    });

    const data = {
      budget: parseFloat(budget) - parseFloat(value),
    };

    updateDocument(id, data);

    // Redirect for New Financial - Redirecionar para Novo Lançamento
    navigate("/dashboard");
  };

  return (
    <div className={styles.create_entry}>
      <h2>Financeiro</h2>
      <p>Controle de Entrada e Saída</p>
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
        {formError && <p className="error">{formError}</p>}
        {response.error && <p className="error">{response.error}</p>}
      </form>
    </div>
  );
};

export default Financial;
