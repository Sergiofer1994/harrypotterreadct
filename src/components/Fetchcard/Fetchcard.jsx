import { useEffect, useState } from 'react'
import Card from '../Card/Card.jsx'
function Fetchcard() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://hp-api.onrender.com/api/characters')
            .then(response => response.json())
            .then(data => {
                setCharacters(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            }); 
    }, []);

    if (loading) return <div className="loading">Cargando personajes...</div>;   
    return (
        <div className="cards-container">
            {characters.map((char) => (
                <HarryPotterCard
                    key={char.id || char.name}
                    name={char.name}
                    house={char.house}
                    image={char.image}
                />
            ))}
        </div>
    );
                    
}

export default Fetchcard;