"use client"
import { useModal } from '@/providers/modal-providers'
import React from 'react'
import { Button } from '../ui/button'
import CustomModal from '../global/custom-modal'
import UploadMediaForm from '../forms/upload-media-form'

type Props = {
    subaccountId: string
}

const MediaUploadButton = ({subaccountId}: Props) => {
    const {isOpen, setOpen, setClose} = useModal()
  return (
    <Button onClick={() => {
        setOpen(
            <CustomModal
            title='Upload Media'
            subheading='You can upload your media files here'
            >
                <UploadMediaForm subaccountId={subaccountId}></UploadMediaForm>
            </CustomModal>
        )
    }}
    className='bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-2 px-4 rounded transform hover:rotate-2 transition duration-300 ease-in-out'
    >
        Upload
    </Button>
  )
}

export default MediaUploadButton