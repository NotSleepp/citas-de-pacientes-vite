import { useState, useEffect } from "react"
import Error from "./Error";

const Formulario = ({ setPacientes, pacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('');
  const [nombreProp, setNombreProp] = useState('');
  const [email, setemail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setNombreProp(paciente.nombreProp)
      setemail(paciente.email)
      setAlta(paciente.alta)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    //validacion del form

    if ([nombre, nombreProp, email, alta, sintomas].includes('')) {
      setError(true)
    } else {
      setError(false)

      const objPaciente = {
        nombre,
        nombreProp,
        email,
        alta,
        sintomas,
      }

      if(paciente.id){
        // Editando el Registro
        objPaciente.id = paciente.id 
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objPaciente : pacienteState)
        setPacientes(pacientesActualizados)
        setPaciente({})
      }else{
        //Nuevo registro
        objPaciente.id = generarId()
        setPacientes([...pacientes, objPaciente])
      }


      
      // reiniciar form
      setNombre('')
      setNombreProp('')
      setemail('')
      setAlta('')
      setSintomas('')
    }

  }



  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento de Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añada Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5">

        {error && <Error
          mensaje='Todos los campos son obligatorios'
        />
        }
        <div className="mb-5">
          <label htmlFor="nombreMascota" className="block text-gray-700 uppercase font-bold">Nombre de la Mascota</label>
          <input
            id="nombreMascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value)
            }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="nombrePropietario" className="block text-gray-700 uppercase font-bold">Nombre del Propietario</label>
          <input
            id="nombrePropietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombreProp}
            onChange={(e) => {
              setNombreProp(e.target.value)
            }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email de contacto"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => {
              setemail(e.target.value)
            }}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">Alta</label>
          <input
            id="alta"
            type="date"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alta}
            onChange={(e) => {
              setAlta(e.target.value)
            }}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">Sintomas</label>
          <textarea
            id="sintomas"
            placeholder="Describa los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value)
            }}
          />
        </div>

        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value={ paciente.id ? 'Editar Paciente' : 'Agregar Paciente' } />
      </form>
    </div>
  )
}

export default Formulario
