import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ModalHistorial from "./ModalHistorial";
import {AiOutlineHistory} from "react-icons/ai";

export function NavBarOCC({setIsLogueado}) {
  const specialCharactersRegex = /^[a-zA-Z0-9\s]+$/; // Solo permite letras, números y espacios

  const navigate = useNavigate();
  const [isInputTouched, setIsInputTouched] = useState(false);

  const [showModalHistorial, setShowModalHistorial] = useState(false);

  const [formData, setFormData] = useState({
    busqueda: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputBlur = () => {
    setIsInputTouched(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario válido");
    console.log("Datos de formulario: ", formData);

    // const resp = await getVacantesDeEmpresa("Empresa de prueba");
  };

  const handleCerrarSesion = async (e) => {
    await localStorage.clear();

    setIsLogueado(localStorage.getItem("logueado"));
    // return redirect("/home");
  };

  return (
    <header className="bg-dark-color">
      <div className="mx-auto flex items-center justify-between py-3 pl-10 pr-10">
        <ul className="flex space-x-4 ml-auto">
          <li>
            <a href="https://www.occ.com.mx/">
              <img
                src="/img/occmundial.svg"
                alt="OCCMundial"
                className="logo-header"
              />
            </a>
          </li>
          <li>
            <a href="https://brivesoluciones.com/">
              <img src="/img/brive.svg" alt="Brivé" className="logo-header" />
            </a>
          </li>
        </ul>
        <button onClick={() => handleCerrarSesion()} className="">
          Cerrar sesión
        </button>
      </div>

      <nav className="flex items-center justify-between bg-primary-color py-8 pl-10 pr-10">
        <form className="flex">
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500" />
            </div>
            <input
              placeholder="Busca una empresa..."
              className={`bg-white focus:outline-none focus:ring-2 focus:ring-terciary-color border border-secondary-color 
              rounded-md py-2 px-4 block w-full shadow-sm sm:text-sm pl-8 ${
                formData.busqueda === "" ? "border-red-500" : ""
              }`}
              type="text"
              name="busqueda"
              id="busqueda"
              value={formData.busqueda}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              required
            />

            {isInputTouched && (
              <span className="absolute top-full left-0 text-error text-xs mt-1">
                {formData.busqueda === ""
                  ? "El campo de búsqueda es requerido."
                  : !specialCharactersRegex.test(formData.busqueda)
                  ? "El campo de búsqueda no debe tener caracteres especiales."
                  : ""}
              </span>
            )}
          </div>
          <button
            type="submit"
            id="buscar"
            className="bg-terciary-color hover:bg-orange-color text-white px-4 py-2 rounded-md ml-2"
          >
            Buscar
          </button>
        </form>

        <div className="flex text-white justify-center items-center gap-3">
          {/*
          <Link to="/modal" className="text-blue-500 hover:underline">
            Ver historial
          </Link>
            */}

          <div className="text-3xl">
            <AiOutlineHistory />
          </div>
          <button
            className="text-2xl"
            id="verHistorial"
            onClick={() => setShowModalHistorial(true)}
          >
            Ver Historial
          </button>
        </div>
      </nav>

      <ModalHistorial
        showModalHistorial={showModalHistorial}
        setShowModalHistorial={setShowModalHistorial}
      ></ModalHistorial>
    </header>
  );
}
