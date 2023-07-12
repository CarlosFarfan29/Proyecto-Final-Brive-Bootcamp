import React, { useEffect, useState } from "react";
import { HistorialTabla } from "./HistorialTabla";
import {AiFillCloseSquare} from "react-icons/ai";

const ModalHistorial = ({ showModalHistorial, setShowModalHistorial }) => {
  const [totalVacantes, setTotalVacantes] = useState(""); // para asc o desc del select "Total vacantes"
  const [nombreEmpresa, setNombreEmpresa] = useState(""); // para asc o desc del select "Orden alfabetico"
  const [fecha, setFecha] = useState(""); // para asc o desc del select "Fecha de creación"

  const [registros, setRegistros] = useState([
    { id: 1, totalVacantes: 10, nombreEmpresa: "Famsa", fecha: "2022-07-22" },
    { id: 2, totalVacantes: 50, nombreEmpresa: "Walmart", fecha: "2022-02-01" },
    { id: 3, totalVacantes: 29, nombreEmpresa: "Brive", fecha: "2022-03-05" },
    { id: 4, totalVacantes: 81, nombreEmpresa: "OCCMundial", fecha: "2022-03-01"},
    { id: 5, totalVacantes: 2, nombreEmpresa: "RopaShop", fecha: "2022-05-01" },
    { id: 6, totalVacantes: 22, nombreEmpresa: "Empresa", fecha: "2022-06-01" },
    { id: 7, totalVacantes: 66, nombreEmpresa: "Facebook", fecha: "2022-06-01"},
    { id: 8, totalVacantes: 89, nombreEmpresa: "Youtube", fecha: "2022-07-01" },
  ]);

  /* Inicio Logica Paginación */
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);
  const totalPages = Math.ceil(registros.length / itemsPerPage);

  const lastItem = currentPage * itemsPerPage;
  const firstItem = lastItem - itemsPerPage;
  const currentItems = registros.slice(firstItem, lastItem);

  const handlePagina = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  /* ------------------------ */
  const handleTotalVacantes = (event) => {
    console.log("filtroTotalVacantes");
    setTotalVacantes(event.target.value);
  };

  const handleNombreEmpresa = (event) => {
    setNombreEmpresa(event.target.value);
  };

  const handleFecha = (event) => {
    setFecha(event.target.value);
  };

  const handleSearch = () => {
    console.log("handleSearch()");
    let registrosOrdenados = [...registros]; // Esto hace una copia de los registros originales
    registrosOrdenados.sort((a, b) => {
      let comparacion = 0;

      if (totalVacantes !== "") {
        const ordenTotalVacantes = totalVacantes === "asc" ? 1 : -1;
        if (a.totalVacantes !== b.totalVacantes) {
          comparacion =
            (a.totalVacantes - b.totalVacantes) * ordenTotalVacantes;
        }
      }

      if (nombreEmpresa !== "") {
        const ordenNombreEmpresa = nombreEmpresa === "asc" ? 1 : -1;
        if (a.nombreEmpresa !== b.nombreEmpresa) {
          comparacion =
            a.nombreEmpresa.localeCompare(b.nombreEmpresa) * ordenNombreEmpresa;
        }
      }

      if (fecha !== "") {
        const ordenFecha = fecha === "asc" ? 1 : -1;
        if (a.fecha !== b.fecha) {
          comparacion = (new Date(a.fecha) - new Date(b.fecha)) * ordenFecha;
        }
      }

      return comparacion;
    });

    setRegistros(registrosOrdenados);
  };

  // Llamar a handleSearch para ordenar los registros
  useEffect(() => {
    handleSearch();
  }, [totalVacantes, nombreEmpresa, fecha]); // dependencias necesarias para activar el ordenamiento

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   // Aquí debes implementar tu lógica para obtener los datos de la API
  //   // Puedes utilizar fetch, axios u otra librería para hacer la solicitud
  //   // y luego actualizar el estado de `data` con los datos obtenidos
  //   const response = await fetch('https://api.example.com/data');
  //   const data = await response.json();
  //   setData(data);
  // };

  return (
    <div
      style={{ display: showModalHistorial ? "block" : "none" }}
      className="fixed inset-0 overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div
          className=" relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mt-3 text-center sm:mt-5">
              
              <h3 className="text-orange-500 font-black text-2xl mb-14 uppercase">
                Historial mis Búsquedas
              </h3>
              <div className="flex items-center mb-4">
                <label htmlFor="selectTotalVacantes" className="mr-2">
                  Total de vacantes
                </label>
                <select
                  id="selectTotalVacantes"
                  className="p-2 bg-secondary-color hover:bg-primary-color rounded-md mr-3 text-white"
                  value={totalVacantes}
                  onChange={handleTotalVacantes}
                >
                  <option value="">...</option>
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>
                </select>

                <label htmlFor="selectNombreEmpresa" className="mr-2">
                  Nombre de la empresa
                </label>
                <select
                  id="selectNombreEmpresa"
                  className="p-2 mr-3 bg-secondary-color hover:bg-primary-color rounded-md text-white"
                  value={nombreEmpresa}
                  onChange={handleNombreEmpresa}
                >
                  <option value="">...</option>
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>
                </select>

                <label htmlFor="selectFechaBusqueda" className="mr-2">
                  Fecha de búsqueda
                </label>
                <select
                  id="selectFechaBusqueda"
                  className="p-2 mr-3 bg-secondary-color hover:bg-primary-color rounded-md text-white"
                  value={fecha}
                  onChange={handleFecha}
                >
                  <option value="">...</option>
                  <option value="asc">asc</option>
                  <option value="desc">desc</option>
                </select>
              </div>
              <div className="mt-2">
                <table className="min-w-full border-collapse border border-slate-500 my-10">
                  <thead className="border-collapse border border-slate-500">
                    <tr className="bg-teal-700 text-white uppercase font-black max-sm:text-xs">
                      <th className="p-2">N°</th>
                      <th>Nombre de la empresa</th>
                      <th>Total de empleos</th>
                      <th>Fecha de Busqueda</th>
                    </tr>
                  </thead>
                  <tbody className="border-collapse border border-slate-500">
                    {/*data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.column1}</td>
                        <td>{item.column2}</td>
                        <td>{item.column3}</td>
                        <td>{item.column4}</td>
                      </tr>
                    ))*/}

                    {currentItems.map((registro) => (
                      <HistorialTabla key={registro.id} registro={registro} />
                    ))}
                  </tbody>
                </table>
                <div className="pagination-occ">
                  <button
                    className="prev-button-occ"
                    onClick={() => handlePagina(currentPage - 1)}
                    disabled={!(currentPage - 1)}
                  >
                    {currentPage - 1 === 0
                      ? "No hay página previa"
                      : currentPage - 1}
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

                <button className="absolute top-0 right-0 flex mt-3 items-center px-4 font-black text-red-600 text-5xl"

              onClick={() => setShowModalHistorial(false)}>
                <AiFillCloseSquare/>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHistorial;
