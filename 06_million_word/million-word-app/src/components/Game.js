// CSS
import styles from "./Game.module.css";
// React
import { useState, useRef } from "react";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  // Set state of letter inside input
  const [letter, setLetter] = useState(``);
  // Ref to input return
  const letterInputRef = useRef(null);
  // Submit form, verify letter, erase letter and return to input
  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(letter);
    setLetter(``);
    letterInputRef.current.focus();
  };

  return (
    <div className={styles.game}>
      <h1>Million Word</h1>
      <p className={styles.tip}>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </p>
      <p className={styles.points}>
        Pontuação:
        <span> {score}</span>
      </p>
      <p className={styles.points}>
        Você ainda possui <span>{guesses}</span> tentativa(s).
      </p>
      <div className={styles.wordContainer}>
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span key={i} className={styles.letter}>
              {letter}
            </span>
          ) : (
            <span key={i} className={styles.blankSquare}></span>
          )
        )}
      </div>
      <div className={styles.letterContainer}>
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="text"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>
            <span className="button_top">Jogar</span>
          </button>
        </form>
      </div>
      <div className={styles.wrongLettersContainer}>
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
};

export default Game;
