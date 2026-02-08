
function Card({ name, house, image }) {
    return (
        <div className="card">
            <div className="card-image-container">
                <img 
                    src={image || 'https://via.placeholder.com/300x400?text=Sin+Imagen'} 
                    alt={name}
                    className="card-image"
                />
            </div>
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                {house && <p className="card-house">🏰 {house}</p>}
            </div>
        </div>
    );
}

export default Card;