import "../../App.css";
import { OrdenamientoRegistros } from "../../components/OCC/OrdenamientoRegistros";

export function HomeOCC() {
  return (
    <div className="AppOCC">
      <main className="p-[5%]">
        <h2 className="title-text flex items-center justify-center">
          Empresas
        </h2>
        <div className="w-full">
          <OrdenamientoRegistros />
        </div>
      </main>
    </div>
  );
}
