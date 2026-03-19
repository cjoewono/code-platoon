import { useState } from 'react'
import './App.css'

function App() {
  const [word, setWord] = useState("")
  const [submittedWord, setSubmittedWord] = useState("")
  
  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmittedWord(word)
  }

  const vowelHighlight = (text) =>{
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    
  }

  return (
    <>
      <h1>React Vowel</h1>
      <div>
        <form onSubmit={()=>handleSubmit(event)}>
          <input
            type='text'
            placeholder='Provide your word'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h2>Submitted Word: {submittedWord} </h2>
      </div>
    </>
  )
}

export default App
