import { useState } from "react";

const TYPE_COLORS = {
  normal: '#A8A878',   fire: '#F08030',    water: '#6890F0',
  electric: '#F8D030', grass: '#78C850',   ice: '#98D8D8',
  fighting: '#C03028', poison: '#A040A0',  ground: '#E0C068',
  flying: '#A890F0',   psychic: '#F85888', bug: '#A8B820',
  rock: '#B8A038',     ghost: '#705898',   dragon: '#7038F8',
  dark: '#705848',     steel: '#B8B8D0',   fairy: '#EE99AC',
}

function PokemonCard({ imgSrc, pokeName, pokemonId, rmFunc, shinyImgSrc, types, hp }) {
    const [isShiny, setIsShiny] = useState(false)
    const formattedId = `#${String(pokemonId).padStart(3, '0')}`

    return (
        <div className="flex flex-col items-center text-center border-4 border-red-900 bg-red-800 rounded-lg p-4 w-36">
            <span className="text-red-300 text-xs font-mono self-start">{formattedId}</span>
            <img
                src={isShiny ? shinyImgSrc : imgSrc}
                alt={pokeName}
                className="w-24 h-24 object-contain"
            />
            <h3 className="text-white font-bold capitalize my-1 text-sm">{pokeName}</h3>

            <div className="flex gap-1 flex-wrap justify-center mb-2">
                {types.map(t => (
                    <span
                        key={t}
                        className="text-white text-xs px-2 py-0.5 rounded-full font-semibold capitalize"
                        style={{ backgroundColor: TYPE_COLORS[t] ?? '#888' }}
                    >
                        {t}
                    </span>
                ))}
            </div>

            <div className="w-full mb-2">
                <div className="flex justify-between text-xs text-red-200 mb-0.5">
                    <span>HP</span><span>{hp}</span>
                </div>
                <div className="w-full bg-red-900 rounded-full h-1.5">
                    <div
                        className="h-1.5 rounded-full"
                        style={{ width: `${Math.min(hp, 255) / 255 * 100}%`, backgroundColor: hp >= 80 ? '#4caf50' : hp >= 45 ? '#F8D030' : '#F08030' }}
                    />
                </div>
            </div>

            <div className="flex gap-2 mt-1">
                <button
                    className="bg-yellow-300 text-black text-xs rounded px-2 py-1 hover:bg-yellow-400"
                    onClick={() => setIsShiny(!isShiny)}
                >
                    {isShiny ? '✦ Shiny' : '☆ Shiny'}
                </button>
                <button
                    className="bg-slate-700 text-white text-xs rounded px-2 py-1 hover:bg-slate-600"
                    onClick={() => rmFunc(pokemonId)}
                >
                    Release
                </button>
            </div>
        </div>
    )
}

export default PokemonCard;