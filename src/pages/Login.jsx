import { useState } from "react";
import Alerta from "../components/Alerta";
// import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillLock, AiFillMail} from "react-icons/ai";
import { useNavigate } from "react-router";
// import Cookies from 'universal-cookie'
// import axios from 'axios'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Realiza la llamada a la API para verificar el inicio de sesión
    // Aquí debes implementar la lógica de verificación de usuario y contraseña

    if (email === 'usuario@example.com' && password === 'contraseña') {
      // Inicio de sesión exitoso
      navigate('/home');
    } else {
      // Error de inicio de sesión
      setAlerta({
        msg: "Usuario o contraseña incorrecta",
        error: true,
      });
    }
  };
  
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if ([email, password].includes("")) {
  //     setAlerta({
  //       msg: "Todos los campos son obligatorios",
  //       error: true,
  //     });
  //     return;
  //   }

  //   //   //Conectar con la API
  //   //   // try{
  //   //   //   const {data} = await
  //   //   // }catch(error){

  //   //   // }
  // };

  const { msg } = alerta;

  return (
    <>
      <div className="bg-white shadow rounded-3xl md:py-14 md:px-16 p-5 max-md:w-screen bg-opacity-25">
        <h1 className="text-indigo-700 font-black text-4xl mb-14">Login</h1>

        {msg && <Alerta alerta={alerta} />}

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
                <AiFillMail/>
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
                <AiFillLock/>
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
            value="Sign In"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
