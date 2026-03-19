import './App.css'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import NavBar from './components/NavBar'
import Container from 'react-bootstrap/Container'

function App() {
    const [characterCollection, setCharacterCollection] = useState([])

    // Used by CharactersPage — searches by name, adds all matches to collection
    // mirrors: getPokemonData used for searching in Pokemon app
    const getCharacterData = async (name, func) => {
        let requestURL = `https://rickandmortyapi.com/api/character?name=${name}`
        try {
            let response = await axios.get(requestURL)
            let results = response.data.results
            results.forEach((character) => func(character))
        } catch (err) {
            console.error(err)
            alert(`No characters found matching "${name}"`)
        }
    }

    const getCharacterById = async (id, func) => {
        let requestURL = `https://rickandmortyapi.com/api/character/${id}`
        try {
            let response = await axios.get(requestURL)
            func(response.data)
        } catch (err) {
            console.error(err)
        }
    }

    const addToCollection = (character) => {
        if (!characterCollection.some(c => c.id === character.id)) {
            setCharacterCollection(prev => [...prev, character])
        }
    }

    const deleteFromCollection = (id) => {
        setCharacterCollection(prev => prev.filter((c) => c.id !== id))
    }

    return (
        <Container>
            <NavBar />
            <Outlet context={{
                characterCollection,
                getCharacterData,
                getCharacterById,
                addToCollection,
                deleteFromCollection
            }} />
        </Container>
    )
}

export default App