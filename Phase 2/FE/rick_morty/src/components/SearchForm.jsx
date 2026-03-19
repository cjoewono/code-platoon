import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
const SearchForm = ({ onSearch }) => {
    const [searchName, setSearchName] = useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(searchName)
        setSearchName('')
    }
    return (
        <>
            <div className="flex justify-center my-4">
                <Form onSubmit={handleSubmit}>
                    <Stack direction="horizontal" gap={3}>
                        <Form.Control
                            className="me-auto"
                            placeholder="search by character name:"
                            value={searchName}
                            onChange={(evt) => setSearchName(evt.target.value)}
                        />
                        <Button variant="success" type="submit">Search</Button>
                        <div className="vr" />
                        <Button onClick={() => { setSearchName(''); onSearch('') }} variant="outline-danger">
                            Reset
                        </Button>
                    </Stack>
                </Form>
            </div>
        </>
    )
}
export default SearchForm