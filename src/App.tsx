import PatientForm from "./components/PatientForm"
import PatientsList from "./components/PatientsList"


function App() {
  

  return (
    <>
      <div className="container mx-auto mt-10">
          <h1 className="text-5xl font-black text-center md:w-2/3 md:mx-auto">
            Seguimiento de Pacientes{' '}
            <span className="text-indigo-700">Veterinaria</span>
          </h1>

          <div className="mt-12 md:flex">
            <PatientForm />
            <PatientsList />
          </div>
      </div>

     

    </>
  )
}

export default App
