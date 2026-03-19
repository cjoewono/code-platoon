import { useState, useEffect } from 'react'
import axios from 'axios'
const AboutPage = () => {
    const [info, setInfo] = useState(null)

    useEffect(() => {
        getShowInfo()
    }, [])
    
    const getShowInfo = async () => {
        try {
            let response = await axios.get('https://rickandmortyapi.com/api/character')
            let data = response.data
            setInfo(data.info)
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <>
            <h1 className="text-3xl font-bold text-green-400 my-4">About the Show</h1>
            <p>
                Rick and Morty is an American adult animated science fiction sitcom
                created by Justin Roiland and Dan Harmon. It premiered on Adult Swim
                in December 2013. The show follows the misadventures of Rick Sanchez,
                a genius scientist, and his easily influenced grandson Morty Smith.
            </p>
            <p>
                The series draws from a wide variety of scientific and pop-culture
                references. It has received widespread critical acclaim and multiple Emmy
                Award nominations.
            </p>
        </>
    )
}
export default AboutPage