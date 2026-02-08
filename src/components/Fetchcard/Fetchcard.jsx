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

    // AGREGA ESTE NUEVO useEffect para añadir las clases de las casas
    useEffect(() => {
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const houseElement = card.querySelector('.card-house');
            if (houseElement) {
                const houseText = houseElement.textContent.toLowerCase();
                
                if (houseText.includes('gryffindor')) card.classList.add('gryffindor');
                else if (houseText.includes('slytherin')) card.classList.add('slytherin');
                else if (houseText.includes('ravenclaw')) card.classList.add('ravenclaw');
                else if (houseText.includes('hufflepuff')) card.classList.add('hufflepuff');
            }
        });
    }, [characters]); // Se ejecuta cuando cambian los personajes

    if (loading) return <div className="loading">Cargando personajes...</div>;   

    return (
        <div className="cards-container">
            {characters.map((char) => (
                <Card
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