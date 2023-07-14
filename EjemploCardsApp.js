/*import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: '',
      responseData: '',
      error: ''
    };
  }

  handleChange = (event) => {
    this.setState({ empresa: event.target.value });
  }

  handleSubmit = () => {
    const { empresa } = this.state;
    const idUsuario = 2; // Ejemplo de objeto JSON para idUsuario

   // const requestBody = new FormData();
    //requestBody.append('empresa', empresa);
    //requestBody.append('idUsuario', JSON.stringify({idUsuario:idUsuario}));

    fetch(`https://localhost:7219/api/History/busqueda-empresa/${idUsuario}`, {
      method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(empresa)
    */
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empresa: '',
      tarjetas: [],
      error: ''
    };
  }

  handleChange = (event) => {
    this.setState({ empresa: event.target.value });
  }

  handleSubmit = () => {
   const { empresa } = this.state;
    const idUsuario = 2; // Ejemplo de objeto JSON para idUsuario



    fetch(`https://localhost:7219/api/History/busqueda-empresa/${idUsuario}`, {
        method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(empresa)
    })
      .then(response => response.json())
      .then(data => {
        if (data) {
          // Extraer la información de las tarjetas (nombre del puesto y sueldo)
          const tarjetas = data.tarjetas.map(tarjeta => ({
            nombrePuesto: tarjeta.nombrePuesto,
            sueldoPuesto: tarjeta.sueldoPuesto
          }));

          // Actualizar el estado con la información de las tarjetas
          this.setState({ tarjetas: tarjetas, error: '' });
        } else {
          this.setState({ tarjetas: [], error: 'Conexión inválida' });
        }
      })
      .catch(error => {
        this.setState({ tarjetas: [], error: 'Error en la solicitud' });
      });
  }

  render() {
    const { empresa, tarjetas, error } = this.state;
  
    return (
      <div>
        <input type="text" value={empresa} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Buscar</button>
        {tarjetas.length > 0 && (
          <div className="container">
            {tarjetas.map((tarjeta, index) => (
              <div className="card" key={index}>
                <h3>{tarjeta.nombrePuesto}</h3>
                <p>Sueldo: {tarjeta.sueldoPuesto}</p>
              </div>
            ))}
          </div>
        )}
        {error && <p>Error: {error}</p>}
      </div>
    );
  }
}

export default App;