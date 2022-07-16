import CardRegistration from "../../components/Card/CardRegistration";

// CSS
import styles from "./RegisterSystem.module.css";

const RegisterSystem = () => {
  return (
    <div>
      <h1>Cadastro</h1>
      <div className={styles.registerSystem_container}>
        <CardRegistration
          title="Categoria"
          info="Cadastre a categoria clicando aqui"
          to="/registration/category"
        />
        <CardRegistration
          title="Cliente"
          info="Cadastre o cliente clicando aqui"
          to="/registration/clients"
        />
        <CardRegistration
          title="Forma de Pagamento"
          info="Cadastre a forma de pagamento clicando aqui"
          to="/registration/payment"
        />
      </div>
      <div className={styles.registerSystem_container}>
        <CardRegistration
          title="Fornecedor"
          info="Cadastre o fornecedor clicando aqui"
          to="/registration/provider"
        />
        <CardRegistration
          title="Financeiro"
          info="Cadastre a entrada e saída clicando aqui"
          to="/registration/financial"
        />
        <CardRegistration
          title="Status de Pagamento"
          info="Cadastre o status do pagamento clicando aqui"
          to="/registration/status_payment"
        />
      </div>
      <div className={styles.registerSystem_container}>
        <CardRegistration
          title="Tipo do Fornecedor"
          info="Cadastre o tipo do fornecedor clicando aqui"
          to="/registration/type_provider"
        />
        <CardRegistration
          title="Tipo de Obra"
          info="Cadastre o tipo de obra clicando aqui"
          to="/registration/type_construction"
        />
        <CardRegistration
          title="Obra"
          info="Cadastre a obra clicando aqui"
          to="/registration/construction"
        />
      </div>
    </div>
  );
};

export default RegisterSystem;
