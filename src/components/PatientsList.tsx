import { usePatientStore } from "../store"

const PatientsList = () => {

    const patients = usePatientStore(state => state.patients)

  return (
    <div>
      {patients.map( patients => (
        <div key={patients.id}>
            <p>{patients.name}</p>
            <p>{patients.caretaker}</p>
            <p>{patients.email}</p>
        </div>
      ))}
    </div>
  )
}

export default PatientsList
