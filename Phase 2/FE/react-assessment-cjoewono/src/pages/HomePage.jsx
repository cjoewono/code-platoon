import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
   const fetchList = async () => {
      try {
         let response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=30`)
         setPokemonList(response.data.results)
      }
      catch(err) {
         console.error(err)
      }
   }
  fetchList()
}, [])
  
   return ( 
      <>
         <h2>Home</h2>
         <ol>
            {pokemonList.map((pokemon) => (
               <li key={pokemon.name}>
                  <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
               </li>
            ))}
         </ol>
      </>
   )
}
 
export default HomePage;