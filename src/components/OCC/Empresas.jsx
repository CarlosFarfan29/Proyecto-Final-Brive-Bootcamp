import { useState } from "react";

export function Empresas({registro}) {

  if (!registro) {
    return null;
  }

  return(
    <div className="bg-white rounded-lg shadow-md p-4 w-64 h-auto border border-gray-300">
        <div className="mt-4">
          <h3 className="text-lg font-semibold">{registro.nombreEmpresa}</h3>
          <p>
            <strong>Total de empleos:</strong>{registro.totalVacantes}
          </p>
          <p>
            <strong>fecha de búsqueda:</strong>{registro.fecha}
          </p>
        </div>
      </div>
  );
}
