// CSS
import styles from "./Table.module.css";

// React Router
import { Link } from "react-router-dom";
import { useDeleteDocument } from "../../hooks/useDeleteDocument";

const Table = ({ data, columns, deleteDoc, page }) => {
  // Delete Client
  const { deleteDocument } = useDeleteDocument(deleteDoc);

  return (
    <div className={styles.table}>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            {columns.map((head) => (
              <th key={head.field}>{head.header}</th>
            ))}
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                {columns &&
                  columns.map((col) => (
                    <td key={col.field}>{row[col.field]}</td>
                  ))}
                <td>
                  <Link to={`/${page}/edit/${row.id}`}>
                    <button className="btn-table">Editar</button>
                  </Link>
                  <button
                    onClick={() => deleteDocument(row.id)}
                    className="btn-table btn-danger"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
