import styles from "./End.module.css";

const End = ({ retryGame, score }) => {
  return (
    <div className={styles.endGameGeral}>
      <h1>Fim do Jogo!</h1>
      <h2>A sua pontuação geral foi:</h2>
      <p>{score}</p>
      <h2>Parabéns!</h2>
      <button onClick={retryGame}>
        <span className={"button_top"}>Tentar Novamente</span>
      </button>
    </div>
  );
};

export default End;
