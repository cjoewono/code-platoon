import PokemonCard from "./PokemonCard";

const PokemonCardContainer = ({ pokemons, rmData }) => {
    return (
        <div className="border-4 border-red-900 bg-red-800 rounded-lg p-4 min-h-32">
            {pokemons.length === 0 ? (
                <p className="text-red-300 text-center text-sm italic py-4">
                    No Pokémon caught yet. Search one above to get started!
                </p>
            ) : (
                <div className="flex flex-wrap gap-3 justify-center">
                    {pokemons.map((pokemon) => (
                        <PokemonCard
                            key={pokemon.id}
                            imgSrc={pokemon.sprites.front_default}
                            shinyImgSrc={pokemon.sprites.front_shiny}
                            pokeName={pokemon.name}
                            pokemonId={pokemon.id}
                            types={pokemon.types.map(t => t.type.name)}
                            hp={pokemon.stats.find(s => s.stat.name === 'hp').base_stat}
                            rmFunc={rmData}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PokemonCardContainer;