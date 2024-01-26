"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useCallback, useContext, useMemo, useReducer, useState } from "react"

//callback function, receove any type of data as input
export type EventListner = (data?: any) => void

type EventBusContextProps = {
    subscribe: (event: string, callback: EventListner) => void
    unsubscribe: (event: string, callback: EventListner) => void
    //event: type of event, data: event's data
    publish: (event: string, data?: any) => void
}

const EventBusContext = createContext<EventBusContextProps>(null!)

export function useEventBusContext() {
    return useContext(EventBusContext);
}

// receive children property, nest children components
export default function EventBusContextProvider({
    children
}: {
    children: ReactNode
}) {
    //state which saves the callback function, according to the event type
    const [listeners, setListeners] = useState<Record<string, EventListener[]>>({});

    //useCallback(function, depended_array): the function only changes if one of the depended_array has changed

    const subscribe = useCallback((event: string, callback: EventListner) => {

        //if event has array sorted in listeners
        if (!listeners[event]) {
            //if not, create first
            listeners[event] = []
        }
        //add current callback function into the array
        listeners[event].push(callback)
        setListeners({ ...listeners })
    }, [listeners])

    const unsubscribe = useCallback((event: string, callback: EventListner) => {
        if (listeners[event]) {
            //remove callback function
            listeners[event] = listeners[event].filter((cb) => cb !== callback)
            setListeners({ ...listeners })
        }
    }, [listeners])

    const publish = useCallback((event: string, data?: any) => {
        if (listeners[event]) {
            //call event functions stored in the array, with this data
            listeners[event].forEach((callback) => callback(data))
        }
    }, [listeners])


    // useMemo=>cache the result
    // only when its dependency is changed, the object will be reloaded, and the contextValue changes
    const contextValue = useMemo(() => {
        return { subscribe, unsubscribe, publish }
    }, [subscribe, unsubscribe, publish])
    return (
        <EventBusContext.Provider value={contextValue}>
            {children}
        </EventBusContext.Provider>
    )
}