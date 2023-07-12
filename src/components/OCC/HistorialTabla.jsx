import { useState } from "react";

export function HistorialTabla({ registro }) {
  if (!registro) {
    return null;
  }

  return (
    <>
      <tr key={registro.id}>
        <td>{registro.nombreEmpresa}</td>
        <td>{registro.totalVacantes}</td>
        <td>{registro.fecha}</td>
      </tr>
    </> 
  );
}
