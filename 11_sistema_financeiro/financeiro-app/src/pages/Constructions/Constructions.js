import styles from "../Constructions/Constructions.module.css";

// Table
import Table from "../../components/Table/Table";

// Hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useAuthValue } from "../../context/AuthContext";

const Constructions = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // Constructions
  const { documents: construction, loading } = useFetchDocuments(
    "construction",
    null,
    uid
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  const columns = [
    { field: "cod", header: "Código" },
    { field: "nameConstruction", header: "Nome da Obra" },
    { field: "type", header: "Tipo da Obra" },
    { field: "begin", header: "Início" },
    { field: "final", header: "Término" },
    { field: "difference", header: "Dias" },
    { field: "budget", header: "Orçamento" },
  ];

  return (
    <div className={styles.table_container}>
      <h1>Obras</h1>
      <p>Gerencie suas obras</p>
      <Table data={construction} columns={columns} deleteDoc="construction" page="constructions"/>
    </div>
  );
};

export default Constructions;
