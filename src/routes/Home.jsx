import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="h-screen flex flex-col justify-center mx-20">
      <div className="border-slate-300 border-[1px] rounded-3xl py-14 px-12 shadow-md">
        <div className="flex justify-center w-full">
          <p className="font-bold text-2xl underline text-slate-500">
            SISTEMAS DE TECNOHOUSE SELECCIONA AL CUAL ACCEDER
          </p>
        </div>

        <div className="grid-cols-4 grid gap-5 mt-10">
          <Link
            to={"https://tecnohouseaberturas.netlify.app/"}
            className="flex items-center gap-4 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <p className="text-xl py-2 px-2 ">
              SISTEMA ABERTURAS/SALIDAS TECNOHOUSE
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </Link>
          <Link
            to={"https://logistica-salidas-remuneraciones.netlify.app/"}
            className="flex items-center gap-4 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <p className="text-xl py-2 px-2 ">
              SISTEMA LOGISTICA PARQUE INDUSTRIAL
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </Link>
          <Link
            to={"https://tecnohouse-compras.netlify.app/"}
            className="flex items-center gap-4 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <p className="text-xl py-2 px-2 ">
              SISTEMA COMPRAS PARQUE INDUSTRIAL
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </Link>
          <Link
            to={"https://tecnohousegastos.netlify.app/"}
            className="flex items-center gap-4 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <p className="text-xl py-2 px-2 ">
              SISTEMA GENERAR PRESUPUESTOS ABERTURAS
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
