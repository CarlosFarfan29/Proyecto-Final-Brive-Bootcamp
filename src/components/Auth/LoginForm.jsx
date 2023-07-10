import { useEffect, useState } from "react";

export function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    busqueda: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario válido");
    console.log("Datos de formulario: ", formData);

    // const resp = await getVacantesDeEmpresa("Empresa de prueba");
  };

  return (
    <div className="form-container">
      {/*
      <AvForm onValidSubmit={handleSubmit} className="form-login">
        <Row>
          <Col xs="12" md={{ size: 12, offset: 0 }} sm="12">
            <Col xs="12">
              <p className="title-text text-center">Login</p>
            </Col>
            <Col xs="12">
              <p className="description text-center text-gray-600 text-sm">
                Inicia sesión en tu cuenta
              </p>
            </Col>

            <InputGroup className="custom-input my-4">
              <AvField
                placeholder="Correo electrónico"
                className="custom-input"
                type="email"
                name="email"
                id="email"
                value={formData.email}
                label={<FaEnvelope className="custom-login-icon" />}
                onChange={handleInputChange}
                validate={{
                  required: { value: true, errorMessage: "campo requerido" },
                  email: { value: true, errorMessage: "correo inválido" },
                }}
              />
            </InputGroup>

            <InputGroup className="custom-input my-4">
              <AvField
                placeholder="Contraseña"
                className="custom-input"
                type="password"
                name="password"
                id="password"
                value={formData.password}
                label={<FaLock className="custom-login-icon" />}
                onChange={handleInputChange}
                validate={{
                  required: { value: true, errorMessage: "campo requerido" },
                }}
              />
            </InputGroup>
            

            <Col
              xs="12"
              className="align-items-center d-flex justify-content-end my-5"
            >
              <Button className="button-login">Iniciar sesión</Button>
            </Col>
          </Col>
        </Row>
      </AvForm>
      */}
    </div>
  );
}
