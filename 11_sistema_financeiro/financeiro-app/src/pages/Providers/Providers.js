import styles from "../Providers/Providers.module.css";

// Table
import Table from "../../components/Table/Table";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";

const Providers = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // Clients
  const { documents: providers, loading } = useFetchDocuments(
    "providers",
    null,
    uid
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  const columns = [
    { field: "name", header: "Nome/Razão Social" },
    { field: "typeProvider", header: "Tipo" },
    { field: "doc", header: "CPF/CNPJ" },
    { field: "telephone", header: "Telefone" },
    { field: "email", header: "E-mail" },
  ];

  return (
    <div className={styles.table_container}>
      <h1>Fornecedores</h1>
      <p>Gerencie os seus fornecedores</p>
      <Table data={providers} columns={columns} deleteDoc="providers" page="providers"/>
    </div>
  );
};

export default Providers;
