import { useState } from "react";

export function HistorialTabla({ registro, index }) {
  if (!registro) {
    return null;
  }

  return (
    <>
      <tr className="border border-slate-500" key={registro.id}>
        <td className="p-2 border border-slate-500">{index + 1}</td>
        <td className="p-2 border border-slate-500">{registro.nombreEmpresa}</td>
        <td className="p-2 border border-slate-500">{registro.totalEmpleos}</td>
        <td className="p-2 border border-slate-500">{registro.fecha}</td>
      </tr>
    </> 
  );
}
