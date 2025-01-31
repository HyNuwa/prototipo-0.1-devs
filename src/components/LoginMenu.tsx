import React, {useState} from 'react';

const LoginMenu = () => {

  const [isLogin, setIsLogin] = useState(true);


  return (
    <section className="flex justify-center items-center min-h-[725px] bg-gray-100 rounded-xl">
      <div className="w-full max-w-md mx-auto">

        <div className="relative flex flex-col min-w-0 break-words w-full shadow-xl rounded-xl bg-white border-0">
          {/* Encabezado con Switch */}
          <div className="px-6 py-6">
            <div className="flex justify-center bg-gray-200 rounded-lg p-1 w-full">
              <button
                className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  isLogin ? "bg-white shadow-md text-gray-700" : "text-gray-500"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Iniciar Sesión
              </button>
              <button
                className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  !isLogin ? "bg-white shadow-md text-gray-700" : "text-gray-500"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Registrarse
              </button>
            </div>
          </div>

          {/* Formulario Dinámico */}
          <div className="px-6 lg:px-10">
            {isLogin ? (
              <LoginForm />
            ) : (
              <RegisterForm />
            )}
          </div>

          
        </div>
      </div>
    </section>
  );
}

const LoginForm = () => {
  return (
    <>
          {/* Encabezado */}
          <div className="px-6 py-6">
            <div className="text-center mb-3">
              <h3 className="text-2xl font-bold text-gray-700">Iniciar sesión</h3>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-white active:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-md outline-none focus:outline-none shadow hover:shadow-md flex items-center text-sm ease-linear transition-all duration-150">
                <img alt="GitHub" className="w-5 mr-2" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />
                GitHub
              </button>
              <button className="bg-white active:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-md outline-none focus:outline-none shadow hover:shadow-md flex items-center text-sm ease-linear transition-all duration-150">
                <img alt="Google" className="w-5 mr-2" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />
                Google
              </button>
            </div>
            <hr className="mt-6 border-gray-300" />
          </div>

          {/* Formulario */}
          <div className="px-6 lg:px-10 py-8">
            <div className="text-center text-sm font-bold text-gray-500 mb-4">
              <h4>O inicia sesión con tu correo</h4>
            </div>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-gray-600">Email</label>
                <input type="email" className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" placeholder="Tu correo" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-gray-600">Contraseña</label>
                <input type="password" className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" placeholder="Tu contraseña" />
                <h6 className="text-xs text-blue-500 mt-2 cursor-pointer hover:underline text-right">
                  ¿Olvidaste tu contraseña?
                </h6>
              </div>

              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blue-600 w-5 h-5 ease-linear transition-all duration-150" />
                  <span className="ml-2 text-sm font-semibold text-gray-600">Recordar sesión</span>
                </label>
              </div>

              <div className="text-center">
                <button className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150">
                  Iniciar sesión
                </button>
                <h6 className="text-sm text-gray-600 mt-3">
                  ¿No tienes una cuenta? 
                  <span className="text-blue-500 cursor-pointer hover:underline font-bold ml-2">Regístrate</span>
                </h6>
              </div>
            </form>
          </div>
    </>
  );
};

const RegisterForm = () => {
  return (
    <>
          {/* Encabezado */}
          <div className="px-6 py-6">
            <div className="text-center mb-3">
              <h3 className="text-2xl font-bold text-gray-700">Iniciar sesión</h3>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-white active:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-md outline-none focus:outline-none shadow hover:shadow-md flex items-center text-sm ease-linear transition-all duration-150">
                <img alt="GitHub" className="w-5 mr-2" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />
                GitHub
              </button>
              <button className="bg-white active:bg-gray-50 text-gray-700 font-medium px-4 py-2 rounded-md outline-none focus:outline-none shadow hover:shadow-md flex items-center text-sm ease-linear transition-all duration-150">
                <img alt="Google" className="w-5 mr-2" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />
                Google
              </button>
            </div>
            <hr className="mt-6 border-gray-300" />
          </div>

          {/* Formulario */}
          <div className="px-6 lg:px-10 py-8">
            <div className="text-center text-sm font-bold text-gray-500 mb-4">
              <h4>O inicia sesión con tu correo</h4>
            </div>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold mb-1 text-gray-600">Email</label>
                <input type="email" className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" placeholder="Tu correo" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-1 text-gray-600">Contraseña</label>
                <input type="password" className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" placeholder="Tu contraseña" />
                <h6 className="text-xs text-blue-500 mt-2 cursor-pointer hover:underline text-right">
                  ¿Olvidaste tu contraseña?
                </h6>
              </div>

              <div>
                <label className="inline-flex items-center cursor-pointer">
                  <input id="customCheckLogin" type="checkbox" className="form-checkbox border-0 rounded text-blue-600 w-5 h-5 ease-linear transition-all duration-150" />
                  <span className="ml-2 text-sm font-semibold text-gray-600">Recordar sesión</span>
                </label>
              </div>

              <div className="text-center">
                <button className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150">
                  Iniciar sesión
                </button>
                <h6 className="text-sm text-gray-600 mt-3">
                  ¿No tienes una cuenta? 
                  <span className="text-blue-500 cursor-pointer hover:underline font-bold ml-2">Regístrate</span>
                </h6>
              </div>
            </form>
          </div>
    </>
  );
};

export default LoginMenu;
