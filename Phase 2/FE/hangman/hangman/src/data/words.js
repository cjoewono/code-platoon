const words = [
  "javascript", "python", "hangman", "programming", "developer",
  "component", "function", "variable", "framework", "algorithm",
  "database", "frontend", "backend", "fullstack", "keyboard",
  "portfolio", "interface", "software", "terminal", "repository",
  "deployment", "container", "migration", "serializer", "middleware",
  "authentication", "encryption", "abstraction", "inheritance", "polymorphism",
  "refactor", "iterator", "generator", "recursion", "callback",
  "promise", "asynchronous", "synchronous", "debugging", "compiler",
]

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}
