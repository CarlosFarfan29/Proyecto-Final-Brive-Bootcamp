import {useNavigate} from 'react-router-dom';

export function NavBar(){
    const navigate = useNavigate();

    return(
    <header className="Header">

        <img onClick={() => navigate("/home")} src="/img/logo.png" alt='Logo' 
        className='Logo'/>
        <button onClick={() => navigate("/conditions")} className='Terms'>
            Terms + Conditions</button>
            <button onClick={() => navigate("/occ")} className="Terms">
        OCC Mundial
      </button>

    </header>    
      )
}