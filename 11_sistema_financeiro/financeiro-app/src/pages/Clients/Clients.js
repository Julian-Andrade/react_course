import styles from "../Clients/Clients.module.css";

// Table
import Table from "../../components/Table/Table";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";

const Clients = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // Clients
  const { documents: clients, loading } = useFetchDocuments(
    "clients",
    null,
    uid
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  const columns = [
    { field: "name", header: "Nome/Razão Social" },
    { field: "doc", header: "CPF/CNPJ" },
    { field: "telephone", header: "Telefone" },
    { field: "email", header: "E-mail" },
  ];

  return (
    <div className={styles.table_container}>
      <h1>Clientes</h1>
      <p>Gerencie os seus clientes</p>
      <Table data={clients} columns={columns} deleteDoc="clients" page={"clients"} />
    </div>
  );
};

export default Clients;
