import { useState } from 'react'
import './App.css'
import PokemonCardContainer from './components/PokemonCardContainer';
import UserForm from './components/UserForm';
import Banner from './components/Banner/Banner';

function App() {
  const [pokemonData, setPokemonData] = useState([])

  const addData = (data) => {
    if (pokemonData.some(p => p.id === data.id)) {
      alert(`${data.name} is already in your Pokédex!`)
      return
    }
    setPokemonData([...pokemonData, data])
  }

  const rmData = (id) => {
    setPokemonData(pokemonData.filter((pokemon) => pokemon.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-8">
        <div className="bg-red-600 rounded-3xl border-8 border-red-900 shadow-2xl p-6 max-w-2xl w-full">
            
            {/* Pokédex lights */}
            <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-400 rounded-full border-4 border-white shadow-lg"></div>
                <div className="w-4 h-4 bg-red-300 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-300 rounded-full"></div>
                <div className="w-4 h-4 bg-green-400 rounded-full"></div>
            </div>

            <div className="border-t-4 border-red-900 mb-4"></div>

            <div className="flex flex-col gap-4">
                <Banner />
                <PokemonCardContainer pokemons={pokemonData} rmData={rmData} />
                <UserForm addData={addData} />
            </div>

            {/* Bottom bar */}
            <div className="border-t-4 border-red-900 mt-4 pt-3 flex justify-center gap-4">
                <div className="w-16 h-4 bg-red-900 rounded-full"></div>
                <div className="w-8 h-4 bg-red-900 rounded-full"></div>
            </div>

        </div>
    </div>
  )
}

export default App