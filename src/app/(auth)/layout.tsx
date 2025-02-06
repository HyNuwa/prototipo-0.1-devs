"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isLogin = pathname === "/login";

  return (
    <section className="flex justify-center items-center min-h-screen bg-gray-100 rounded-xl">
      <div className="w-full max-w-md mx-auto">
        <div className="relative flex flex-col min-w-0 break-words w-full shadow-xl rounded-xl bg-white border-0">
          {/* Encabezado con Switch */}
          <div className="px-6 py-6">
            <div className="flex justify-center bg-gray-200 rounded-lg p-1 w-full">
              <Link href="/login" className="w-1/2">
                <button
                  className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    isLogin ? "bg-white shadow-md text-gray-700" : "text-gray-500"
                  }`}
                >
                  Iniciar Sesión
                </button>
              </Link>

              <Link href="/register" className="w-1/2">
                <button
                  className={`w-full py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    !isLogin ? "bg-white shadow-md text-gray-700" : "text-gray-500"
                  }`}
                >
                  Registrarse
                </button>
              </Link>
            </div>
          </div>

          {/* Contenido dinámico (Formulario de Login o Registro) */}
          <div className="px-6 lg:px-10">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
