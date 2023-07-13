import {useNavigate} from 'react-router-dom';

export function NavBar({setIsLogueado}){
    const navigate = useNavigate();


    const handleCerrarSesion = async (e) => {
      
  
      await localStorage.clear();
  
  
      setIsLogueado(localStorage.getItem("logueado"));
      // return redirect("/home");
    };

    return(
    <header className="Header">

        <img onClick={() => navigate("/home")} src="/img/logo.png" alt='Logo' 
        className='Logo'/>
        <button onClick={() => navigate("/conditions")} className='Terms'>
            Terms + Conditions</button>
            <button onClick={() => navigate("/occ")} className="Terms">
        OCC Mundial
      </button>

      <button onClick={() => handleCerrarSesion()} className="Terms">
        Cerrar sesión
      </button>

    </header>    
      )
}