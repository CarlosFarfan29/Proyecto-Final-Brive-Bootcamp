import { Empresas } from "../../components/OCC/Empresas";
import "../../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function HomeOCC() {

  return (
    <div className="AppOCC">
      <div className="HeroOCC">
        heroOCC
      </div>
      <main>
        <h2>Empresas</h2>
        <div className="">
          {
            <Empresas/>
          }
        </div>
      </main>

    </div>
  );
}
