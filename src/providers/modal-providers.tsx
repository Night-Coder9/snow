"use client"

import { PricesList, TicketDetails } from "@/lib/types";
import { Agency, Contact, Plan, User } from "@prisma/client"
import React, { createContext, useContext, useEffect, useState } from "react";

interface ModalProvidersProps {
    children: React.ReactNode
}


export type ModalData = {
    user?: User;
    agency?: Agency
    tickets?: TicketDetails[0]
    contact?: Contact
    plans?:{
        defaultPriceId: Plan
        plans: PricesList['data']
    }
}

type ModalContextData = {
    data: ModalData
    isOpen: boolean
    setOpen: (modal: React.ReactNode,fetchData?:()=>Promise<any>) => void
    setClose: () => void 
}

export const ModalContext = createContext<ModalContextData>({
    data: {},
    isOpen: false,
    setOpen: (modal: React.ReactNode, fetchData?: () => Promise<any>) => {},
    setClose: () => {}

})

const ModalProvider: React.FC<ModalProvidersProps> = ({children}) => {
        const [isOpen, setIsOpen] = useState(false)
        const [data, setData] = useState<ModalData>({})
        const [showingModal, setShowingModal] = useState<React.ReactNode>(null)
        const [isMounted, setIsMounted] = useState(false)

        useEffect(() => {
            setIsMounted(true);
        }, [])


    const setOpen = async (modal: React.ReactNode, fetchData?: () => Promise<any>) => {
        if(modal){
            if(fetchData) {
                setData({...data,...(await fetchData())} || {})
            }
            setShowingModal(modal)
            setIsOpen(true)
        }
    }

    const setClose = () => {
        setIsOpen(false)
        setData({})
    }

    if(!isMounted) {
        return null
    }

    return (<ModalContext.Provider value={{data , setClose , setOpen , isOpen}}>
            {children}
            {showingModal}
    </ModalContext.Provider>)
}


export const useModal = () => {
    const context = useContext(ModalContext)
    if(!context) {
        throw new Error("UseModal must be used within the Provider")
    }
    return context
}

export default ModalProvider