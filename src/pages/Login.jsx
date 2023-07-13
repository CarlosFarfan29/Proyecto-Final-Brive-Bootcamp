import { useState, useEffect } from "react";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiFillLock,
  AiFillMail,
} from "react-icons/ai";
import { useNavigate, redirect } from "react-router-dom";

const Login = ({setIsLogueado}) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos vacíos
    if (email.trim() === "" || password.trim() === "") {
      setAlerta("Por favor, completa todos los campos")
      return;
    }

    // Validar el formato del correo electrónico
    if (!isValidEmail(email)) {
      setAlerta("Por favor, ingresa un correo electrónico válido")
      return;
    }

    try {
      const response = await fetch(
        "https://localhost:7219/api/User/validar-credenciales",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {

        console.log("response: ", response);

        const idUsuarioFromBack = await response.json();
        // Inicio de sesión exitoso
        // console.log("response.ok");
        await localStorage.setItem("logueado", true);
        await localStorage.setItem("user", email);
        await localStorage.setItem("idUsuario", idUsuarioFromBack);

        console.log("logueado: ", localStorage.getItem("logueado"));
        console.log("user: ", localStorage.getItem("user"));


        setIsLogueado(localStorage.getItem("logueado"));
        return redirect("/home");
      } else {
        const data = await response.json();
        // console.log("data: ", data);
        if (response.status === 401) {
          // Credenciales incorrectas
          setAlerta("Las credenciales ingresadas son incorrectas");
        } else if (response.status === 404) {
          // Cuenta no existe
          setAlerta(
            "La cuenta no existe. Por favor, verifica el correo electrónico ingresado"
          );
        } else {
          // Error de inicio de sesión
          setAlerta(data.errorMsg || "Error de inicio de sesión");
        }
        
      }
    } catch (error) {
      // Error de red u otro error
      setAlerta("Ocurrió un error al realizar la solicitud");
      console.error(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlerta("");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [alerta]);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  const isValidEmail = (email) => {
    // Expresión regular para validar el formato del correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <div className="bg-white shadow rounded-3xl md:py-14 md:px-16 p-5 max-md:w-screen bg-opacity-25">
        <h1 className="text-indigo-700 font-black text-4xl mb-14">Login</h1>

        {alerta && (
          <p className="from-red-400 to-red-600 bg-gradient-to-br text-center p-3 rounded-xl uppercase text-white font-bold text-sm">{alerta}</p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="my-8">
            <label
              className="text-gray-600 block text-lg font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="w-full mt-3 pl-9 p-3 border rounded-lg bg-gray-50"
                type="email"
                id="email"
                placeholder="username@gmail.com"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <div className="absolute inset-y-0 left-0 flex mt-3 items-center px-2 text-gray-600 text-xl">
                <AiFillMail />
              </div>
            </div>
          </div>

          <div className="my-8">
            <label
              className="text-gray-600 block text-lg font-bold"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full mt-3 pl-9 p-3 border rounded-lg bg-gray-50"
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="absolute inset-y-0 left-0 flex mt-3 items-center px-2 text-gray-600 text-xl">
                <AiFillLock />
              </div>

              <div className="absolute inset-y-0 right-0 flex mt-3 items-center px-4 text-gray-600 text-xl">
                {isPasswordVisible ? (
                  <AiOutlineEye
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={togglePasswordVisibility}
                    className="cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>

          <input
            className="bg-orange-500 w-full mb-5 mt-10 py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-orange-600 transition-colors"
            type="submit"
            id="login"
            value="Sign In"
          />
        </form>
      </div>
    </>
  );
};

export default Login;