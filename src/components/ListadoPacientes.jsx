
import Paciente from "./Paciente"

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll ">
      {pacientes.length === 0 ? (
        <>
          <h2 className="font-black text-xl text-center">No hay pacientes</h2>
          <p className=" text-xl mt-5 mb-12 text-center">
            Empeza agregando tus pacientes {''}
            <span className="text-indigo-600 font-bold">y aparecen en esta sección</span>
          </p>
        </>
      ) : (
        <>
          <h2 className="font-black text-xl text-center">Listado de pacientes</h2>
          <p className=" text-xl mt-5 mb-12 text-center">
            Administrá tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map(paciente => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente = {setPaciente}
              eliminarPaciente = {eliminarPaciente}
            />
          ))}
        </>
      )}



    </div>

  )
}

export default ListadoPacientes
