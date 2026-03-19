import {useParams} from 'react-router-dom'

const MissingPokemonPage = () => {
    const {query} = useParams()
    
    return ( 
        <div>
            No such pokemon with name or id '{query}' exists!
        </div>
     );
}
 
export default MissingPokemonPage;