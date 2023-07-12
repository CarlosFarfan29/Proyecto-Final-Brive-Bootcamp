import { useEffect, useState } from "react";
import { Empresas } from "./Empresas";

export function OrdenamientoRegistros() {
  const [totalVacantes, setTotalVacantes] = useState(""); // para asc o desc del select "Total vacantes"
  const [nombreEmpresa, setNombreEmpresa] = useState(""); // para asc o desc del select "Orden alfabetico"
  const [fecha, setFecha] = useState(""); // para asc o desc del select "Fecha de creación"
  const [registros, setRegistros] = useState([
    { id: 1, totalVacantes: 10, nombreEmpresa: "Famsa", fecha: "2022-07-22" },
    { id: 2, totalVacantes: 50, nombreEmpresa: "Walmart", fecha: "2022-02-01" },
    { id: 3, totalVacantes: 29, nombreEmpresa: "Brive", fecha: "2022-03-05" },
    {
      id: 4,
      totalVacantes: 81,
      nombreEmpresa: "OCCMundial",
      fecha: "2022-03-01",
    },
    { id: 5, totalVacantes: 2, nombreEmpresa: "RopaShop", fecha: "2022-05-01" },
    { id: 6, totalVacantes: 22, nombreEmpresa: "Empresa", fecha: "2022-06-01" },
    {
      id: 7,
      totalVacantes: 66,
      nombreEmpresa: "Facebook",
      fecha: "2022-06-01",
    },
    { id: 8, totalVacantes: 89, nombreEmpresa: "Youtube", fecha: "2022-07-01" },
  ]);

  /*
//empresa -> vacantantes[]
// vacante->empresa;

  const [registros, setRegistros] = useState([
    { id: 1, nombre_empleo: 'nombre 1', sueldo: 12.00, fecha_publicacion: "2022-07-22", empresaId : 2, empresa:{id: 1, nombreEmpresa: "Famsa", ubicacionEmpresa: "León"} },
    { id: 1, nombre_empleo: 'nombre 1', sueldo: 12.00, fecha_publicacion: "2022-07-22", empresaId : 2, empresa:{id: 1, nombreEmpresa: "Famsa", ubicacionEmpresa: "León"} },
    { id: 1, nombre_empleo: 'nombre 1', sueldo: 12.00, fecha_publicacion: "2022-07-22", empresaId : 2, empresa:{id: 1, nombreEmpresa: "Famsa", ubicacionEmpresa: "León"} },
    { id: 1, nombre_empleo: 'nombre 1', sueldo: 12.00, fecha_publicacion: "2022-07-22", empresaId : 2, empresa:{id: 1, nombreEmpresa: "Famsa", ubicacionEmpresa: "León"} },
  ]);
  */

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

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-5 flex-wrap gap-5 justify-evenly">
        <div>
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
        </div>

        <div>
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
        </div>

        <div>
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

        {/* Botón de Ordenar */}
        {/* Comentado temporalmente */}
        {/* <button
      onClick={handleSearch}
      className="bg-terciary-color hover:bg-orange-color text-white px-4 py-2 rounded-md ml-4"
    >
      Ordenar
    </button> */}
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center m-auto">
        {currentItems.map((registro) => (
          <Empresas key={registro.id} registro={registro} />
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <div className="pagination-occ mt-14">
          {/* Botón de página anterior */}
          <button
            className="prev-button-occ"
            onClick={() => handlePagina(currentPage - 1)}
            disabled={currentPage - 1 <= 0}
          >
            {currentPage - 1 <= 0 ? "No hay página previa" : currentPage - 1}
          </button>

          {/* Número de página actual */}
          <p>
            {currentPage} de {totalPages}
          </p>

          {/* Botón de página siguiente */}
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
      </div>
    </div>
  );
}
