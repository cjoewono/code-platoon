import { useState } from 'react'
import './App.css'
import onSVG from './on.svg'
import offSVG from './off.svg'

function App() {

  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  return (
    <>
        <h1>Mute Button</h1>
      <div id='SVG'>
        <img 
        src={isMuted ? offSVG : onSVG}
        onClick ={toggleMute}
        style={{cursor : 'pointer'}}
        />
      </div>

    </>
  )
}

export default App
