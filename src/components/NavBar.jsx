import {useNavigate} from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";
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

      <button id="btnCerrarSesion" onClick={() => handleCerrarSesion()} className="Terms">
        <div className='p-1 bg-yellow-500 hover:bg-yellow-600 transition-colors rounded-lg border-solid border-2 border-white'>
          <ArrowRightOnRectangleIcon className="w-8 h-8 text-white"/>
        </div>
      </button>

    </header>    
      )
}