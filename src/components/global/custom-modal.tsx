"use client"

import { useModal } from '@/providers/modal-providers'
import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog'

type Props = {
    title: string
    subheading: string
    children: React.ReactNode
    defaultOpen?: boolean
}

const CustomModal = ({title,subheading,children,defaultOpen}: Props) => {

    const {isOpen , setClose } = useModal()
  return (
    <Dialog open={isOpen || defaultOpen} onOpenChange={setClose}>
        <DialogContent className=' md:max-h-[580px] overflow-x-hiddenh-screen bg-card overflow-y-auto no-scrollbar'>
                <DialogHeader className='pt-8 text-left'>
                    <DialogTitle className='text-2xl font-bond'>
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {subheading}
                    </DialogDescription>
                    {children}
                </DialogHeader>
        </DialogContent>
    </Dialog>
  )
}

export default CustomModal