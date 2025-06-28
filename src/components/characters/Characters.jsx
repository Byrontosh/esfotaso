import { useEffect, useState } from 'react'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setCharacters(data.results))
            .catch(error => console.error('Error:', error))
    }, [])

    return (
        <section className="ocio__card-container">

            {characters.map((character) => (
                <div className="ocio__card" key={character.id}>
                    <img
                        className="ocio__card-image"
                        src={character.image}
                        alt={character.name}
                    />
                    <h3 className="ocio__card-title">{character.name}</h3>
                    <p className="ocio__card-description">Especie: {character.species}</p>
                </div>
            ))}
        </section>
    )
}

export default Characters
