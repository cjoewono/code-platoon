import { Link } from 'react-router-dom'
const CharacterCard = ({ id, name, image, status, species }) => {
  return (
    <div className="card" style={{ width: '200px' }}>
      <img src={image} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p>{status} - {species}</p>
        <Link to={`/characters/${id}`}>View Details</Link>
      </div>
    </div>
  )
}
export default CharacterCard