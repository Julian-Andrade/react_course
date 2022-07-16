// CSS
import styles from "../Dashboard/Dashboard.module.css";

// Components
import CardDashboard from "../../components/Card/CardDashboard";

// React Router
import { Link } from "react-router-dom";

// Hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  // Posts do usuário
  const { documents: financial, loading } = useFetchDocuments(
    "financial",
    null,
    uid
  );

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      <div className={styles.dashboard_container}>
        <CardDashboard
          title="Entrada"
          info="000,00"
          cardside="card_entry"
          cardtitle="h2_entry"
          cardinfo="h2_entry"
        />
        <CardDashboard
          title="Saída"
          info="000,00"
          cardside="card_leave"
          cardtitle="h2_leave"
          cardinfo="h2_leave"
        />
        <CardDashboard
          title="Balanço"
          info="000,00"
          cardside="card_balance"
          cardtitle="h2_balance"
          cardinfo="h2_balance"
        />
      </div>
      <h2>Quadro Financeiro</h2>
      {financial && financial.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados lançamentos financeiros</p>
          <Link to="/registration/financial" className="btn btn-outline">
            Financeiro
          </Link>
        </div>
      ) : (
        <>
          <div >
            <span>Obra</span>
            <span>Obra</span>
          </div>
          <div className={styles.post_row}>
            {financial &&
              financial.map((content) => <p>{content.construction}</p>)}
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
