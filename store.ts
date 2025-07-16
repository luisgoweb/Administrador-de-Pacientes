import { create } from "zustand";
import type { Patient } from "./src/types";

type PatientState = {
    patients: Patient[]
}

export const usePatientStore = create<PatientState>(()=> ({
    patients: []
}))