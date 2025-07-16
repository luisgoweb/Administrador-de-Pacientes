import { v4 } from "uuid";
import { create } from "zustand";
import type { DraftPatient, Patient } from "./types";

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient => {
    return {...patient, id: v4()}
}

export const usePatientStore = create<PatientState>((set)=> ({
    patients: [],
    addPatient: (data) => {
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    }
}))