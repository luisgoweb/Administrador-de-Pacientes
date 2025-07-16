import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import type { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = {
    patients: Patient
}

const PatientDetails = ({patients} : PatientDetailsProps) => {
    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleClick = () => {
        deletePatient(patients.id)
        toast.success("Paciente Eliminado", {
            type: "error"
        })
    }
   
  return (
    <div className="mx-5 my-5 py-5 px-5 rounded-xl bg-white shadow-md">
        <PatientDetailsItem  label="ID:" data={patients.id} />
        <PatientDetailsItem  label="Paciente:" data={patients.name} />
        <PatientDetailsItem  label="Propietario:" data={patients.caretaker} />
        <PatientDetailsItem  label="Email:" data={patients.email} />
        <PatientDetailsItem  label="Fecha:" data={patients.date} />
        <PatientDetailsItem  label="Sintomas:" data={patients.symptoms} />

        <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
            <button 
            type="button" 
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
            onClick={()=> getPatientById(patients.id)}
            >
                Editar
            </button>
            
            <button 
            type="button" 
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
            onClick={ handleClick}
            >
                Eliminar
            </button>
        </div>
    </div>
  )
}

export default PatientDetails
