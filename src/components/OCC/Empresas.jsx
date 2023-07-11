import { useNavigate } from "react-router-dom";

export function Empresas() {
  const navigate = useNavigate();

  /*
  if (!empresa) {
    return null;
  }*/

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-4 w-64 h-auto border border-gray-300">
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Nombre de la empresa</h3>
          <p>
            <strong>Total de empleos:</strong>100
          </p>
          <p>
            <strong>fecha de búsqueda:</strong>100
          </p>
        </div>
      </div>
    </div>
  );
}
