import { useEffect, useState } from "react";
import "../../App.css";
import { OrdenamientoRegistros } from "../../components/OCC/OrdenamientoRegistros";

export function HomeOCC({ empresa }) {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    if (empresa) {
      const tarjetasData = empresa.tarjetas.map((tarjeta) => ({
        nombrePuesto: tarjeta.nombrePuesto,
        sueldoPuesto: tarjeta.sueldoPuesto,
      }));

      setTarjetas(tarjetasData);
    } else {
      setTarjetas([]);
    }
  }, [empresa]);

  /* Inicio Logica Paginación */
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const totalPages = Math.ceil(tarjetas.length / itemsPerPage);

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = tarjetas.slice(firstItem, lastItem);

  const handlePagina = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (!empresa) {
    return (
      <div className="AppOCC">
        <main className="p-[5%]">
          <h2
            id=""
            className="flex items-center justify-center mb-6 font-black text-4xl text-[#033076]"
          >
            No hay registros
          </h2>
        </main>
      </div>
    );
  }

  return (
    <div className="AppOCC">
      <main className="px-[5%] py-[4%]">
        <div className="flex items-center justify-center mb-8">
          <div className="text-center">
            <h2 id="empresaBuscada" className="text-xl font-bold text-primary-color mb-2">Empresa Buscada</h2>
            <p className="text-8xl text-[#033076] uppercase font-bold">{empresa ? empresa.nombreEmpresa : 'No se ha buscado una empresa aún'}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          <div className="bg-[#f05a69] rounded-lg py-4 px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Total de Empleos</h3>
            <p className="text-2xl text-white">{empresa ? empresa.totalEmpleos : '0'}</p>
          </div>

          <div className="bg-[#f05a69] rounded-lg py-4 px-6 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Fecha de Búsqueda</h3>
            <p className="text-2xl text-white">{empresa ? empresa.fecha : 'Sin fecha'}</p>
          </div>
        </div>

        {tarjetas.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10">
            {currentItems.map((tarjeta, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-lg hover:bg-[#628196] hover:-translate-y-1 hover:scale-105 transition-all duration-300 hover:text-white"
              >
                <h3 className="text-lg font-semibold mb-2">
                  {tarjeta.nombrePuesto}
                </h3>
                <p>Sueldo: {tarjeta.sueldoPuesto}</p>
              </div>
            ))}
          </div>
        )}

        <div className="pagination-occ">
          <button
            className="prev-button-occ"
            onClick={() => handlePagina(currentPage - 1)}
            disabled={!(currentPage - 1)}
          >
            {currentPage - 1 === 0 ? "No hay página previa" : currentPage - 1}
          </button>
          <p>
            {currentPage}
            de {totalPages}
          </p>
          <button
            className="next-button-occ"
            onClick={() => handlePagina(currentPage + 1)}
            disabled={currentPage + 1 > totalPages}
          >
            {currentPage + 1 > totalPages
              ? "No hay más páginas por mostrar"
              : currentPage + 1}
          </button>
        </div>

        {/* <div className="w-full">
          <OrdenamientoRegistros />
        </div> */}
      </main>
    </div>
  );
}
