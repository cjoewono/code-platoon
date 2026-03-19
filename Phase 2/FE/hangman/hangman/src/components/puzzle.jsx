export default function Puzzle({ wordToGuess, guessedLetters, reveal }) {
  return (
    <div className="puzzle">
      {wordToGuess.split("").map((letter, i) => (
        <span key={i} className="letter-box">
          <span className={`letter ${reveal || guessedLetters.includes(letter) ? "visible" : ""} ${reveal && !guessedLetters.includes(letter) ? "missed" : ""}`}>
            {letter}
          </span>
        </span>
      ))}
    </div>
  )
}