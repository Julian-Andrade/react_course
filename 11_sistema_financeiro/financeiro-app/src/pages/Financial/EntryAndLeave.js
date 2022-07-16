// CSS
import styles from "../Financial/EntryAndLeave";

// Components
import Table from "../../components/Table/Table";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";

const EntryAndLeave = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // Launch
  const { documents: financial, loading } = useFetchDocuments(
    "financial",
    null,
    uid
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  const columns = [
    { field: "date", header: "Data" },
    { field: "provider", header: "Fornecedor" },
    { field: "value", header: "Valor" },
    { field: "origem", header: "Destino" },
    { field: "categories", header: "Tipo" },
    { field: "document", header: "Documento" },
    { field: "construction", header: "Obra" },
    { field: "payment", header: "Pagamento" },
    { field: "status", header: "Situação" },
  ];

  return (
    <div>
      <h1>Financeiro</h1>
      <p>Gerencie as entradas e saídas</p>
      <div className={styles.table_dashboard}>
        <Table data={financial} columns={columns} deleteDoc="financial" page={"entry_and_leave"} />
      </div>
    </div>
  );
};

export default EntryAndLeave;
