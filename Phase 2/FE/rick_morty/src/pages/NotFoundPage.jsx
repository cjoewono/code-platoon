import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const NotFoundPage = () => {
    const navigate = useNavigate()
    return (
        <div className="text-center py-20">
            <h1 className="text-6xl font-bold text-red-500">404</h1>
            <p className="text-white text-2xl mt-4">
                Looks like Rick drove his spaceship into the wrong dimension!
            </p>
            <p className="text-gray-400 mt-2">
                This page does not exist.
            </p>
            <Button variant="success" onClick={() => navigate('/')} className="mt-6">
                Take me home
            </Button>
        </div>
    )
}
export default NotFoundPage