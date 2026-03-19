const HEAD      = <circle key="head"       cx="200" cy="70"  r="25"  stroke="white" strokeWidth="4" fill="none" />
const BODY      = <line   key="body"       x1="200" y1="95"  x2="200" y2="185" stroke="white" strokeWidth="4" />
const LEFT_ARM  = <line   key="left-arm"   x1="200" y1="125" x2="155" y2="160" stroke="white" strokeWidth="4" />
const RIGHT_ARM = <line   key="right-arm"  x1="200" y1="125" x2="245" y2="160" stroke="white" strokeWidth="4" />
const LEFT_LEG  = <line   key="left-leg"   x1="200" y1="185" x2="155" y2="230" stroke="white" strokeWidth="4" />
const RIGHT_LEG = <line   key="right-leg"  x1="200" y1="185" x2="245" y2="230" stroke="white" strokeWidth="4" />

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]

export default function HangmanDrawing({ numberOfGuesses }) {
  return (
    <svg height="260" width="400" aria-label={`Hangman: ${numberOfGuesses} of 6 wrong guesses`}>
      {/* Gallows */}
      <line x1="60"  y1="250" x2="340" y2="250" stroke="white" strokeWidth="4" />
      <line x1="120" y1="250" x2="120" y2="20"  stroke="white" strokeWidth="4" />
      <line x1="120" y1="20"  x2="200" y2="20"  stroke="white" strokeWidth="4" />
      <line x1="200" y1="20"  x2="200" y2="45"  stroke="white" strokeWidth="4" />
      {/* Body parts revealed one per wrong guess */}
      {BODY_PARTS.slice(0, numberOfGuesses)}
    </svg>
  )
}
