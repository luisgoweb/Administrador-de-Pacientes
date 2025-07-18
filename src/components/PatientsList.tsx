import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"

const PatientsList = () => {

    const patients = usePatientStore(state => state.patients)

  return (
        <div className="md:w-1/2 lg:h-3/5 md:h-screen overflow-y-scroll">
            {patients.length ? (
                <>
                 <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administra tus {''} 
                        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                    </p>

                    {patients.map( patients => (
                        <PatientDetails 
                        key={patients.id}
                        patients={patients}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Comienza agregando pacientes {''}
                        <span className="text-indigo-600 font-bold">Y apareceran en este lugar</span>
                    </p>
                </>
            )}
        </div>
  )
}

export default PatientsList
