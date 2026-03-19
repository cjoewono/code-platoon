import { useState } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

function App() {

  const [team, setTeam] = useState([])

  const catchPokemon = (data) => {
    if (team.length >= 6) return
    if (team.find(p => p.id === data.id)) return
    setTeam([...team, data])
  }
   
  const releasePokemon = (id) => {
    setTeam(
      team.filter((pokemon) => (pokemon.id !== id))
    )
  }

  const getPokemonData = async (idOrName, func) => {
    let requestURL = `https://pokeapi.co/api/v2/pokemon/${idOrName}`
    try {
      let response = await axios.get(requestURL)
      let data = response.data
      func(data)
    } catch(err) {
      console.error(err)
      func(null)
    }
  }

  return (
    <>
      <Navbar team={team} getPokemonData={getPokemonData} />
      <Outlet context = {{
        team,
        catchPokemon,
        releasePokemon,
        getPokemonData
      }}/>
    </>
  )
}

export default App
