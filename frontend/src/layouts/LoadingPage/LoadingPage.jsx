import { gifloading } from "../../assets";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-y-10">
      <img src={gifloading} alt="Medico" />
      <h1 className="text-3xl font-semibold text-principal ml-10">Cargando...</h1>
    </div>
  );
}

export default LoadingPage;
