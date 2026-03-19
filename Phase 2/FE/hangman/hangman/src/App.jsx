import { useState, useEffect, useCallback } from 'react'
import './App.css'
import HangmanDrawing from './components/HangmanDrawing'
import Puzzle from './components/puzzle'
import Keyboard from './components/guessedLetter'
import { getRandomWord } from './data/words'

function App() {
  const [wordToGuess, setWordToGuess] = useState(getRandomWord)
  const [guessedLetters, setGuessedLetters] = useState([])

  const wrongGuesses = guessedLetters.filter(letter => !wordToGuess.includes(letter))
  const isWinner = wordToGuess.split("").every(letter => guessedLetters.includes(letter))
  const isLoser = wrongGuesses.length >= 6

  const handleGuess = useCallback((letter) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser) return
    setGuessedLetters(prev => [...prev, letter])
  }, [guessedLetters, isWinner, isLoser])

  useEffect(() => {
    const handler = (e) => {
      const key = e.key.toLowerCase()
      if (!key.match(/^[a-z]$/)) return
      handleGuess(key)
    }
    document.addEventListener("keypress", handler)
    return () => document.removeEventListener("keypress", handler)
  }, [handleGuess])

  const newGame = () => {
    setWordToGuess(getRandomWord())
    setGuessedLetters([])
  }

  return (
    <div className="game">
      <h1>Hangman</h1>

      {isWinner && <div className="status win">You Win! 🎉 The word was: <strong>{wordToGuess}</strong></div>}
      {isLoser  && <div className="status lose">You Lose! The word was: <strong>{wordToGuess}</strong></div>}

      <HangmanDrawing numberOfGuesses={wrongGuesses.length} />

      <p className="wrong-count">Wrong Guesses: {wrongGuesses.length} / 6</p>

      <Puzzle
        wordToGuess={wordToGuess}
        guessedLetters={guessedLetters}
        reveal={isLoser}
      />

      <Keyboard
        guessedLetters={guessedLetters}
        wordToGuess={wordToGuess}
        onGuess={handleGuess}
        disabled={isWinner || isLoser}
      />

      {(isWinner || isLoser) && (
        <button className="new-game-btn" onClick={newGame}>New Game</button>
      )}
    </div>
  )
}

export default App
