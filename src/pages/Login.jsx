import { useState } from "react";
import Alerta from "../components/Alerta";
import { AiOutlineEye, AiOutlineEyeInvisible, AiFillLock, AiFillMail} from "react-icons/ai";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [logueado, setLogueado] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("https://localhost:7219/api/User/validar-credenciales", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
  
      if (response.ok) {
        // Inicio de sesión exitoso
        localStorage.setItem('logueado', true);
        localStorage.setItem('user', email);
        navigate('/home');

      } else {
        // Error de inicio de sesión
        const data = await response.json();
        setAlerta({
          msg: data.errorMsg || "Error de inicio de sesión",
          error: true,
        });
      }
    } catch (error) {
      // Error de red u otro error
      setAlerta({
        msg: "Ocurrió un error al realizar la solicitud",
        error: true,
      });
      console.error(error);
    }
  };
  
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

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
            className="bg-orange-500 w-full mb-5 mt-10 py-3 text-white uppercase font-bold rounded 
            hover:cursor-pointer hover:bg-orange-600 transition-colors" id="login"
            type="submit"
            value="Sign In"
          />
        </form>
      </div>
    </>
  );
};

export default Login;