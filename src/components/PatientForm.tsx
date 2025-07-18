import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import type { DraftPatient } from "../types"

export default function PatientForm() {

    const addPatient = usePatientStore(state => state.addPatient)
    const activeId = usePatientStore(state => state.activeId)
    const patients = usePatientStore(state => state.patients)
    const updatePatient = usePatientStore(state => state.updatePatient)

    const { register, handleSubmit, setValue , formState: {errors}, reset } = useForm<DraftPatient>() 

    useEffect(()=>{
      if(activeId){
        const activePatient = patients.filter( patient => patient.id === activeId )[0]
        setValue("name", activePatient.name)
        setValue("caretaker", activePatient.caretaker)
        setValue("email", activePatient.email)
        setValue("date", activePatient.date)
        setValue("symptoms", activePatient.symptoms)
      }
    },[activeId])

    const registerPatient = (data: DraftPatient) => {
      if(activeId){
          updatePatient(data)
          toast.success("Paciente actualizado", {
            type: 'info'
          })
      }else{
          addPatient(data)
          toast.success("Paciente añadido")
      }
        
        reset()
    }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

        <p className="text-lg mt-5 text-center mb-10">
            Añade Pacientes y {''}
            <span className="text-indigo-600 font-bold">Administralos</span>
        </p>

        <form 
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            noValidate
            onSubmit={handleSubmit(registerPatient)}
        >
              <div className="mb-5">
                  <label htmlFor="name" className="text-sm uppercase font-bold">
                      Paciente 
                  </label>
                  <input  
                      id="name"
                      className={errors.name ? ` placeholder-gray-500 text-gray-900 border border-pink-600 border-l-8 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent` : `w-full p-3  border border-gray-100`}  
                      type="text" 
                      placeholder="Nombre del Paciente" 
                      {...register('name', {
                        required: true
                      })}
                  />
                  
              </div>

              <div className="mb-5">
                <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                    Propietario 
                </label>
                <input  
                    id="caretaker"
                    className={errors.caretaker ? ` placeholder-gray-500 text-gray-900 border border-pink-600 border-l-8 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent` : `w-full p-3  border border-gray-100`}   
                    type="text" 
                    placeholder="Nombre del Propietario"
                    {...register('caretaker', {
                      required: true
                    })} 
                />
              </div>

            <div className="mb-5">
              <label htmlFor="email" className="text-sm uppercase font-bold">
                  Email 
              </label>
              <input  
                  id="email"
                  className={errors.email ? ` placeholder-gray-500 text-gray-900 border border-pink-600 border-l-8 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent` : `w-full p-3  border border-gray-100`}   
                  type="email" 
                  placeholder="Email de Registro" 
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Email No Válido'
                    }
                  })}  
              />
            </div>

            <div className="mb-5">
                <label htmlFor="date" className="text-sm uppercase font-bold">
                    Fecha Alta 
                </label>
                <input  
                    id="date"
                    className={errors.date ? ` placeholder-gray-500 text-gray-900 border border-pink-600 border-l-8 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent` : `w-full p-3  border border-gray-100`}   
                    type="date" 
                    {...register('date', {
                      required: true
                    })} 
                />
            </div>
            
            <div className="mb-5">
                <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                Síntomas 
                </label>
                <textarea  
                    id="symptoms"
                    className={errors.symptoms ? ` placeholder-gray-500 text-gray-900 border border-pink-600 border-l-8 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent` : `w-full p-3  border border-gray-100`}   
                    placeholder="Síntomas del paciente" 
                    {...register('symptoms', {
                      required: true
                    })} 
                ></textarea>
            </div>

            <input
                type="submit"
                className={errors.name || errors.caretaker || errors.email || errors.date || errors.symptoms ? `bg-pink-600 placeholder-gray-500 text-white border border-pink-600 border-l-8 rounded-lg p-3 w-full opacity-10 ` : `bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors`} 
                value={activeId ? 'Actualizar Paciente' : 'Guardar Paciente'}
            />
        </form> 
    </div>
  )
}
