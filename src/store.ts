import { create } from "zustand";
import type { DraftPatient, Patient } from "./src/types";

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

export const usePatientStore = create<PatientState>(()=> ({
    patients: [],
    addPatient: (data) => {
        console.log(data)
    }
}))