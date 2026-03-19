const Banner = () => {
    return (
        <div className="border-4 border-red-900 bg-red-800 flex flex-col justify-center items-center p-4 rounded-lg">
            <h1 className="font-bold text-white text-xl tracking-widest uppercase">Pokédex</h1>
            <img src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png' alt="Powered by PokéAPI"/>
        </div>
    )
}

export default Banner;