import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export function NavBarOCC() {
  const navigate = useNavigate();
  const [isInputTouched, setIsInputTouched] = useState(false);

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

  return (
    <header className="bg-dark-color">
      <div className="container mx-auto flex items-center justify-between py-4 pl-8 pr-8">
        <ul className="flex space-x-4 ml-auto">
          {" "}
          {/* Utiliza ml-auto para mover el contenido hacia la derecha */}
          <li>
            <a href="https://www.occ.com.mx/">
              <img
                src="/img/occmundial.png"
                alt="OCCMundial"
                className="logo-header"
              />
            </a>
          </li>
          <li>
            <a href="https://brivesoluciones.com/">
              <img src="/img/brive.png" alt="Brivé" className="logo-header" />
            </a>
          </li>
        </ul>
      </div>
      <nav className="flex items-center justify-between bg-primary-color p-10 pl-10 pr-10">
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
             {formData.busqueda === "" && isInputTouched && (
            <span className="absolute top-full left-0 text-red-500 text-xs mt-1">
              El campo de búsqueda es requerido.
            </span>
          )}
          </div>
          <button
            type="submit"
            className="bg-terciary-color hover:bg-orange-color text-white px-4 py-2 rounded-md ml-2"
          >
            Buscar
          </button>
        </form>

        <div>
          <button className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
            Ver historial
          </button>
        </div>
      </nav>
    </header>
  );
}
