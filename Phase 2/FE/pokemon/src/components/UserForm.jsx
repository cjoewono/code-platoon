import { useState } from "react"
import axios from 'axios'

const UserForm = ({ addData }) => {
    const [pokemonName, setPokemonName] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!pokemonName.trim()) return
        setLoading(true)
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase().trim()}`)
            addData(response.data)
            setPokemonName("")
        } catch (err) {
            alert(`"${pokemonName}" not found. Try a name or Pokédex number.`)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="border-4 border-red-900 bg-red-800 rounded-lg p-3">
            <form onSubmit={handleSubmit}>
                <input
                    className="w-full rounded-lg p-2 mb-3 border-2 border-red-900 text-sm"
                    placeholder="Search by name or number (e.g. pikachu, 25)"
                    value={pokemonName}
                    onChange={(e) => setPokemonName(e.target.value)}
                    disabled={loading}
                />
                <div className="flex justify-center gap-4">
                    <button
                        type="submit"
                        disabled={loading || !pokemonName.trim()}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg border-2 border-green-900 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                    >
                        {loading ? 'Searching...' : 'Catch!'}
                    </button>
                    <button
                        type="button"
                        className="bg-transparent text-white px-4 py-2 rounded-lg border-2 border-white hover:bg-red-700 text-sm"
                        onClick={() => setPokemonName("")}
                        disabled={loading}
                    >
                        Clear
                    </button>
                </div>
            </form>
        </div>
    )
}

export default UserForm