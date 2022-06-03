import styles from "./GameScreen.module.css";

const GameScreen = ({startGame}) => {
  return (
    <div className={styles.GameScreenGeral}>
      <h1>Million Word</h1>
      <p>Clique no botão para iniciar o jogo</p>
      <button onClick={startGame}>
          <span className={"button_top"}>Começar</span>
      </button>
    </div>
  );
};

export default GameScreen;
