import { useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../api/axios";

export const Home = () => {
  useEffect(() => {
    async function loadData() {
      const res = await client.get("/ordenes-mensuales");

      console.log(res.data);
    }
    loadData();
  }, []);

  return (
    <div className="bg-gray-100">
      <section className="h-screen max-md:h-full max-md:my-10 flex flex-col justify-center mx-20 max-md:mx-4 ">
        <div className="flex max-md:justify-center">
          <img src={"/logo.png"} className="w-[150px] mb-10" />
        </div>
        <div className="">
          <div className="flex justify-center w-full">
            <p className="font-bold text-2xl underline text-slate-700">
              Sistemas de Tecnohouse sobre logistica, aberturas, compras.
            </p>
          </div>

          <div className="grid-cols-2 grid gap-5 mt-10 max-md:grid-cols-1 max-md:mt-5 w-2/3 max-md:w-full mx-auto bg-white py-10 rounded-md shadow px-10">
            <Link
              to={"https://tecnohouseaberturas.netlify.app/"}
              className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold py-2 px-2 max-md:text-sm text-slate-700">
                  Sistema de gestión aberturas.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#FD454D]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
              <div className="py-0 px-5 text-blue-700 font-medium rounded-2xl">
                <p>Ingresa y gestióna aberturas, pedidos, remitos, etc.</p>
              </div>
            </Link>
            <Link
              to={"https://logistica-salidas-remuneraciones.netlify.app/"}
              className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold py-2 px-2 max-md:text-sm text-slate-700">
                  Sistema de gestión logistica.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#FD454D]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
              <div className="py-0 px-5 text-blue-700 font-medium rounded-2xl">
                <p>
                  Ingresa y gestióna salidas de contratos, remuneraciones,
                  contratos legales, viaticos, fletes, perdidas, etc.
                </p>
              </div>
            </Link>
            <Link
              to={"https://tecnohouse-compras.netlify.app/"}
              className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold py-2 px-2 max-md:text-sm text-slate-700">
                  Sistema de compras.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#FD454D]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
              <div className="py-0 px-5 text-blue-700 font-medium rounded-2xl">
                <p>
                  Ingresa y gestióna las compras, proveedores, ordenes, etc.
                </p>
              </div>
            </Link>
            <Link
              to={"https://tecnohousegastos.netlify.app/"}
              className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold py-2 px-2 max-md:text-sm text-slate-700">
                  Sistemas de presupuestos, gestión de fabrica aberturas.
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-[#FD454D]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </div>
              <div className="py-0 px-5 text-blue-700 font-medium rounded-2xl">
                <p>
                  Ingresa y gestióna presupuestos, aberturas , accesorios,
                  precios, numeros finales, etc.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
