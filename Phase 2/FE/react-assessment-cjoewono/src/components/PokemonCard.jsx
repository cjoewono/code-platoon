const PokemonCard = ({pokemon, team, catchPokemon, releasePokemon}) => {
    const isCaught = team.some((p) => p.id === pokemon.id)
    const isTeamFull = team.length >= 6
    const type = pokemon.types[0].type.name
    const handleClick = () => {
        if (isCaught) {
            releasePokemon(pokemon.id)
        }
        else {
            catchPokemon(pokemon)
        }
    }

    return (
        <div className={`pokemon-card bg-color-${type}`}>
            <h3>
                {pokemon.name}
            </h3>
            <img src = {pokemon.sprites.front_default}/>
            <div className="moves">
                {pokemon.moves.slice(0,4).map((m) => (
                    <div key={m.move.name}>{m.move.name}</div>
                ))}
            </div>
            <button onClick={handleClick} disabled={!isCaught && isTeamFull}>
                {isCaught ? 'Release' : 'Catch'}
            </button>
        </div>
    )
}

export default PokemonCard