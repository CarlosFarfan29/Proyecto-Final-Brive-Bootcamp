import { useEffect, useState } from "react";
import { Empresas } from "./Empresas";

export function OrdenamientoRegistros() {
  const [totalVacantes, setTotalVacantes] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [fecha, setFecha] = useState("");
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
    let registrosOrdenados = [...registros]; // Esto hace una copia de los registros originales

    registrosOrdenados.sort((a, b) => {
      if (totalVacantes !== "") {
        const ordenTotalVacantes = totalVacantes === "asc" ? 1 : -1;
        if (a.totalVacantes !== b.totalVacantes) {
          return (a.totalVacantes - b.totalVacantes) * ordenTotalVacantes;
        }
      }

      if (nombreEmpresa !== "") {
        const ordenNombreEmpresa = nombreEmpresa === "asc" ? 1 : -1;
        console.log('entra a ordenar por nombre empresa')

        if (a.nombreEmpresa !== b.nombreEmpresa) {
          return (
            a.nombreEmpresa.localeCompare(b.nombreEmpresa) * ordenNombreEmpresa
          );
        }
      }

      if (fecha !== "") {
        const ordenFecha = fecha === "asc" ? 1 : -1;
        if (a.fecha !== b.fecha) {
          return (new Date(a.fecha) - new Date(b.fecha)) * ordenFecha;
        }
      }

      return 0; // Si no cambian los campos de ordenamiento, no se realiza ningún cambio
    });

    setRegistros(registrosOrdenados);
  };

  // Llamar a handleSearch para ordenar los registros
  useEffect(() => {
    handleSearch();
  }, [totalVacantes, nombreEmpresa, fecha]); // dependencias necesarias para activar el ordenamiento

  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-4">
        <label htmlFor="selectTotalVacantes" className="mr-2">
          Total de vacantes
        </label>
        <select
          id="selectTotalVacantes"
          className="p-2 bg-secondary-color hover:bg-primary-color rounded-md mr-3"
          value={totalVacantes}
          onChange={handleTotalVacantes}
        >
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>

        <label htmlFor="selectNombreEmpresa" className="mr-2">
          Nombre de la empresa
        </label>
        <select
          id="selectNombreEmpresa"
          className="p-2 mr-3 bg-secondary-color hover:bg-primary-color rounded-md"
          value={nombreEmpresa}
          onChange={handleNombreEmpresa}
        >
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>

        <label htmlFor="selectFechaBusqueda" className="mr-2">
          Fecha de búsqueda
        </label>
        <select
          id="selectFechaBusqueda"
          className="p-2 mr-3 bg-secondary-color hover:bg-primary-color rounded-md"
          value={fecha}
          onChange={handleFecha}
        >
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-terciary-color hover:bg-orange-color text-white px-4 py-2 rounded-md ml-4"
        >
          Ordenar
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {registros.map((registro) => (
          <Empresas key={registro.id} registro={registro} />
        ))}
      </div>
    </div>
  );
}
