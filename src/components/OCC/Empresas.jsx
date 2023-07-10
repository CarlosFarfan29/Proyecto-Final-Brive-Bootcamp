import {useNavigate} from 'react-router-dom';

export function Empresas(){//{empresa}
    const navigate = useNavigate();
/*
    if (!empresa) {
        return null;
      }*/
    
    return(
        <div className="card">
            <h2>Nombre de la empresa</h2>
            <div className="card-description">
                <p><strong>Total de empleos:</strong>100</p>
                <p><strong>fecha de búsqueda:</strong>100</p>
            </div>
        </div>
    )
}