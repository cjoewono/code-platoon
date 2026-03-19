import PokemonCard from '../components/PokemonCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useOutletContext } from 'react-router-dom'


const PokemonPage = () => {
    const { id } = useParams()
    const { team, catchPokemon, releasePokemon } = useOutletContext()
    const [pokemon, setPokemon] = useState(null)

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                setPokemon(response.data)
            }
            catch(err) {
                console.error(err)
            }
        }
    fetchPokemon()
    }, [id])

    return ( 
        <> 
            {pokemon ? 
                <>
                <h2>
                    {pokemon.name}
                </h2>
                <PokemonCard
                    pokemon={pokemon}
                    team={team}
                    catchPokemon={catchPokemon}
                    releasePokemon={releasePokemon}
                />
                </>
                :
                <p>Loading...</p>
            }
        </>
    )
}
 
export default PokemonPage