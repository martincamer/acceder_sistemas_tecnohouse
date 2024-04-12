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
    <section className="h-screen max-md:h-full max-md:my-10 flex flex-col justify-center mx-20 max-md:mx-4">
      <div className="flex max-md:justify-center">
        <img src={"/logo.png"} className="w-[150px] mb-10" />
      </div>
      <div className="border-slate-300 border-[1px] rounded-3xl py-14 px-12 shadow-md max-md:px-0 max-md:border-none max-md:shadow-none">
        <div className="flex justify-center w-full">
          <p className="font-bold text-xl underline text-slate-700 max-md:text-base">
            SISTEMAS DE TECNOHOUSE SELECCIONA AL CUAL ACCEDER
          </p>
        </div>

        <div className="grid-cols-2 grid gap-5 mt-20 max-md:grid-cols-1 max-md:mt-5 w-2/3 max-md:w-full mx-auto">
          <Link
            to={"https://tecnohouseaberturas.netlify.app/"}
            className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold py-2 px-2 max-md:text-sm text-slate-700">
                SISTEMA ABERTURAS/SALIDAS TECNOHOUSE
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
            <div className="bg-indigo-100 py-6 text-indigo-700 px-5 rounded-2xl">
              <p>
                INGRESA AL SISTEMA DE CREACIÓN DE PEDIDOS DE ABERTURAS, STOCK,
                ETC.
              </p>
            </div>
          </Link>
          <Link
            to={"https://logistica-salidas-remuneraciones.netlify.app/"}
            className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold py-2 px-2 max-md:text-sm uppercase text-slate-700">
                Sistema logistica parque industrial
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
            <div className="bg-indigo-100 py-6 text-indigo-700 px-5 rounded-2xl uppercase">
              <p>
                Ingresa al sistema de logitica para poder ver datos, viviendas
                entregadas, total en fletes,etc .
              </p>
            </div>
          </Link>
          <Link
            to={"https://tecnohouse-compras.netlify.app/"}
            className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold py-2 px-2 max-md:text-sm uppercase text-slate-700">
                Sistema de compras parque industrial
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
            <div className="bg-indigo-100 py-6 text-indigo-700 px-5 rounded-2xl uppercase">
              <p>
                Ingresa al sistema y mira las ultimas ordenes del día, total a
                pagar a proveedores,etc.
              </p>
            </div>
          </Link>
          <Link
            to={"https://tecnohousegastos.netlify.app/"}
            className="flex flex-col gap-2 border-slate-300 border-[1px] py-4 px-5 rounded-2xl hover:shadow-md transition-all ease-linear cursor-pointer"
          >
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold py-2 px-2 max-md:text-sm uppercase text-slate-700">
                Sistema solo para generar presupuestos de aberturas,lista de
                precios,etc.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-green-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </div>
            <div className="bg-indigo-100 py-6 text-indigo-700 px-5 rounded-2xl uppercase">
              <p>
                Ingresar al sistema para ver las listas de precios, aberturas
                creadas, generar presupuestos.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
