function createcard({ name, house, image }) {
    return (    
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h2 className="card-name">{name}</h2>
                <p className="card-house">{house}</p>
            </div>
        </div>
    );
    
}
export default createcard;