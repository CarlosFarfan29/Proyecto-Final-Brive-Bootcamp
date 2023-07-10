import { Empresas } from "../../components/OCC/Empresas";
import "../../App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function HomeOCC() {

  return (
    <div className="AppOCC">
      <main className="p-[5%]">
        <h2 className="title-text flex items-center justify-center">Empresas</h2>
        <div className="">
          {
            <Empresas/>
          }
        </div>
      </main>

    </div>
  );
}
