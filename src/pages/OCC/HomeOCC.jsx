import "../../App.css";
import { OrdenamientoRegistros } from "../../components/OCC/OrdenamientoRegistros";

export function HomeOCC({empresa}) {
  if(!empresa){
    return null;
  }

  return (
    <div className="AppOCC">
      <main className="p-[5%]">
        <h2 id="empresaBuscada" className="title-text flex items-center justify-center mb-6 font-black uppercase">
          Empresa buscada: {empresa ? empresa.nombreEmpresa : 'No se  ha buscado una empresa aún'}
        </h2>

        <h3 className="title-text flex items-center justify-center mb-6 font-black uppercase">
          Total empleos: {empresa ? empresa.totalEmpleos : ''}
        </h3>

        <h5 className="title-text flex items-center justify-center mb-6 font-black uppercase">
          Fecha búsqueda: {empresa ? empresa.fecha : ''}
        </h5>
        {/*<div className="w-full">
          <OrdenamientoRegistros />
        </div>*/}
      </main>
    </div>
  );
}
