// CSS
import styles from "./About.module.css";

// React Router Dom
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sistema Financeiro</h1>
      <p>
        Este projeto consiste em um <span>Sistema Financeiro</span> criado em
        React no front-end e utilizando o Google Firebase para o back-end.
      </p>
      <Link to="/" className="btn">
        Home
      </Link>
    </div>
  );
};

export default About;
