import { useForm } from "react-hook-form";
import { useSocio } from "../context/SocioContext";
import "../input.css";
import { useNavigate } from "react-router-dom";
function SocioFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createSocio, error: SubmitError, getAllSocios } = useSocio();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (socio) => {
    createSocio(socio);
    getAllSocios();
    if (SubmitError.length == 0) navigate("/socios");
  });
  return (
    <div className="flex items-center justify-center grow erase-out">
      {SubmitError.map((error, i) => (
        <div className="flex justify-center items-center" key={i}>
          <p className="text-red-500 ">{error}</p>
        </div>
      ))}
      <form
        className="bg-zinc-800 flex h-[500px] w-[400px] items-center justify-center flex-col px-10 rounded-[50px]"
        onSubmit={onSubmit}
      >
        <h2 className="mb-[25%] text-xl font-semibold">AGREGAR SOCIO</h2>
        <div className="textInputWrapper w-full">
          <input
            {...register("nroorden", { required: true, minLength: 5 })}
            placeholder="Nro Orden"
            type="text"
            className="textInput"
            name="nroorden"
          />
        </div>
        {errors.nroorden && (
          <p className="text-red-500">NRO de orden requerido</p>
        )}
        <div className="textInputWrapper w-full">
          <input
            {...register("nombre", { required: true, minLength: 3 })}
            placeholder="Nombre"
            type="text"
            className="textInput"
            name="nombre"
          />
        </div>
        {errors.nombre && <p className="text-red-500">Nombre requerido</p>}
        <div className="textInputWrapper w-full">
          <input
            {...register("email", { required: true })}
            placeholder="Email"
            type="email"
            className="textInput"
            name="email"
          />
        </div>
        {errors.email && <p className="text-red-500">Email requerido</p>}
        <button className="relative py-2 my-4 px-8 text-black text-base font-bold uppercase rounded-[50px] overflow-hidden bg-white transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-blue-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-[50px] hover:before:left-0">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default SocioFormPage;
