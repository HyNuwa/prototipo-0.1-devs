"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import {loginSchemaZod, FormInputLoginZod} from "@/lib/type";
import {zodResolver} from "@hookform/resolvers/zod";
import { loginAction } from "@/actions/auth-action";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormInputLoginZod>({resolver: zodResolver(loginSchemaZod)});
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  async function handleOnSubmit(values: FormInputLoginZod){
    setError(null);
    startTransition(async ()=>{
      const response =  await loginAction(values);
      console.log(response);
      if(response.error){
        setError(response.error);
      } else {
        router.push("/dashboard")
      }
    });
  }


  console.log(errors);
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
        <form onSubmit={handleSubmit(handleOnSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-bold mb-1 text-gray-600">Email</label>
            <input
              type="email"
              {...register("email")}
              className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" placeholder="Tu correo" />
          </div>

           {errors.email && (
            <span className="text-red-500 text-sm">
              {errors.email.message}
            </span>
           )}

          <div>
            <label className="block text-sm font-bold mb-1 text-gray-600">Contraseña</label>
            <input
              type="password"
              {...register("password")}
              className="border px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded-md text-sm shadow focus:outline-none focus:ring w-full transition-all duration-150" placeholder="Tu contraseña" />
            <h6 className="text-xs text-blue-500 mt-2 cursor-pointer hover:underline text-right">
              ¿Olvidaste tu contraseña?
            </h6>
          </div>

          <div>
            <label className="inline-flex items-center cursor-pointer">
              <input
                id="customCheckLogin"
                type="checkbox"
                {...register("checkbox")}
                className="form-checkbox border-0 rounded text-blue-600 w-5 h-5 ease-linear transition-all duration-150" />
              <span className="ml-2 text-sm font-semibold text-gray-600">Recordar sesión</span>
            </label>
          </div>

          <div className="text-center">
            <button 
              type="submit"
              disabled={isPending}
              className="bg-blue-500 text-white active:bg-blue-600 text-sm font-bold uppercase px-6 py-3 rounded-md shadow hover:shadow-lg outline-none focus:outline-none w-full ease-linear transition-all duration-150">
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

export default LoginForm;