const KEYS = "abcdefghijklmnopqrstuvwxyz".split("")

export default function Keyboard({ guessedLetters, wordToGuess, onGuess, disabled }) {
  return (
    <div className="keyboard">
      {KEYS.map(key => {
        const isGuessed = guessedLetters.includes(key)
        const isCorrect = wordToGuess.includes(key)
        return (
          <button
            key={key}
            className={`key ${isGuessed ? (isCorrect ? "correct" : "wrong") : ""}`}
            onClick={() => onGuess(key)}
            disabled={isGuessed || disabled}
          >
            {key}
          </button>
        )
      })}
    </div>
  )
}
