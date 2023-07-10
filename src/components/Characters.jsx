import {useNavigate} from 'react-router-dom';

export function Characters({character}){
    const navigate = useNavigate();

    if (!character) {
        return null; // Si character es undefined, retornar null
      }
    
    return(
        <div className="card-rym">
            <h2>{character.name || '--'}</h2>
            <img src={character.image || 'img/no_image.jpg'} alt={character.name || '--'}/>
            <div className="card-description-rym">
                <p><strong>Location:</strong>{character.location.name || '--'}</p>
                <p><strong>Status:</strong>{character.status || '--'}</p>
                <p><strong>Species:</strong>{character.species || '--'}</p>
            </div>
            <button onClick={() => navigate(`/character/${character.id}`)} className="card-button-rym">More</button>

        </div>
    )
}