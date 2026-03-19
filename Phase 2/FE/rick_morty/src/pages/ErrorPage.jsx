import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <div className="text-center py-20">
            <h1 className="text-5xl font-bold text-red-500">Oops!</h1>
            <p className="text-white text-xl mt-4">
                Something went wrong. The multiverse must be glitching.
            </p>
            <Button variant="success" onClick={() => navigate('/')} className="mt-6">
                Go back home
            </Button>
        </div>
    )
}
export default ErrorPage