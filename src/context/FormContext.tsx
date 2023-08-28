import React from "react";
import { createContext, useContext, useReducer } from "react";

type State = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string
}
type Action = {
    type: FormActions;
    payload: any
}
type ContextType = {
    state: State;
    dispatch: (action: Action) => void;
}
type FormProviderProps = {
    children: React.ReactNode
}

const initicialData: State = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: ''
}
//Context 
const FormeContext = createContext<ContextType | undefined>(undefined);
// Reducer 
export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGitHub
}
const formReducer = (state: State, action: Action) => {

    switch (action.type) {
        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload };

        case FormActions.setName:
            return { ...state, name: action.payload }

        case FormActions.setLevel:
            return { ...state, level: action.payload }

        case FormActions.setEmail:
            return { ...state, email: action.payload }
        case FormActions.setGitHub:
            return { ...state, github: action.payload }

        default:
            return state;
    }
}
//Provider
export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, initicialData)
    const value = { state, dispatch }

    return (
        <FormeContext.Provider value={value}>
            {children}
        </FormeContext.Provider>
    )
}
//Context Hook
export const useForm = () => {
    const context = useContext(FormeContext)
    if (context === undefined) {
        throw new Error("useforme precisa ser usado dentro do FormProvider")
    }
    return context;
}