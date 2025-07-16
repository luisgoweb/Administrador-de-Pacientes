import type { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps = {
    patients: Patient
}

const PatientDetails = ({patients} : PatientDetailsProps) => {
  return (
    <div className="mx-5 my-5 py-5 px-5 rounded-xl bg-white shadow-md">
        <PatientDetailsItem  label="ID:" data={patients.id} />
        <PatientDetailsItem  label="Paciente:" data={patients.name} />
        <PatientDetailsItem  label="Propietario:" data={patients.caretaker} />
        <PatientDetailsItem  label="Email:" data={patients.email} />
        <PatientDetailsItem  label="Fecha:" data={patients.date} />
        <PatientDetailsItem  label="Sintomas:" data={patients.symptoms} />
    </div>
  )
}

export default PatientDetails
