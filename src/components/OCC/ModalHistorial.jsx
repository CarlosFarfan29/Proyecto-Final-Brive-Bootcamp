import React, { useEffect, useState } from 'react';

const ModalHistorial = ({showModalHistorial, setShowModalHistorial}) => {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   // Aquí debes implementar tu lógica para obtener los datos de la API
  //   // Puedes utilizar fetch, axios u otra librería para hacer la solicitud
  //   // y luego actualizar el estado de `data` con los datos obtenidos
  //   const response = await fetch('https://api.example.com/data');
  //   const data = await response.json();
  //   setData(data);
  // };

  return (
    <div style={{display: showModalHistorial ? "block" :"none"}}  className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
          &#8203;
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <div className="mt-3 text-center sm:mt-5">
            <button onClick={() => setShowModalHistorial(false)}  >
              Cerrar modal
            </button>
              <h3 className="text-orange-500 font-black text-2xl mb-14">Historial mis Búsquedas</h3>
              <div className="mt-2">
                <table className="min-w-full border-collapse border border-slate-500">
                  <thead>
                    <tr className='bg-slate-500 text-white uppercase font-black max-sm:text-xs'>
                      <th>No</th>
                      <th>Nombre de la empresa</th>
                      <th>Total de empleos</th>
                      <th>Fecha de Busqueda</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.column1}</td>
                        <td>{item.column2}</td>
                        <td>{item.column3}</td>
                        <td>{item.column4}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalHistorial;