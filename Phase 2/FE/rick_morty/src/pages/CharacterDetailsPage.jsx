import { useParams, useOutletContext, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const CharacterDetailsPage = () => {
    const { getCharacterById } = useOutletContext()
    const { id } = useParams()
    const navigate = useNavigate()
    const [details, setDetails] = useState(null)

    useEffect(() => {
        getCharacterById(id, setDetails)
    }, [])

    return (
        <>
            <Button 
                variant="outline-success" 
                className="my-4"
                onClick={() => navigate('/characters')}
            >
                Back to Collection
            </Button>

            {
                details ?
                <Card bg="dark" text="white" className="mb-4 shadow-lg">
                    <Card.Img
                        variant="top"
                        src={details.image}
                        style={{ maxWidth: '300px', margin: '20px auto', borderRadius: '10px' }}
                    />
                    <Card.Title className="text-center p-3">{details.name}</Card.Title>
                    <Card.Body>
                        <Card.Text as="div">
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-dark text-white border-secondary">
                                    <strong>Status:</strong>{' '}
                                    <Badge bg={details.status === 'Alive' ? 'success' : details.status === 'Dead' ? 'danger' : 'secondary'}>
                                        {details.status}
                                    </Badge>
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white border-secondary">
                                    <strong>Species:</strong> {details.species}
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white border-secondary">
                                    <strong>Gender:</strong> {details.gender}
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white border-secondary">
                                    <strong>Origin:</strong> {details.origin?.name}
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white border-secondary">
                                    <strong>Last Known Location:</strong> {details.location?.name}
                                </ListGroup.Item>
                                <ListGroup.Item className="bg-dark text-white border-secondary">
                                    <strong>Total Episode Appearances:</strong> {details.episode?.length}
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
                :
                <Spinner animation="border" variant="success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </>
    )
}

export default CharacterDetailsPage