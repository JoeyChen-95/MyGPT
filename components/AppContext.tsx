"use client"

import { Action, State, initState, reducer } from "@/reducers/AppReducer"
import { Dispatch, ReactNode, SetStateAction, createContext , useContext, useMemo, useReducer, useState} from "react"


type AppContextProps = {
    state: State
    dispatch: Dispatch<Action>
}

const AppContext = createContext<AppContextProps>(null!)

export function useAppContext(){
    return useContext(AppContext);
}

// receive children property, nest children components
export default function AppContextProvider({
    children
}:{
    children: ReactNode
}){
    //default state
    const [state, dispatch]=useReducer(reducer, initState)
    // useMemo=>cache the result
    // only when its dependency is changed, the object will be reloaded, and the contextValue changes
    const contextValue = useMemo(()=>{
        return {state, dispatch}
    },[state, dispatch])
    return (
        <AppContext.Provider value={contextValue}>
            {children}
        </AppContext.Provider>
    )
}