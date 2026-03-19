import { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Form, Row, Col, InputGroup, Button } from 'react-bootstrap'
import CharacterCard from '../components/CharacterCard'

export default function CharactersPage() {
    const { characterCollection, getCharacterData, addToCollection, deleteFromCollection } = useOutletContext()
    const [searchInput, setSearchInput] = useState('')

    const handleAdd = (e) => {
        e.preventDefault()
        console.log('handleAdd fired, input:', searchInput)
        const cleanInput = searchInput.trim()
        if (!cleanInput) return
        getCharacterData(cleanInput, addToCollection)
        setSearchInput('')
    }

    return (
        <div className="mt-4 mb-5">

            <h1 className="mb-4 text-center">Character Collection</h1>

            <Form className="mb-5 mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleAdd}>
                <InputGroup size="lg">
                    <Form.Control
                        type="text"
                        name="name"
                        placeholder="Search name to add (e.g. Rick Sanchez)..."
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Button variant="success" type="submit">Add</Button>
                </InputGroup>
            </Form>

            <Row id="cardHolder" xs={1} sm={2} md={3} lg={4} className="g-4">
                {characterCollection.map((character) => (
                    <Col key={character.id}>
                        <div className="position-relative">
                            <Button
                                variant="danger"
                                size="sm"
                                className="position-absolute top-0 end-0 m-2"
                                style={{ zIndex: 10 }}
                                onClick={() => deleteFromCollection(character.id)}
                            >
                                Delete
                            </Button>
                            <CharacterCard
                                id={character.id}
                                name={character.name}
                                image={character.image}
                                status={character.status}
                                species={character.species}
                            />
                        </div>
                    </Col>
                ))}
            </Row>

            {characterCollection.length === 0 && (
                <div className="text-center mt-5 text-muted">
                    <h3>No characters generated yet.</h3>
                </div>
            )}
        </div>
    )
}