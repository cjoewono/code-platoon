import { useOutletContext } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";

const TeamPage = () => {
    const {team, catchPokemon, releasePokemon } = useOutletContext()
    return ( 
        <> 
            <h2>My Pokemon Team</h2>
            {team.length === 0
                ?
                <h3>No Pokemon Caught Yet</h3>
                :
                team.map((pokemon) => (
                    <PokemonCard
                        key={pokemon.id}
                        pokemon={pokemon}
                        team={team}
                        catchPokemon={catchPokemon}
                        releasePokemon={releasePokemon}
                    />
                ))
            }
        </>
    )
}
 
export default TeamPage;