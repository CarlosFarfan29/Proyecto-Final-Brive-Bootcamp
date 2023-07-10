import { useNavigate } from "react-router-dom";

export function NavBarOCC() {
  const navigate = useNavigate();

  return (
    <header className="bg-dark-color">
  <div className="container mx-auto flex items-center justify-between py-4">
    <ul className="flex space-x-4 ml-auto"> {/* Utiliza ml-auto para mover el contenido hacia la derecha */}
      <li>
        <a href="#">
          <img src="/img/occmundial.png" alt="OCCMundial" className="logo-header" />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="/img/brive.png" alt="Brivé" className="logo-header" />
        </a>
      </li>
    </ul>
  </div>
  <nav className="flex items-center justify-between bg-primary-color text-white p-4">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Buscar..."
          className="mr-2 px-4 py-2 rounded-md bg-gray-200 focus:outline-none"
        />
        <button className="bg-terciary-color hover:bg-orange-color text-white px-4 py-2 rounded-md">
          Buscar
        </button>
      </div>
      <div>
        <button className="text-white px-4 py-2 rounded-md hover:bg-gray-700">
          Ver historial
        </button>
      </div>
    </nav></header>
  );
}
