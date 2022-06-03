// Css
import "./App.css";
// Components
import GameScreen from "./components/GameScreen";
import Game from "./components/Game";
import End from "./components/End";
// React
import { useCallback, useEffect, useState } from "react";
// Words
import { wordsList } from "./data/words";

// Stages of application
const stages = [
  { id: 1, name: "loading" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

const guessesQuantity = 3;

function App() {
  // Set of game stage, always begin at 'loading' stage
  const [gameStage, setGameStage] = useState(stages[0].name);
  // Import of word list
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState(``);
  const [pickedCategory, setPickedCategory] = useState(``);
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQuantity);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    // Pick a random category
    const categories = Object.keys(words);

    // Picked a random word inside an object category with your max size
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    // Pick a random word
    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    // Return value of word and category
    return { word, category };
  }, [words]);

  // Start the million word game!
  const startGame = useCallback(() => {
    // clear all letters
    clearLetterStates();
    // pick word and category
    const { word, category } = pickWordAndCategory();
    // create an array of letters
    let wordLetters = word.split(``);
    // return all letters a lowercase
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());
    // fill states
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    // console.log(word, category);
    // console.log(wordLetters);

    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  // Process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      // decrease the number of attempts
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  // Clear states of letters
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // Monitors the amount of attempts and change stage to finish the game
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();
      setGameStage(stages[2].name);
    } else if (guesses <= 1) {
      alert(`Cuidado, você possui apenas uma tentativa!`)
    }
  }, [guesses]);

  // Check win condition
  useEffect(() => {
    // array of unique letters
    const uniqueLetters = [...new Set(letters)];
    // win condition
    if (guessedLetters.length === uniqueLetters.length) {
      // add score
      setScore((actualScore) => (actualScore += 100));
      // restart game, with new word
      startGame();
    }
    // console.log(uniqueLetters);
  }, [guessedLetters, letters, startGame]);

  // Restart the game
  const retryGame = () => {
    setScore(0);
    setGuesses(guessesQuantity);
    setGameStage(stages[0].name);
  };

  return (
    <div className="App">
      {gameStage === `loading` && <GameScreen startGame={startGame} />}
      {gameStage === `game` && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === `end` && <End retryGame={retryGame} score={score} />}
    </div>
  );
}

export default App;
