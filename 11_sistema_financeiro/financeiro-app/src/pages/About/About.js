// CSS
import styles from "./About.module.css";

// React Router Dom
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o Sistema <span>Financeiro</span>
      </h2>
      <p>
        Este projeto consiste em um <span>Sistema Financeiro</span> criado em React
        no front-end e utilizando o Google Firebase para o back-end.
      </p>
      <Link to="/create/entry" className="btn">
        Sistema
      </Link>
    </div>
  );
};

export default About;
