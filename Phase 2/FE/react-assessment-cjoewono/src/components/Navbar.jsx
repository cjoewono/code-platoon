import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Navbar = ({team, getPokemonData}) => {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleSearch = () => {
    if (!search) return

    getPokemonData(search, (data) => {
      if (data === null) {
        navigate(`/missing-pokemon/${search}`)
      }
      else {
        navigate(`/pokemon/${data.name}`)
      }
    })

    setSearch('')
  }

  return (
    <nav className="flex items-center gap-4 px-6 py-3 w-full">
      <h1 className="text-2xl font-bold">POKEDEX</h1>
      <Link to="/">Home</Link>
      <Link to="/team">My Team #{team.length}</Link>
      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
    </nav>
    
    
  );
}

export default Navbar