import { AlertDescription } from '@/components/ui/alert'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { getAuthUserDetails } from '@/lib/queries'
import { SubAccount } from '@prisma/client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import DeleteButton from './_components/delete-button'
import CreateSubAccountButton from './_components/create-subaccount-btn'

type Props = {
    params: {agencyId: string}
}

const AllSubAccountsPage = async({params}: Props) => {

    const user = await getAuthUserDetails();
    if(!user) {
        return
    }
  return (
    <AlertDialog>
        <div className='flex flex-col'>
        {/* <Button className='mb-2 bg-gradient-to-r from-indigo-900 to-violet-900 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg'>Create</Button> */}

        <CreateSubAccountButton user={user} id={params.agencyId}
            className='w-[200px] self-end m-6 bg-gradient-to-r from-indigo-900 to-violet-900 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out hover:brightness-110 hover:shadow-lg'
        />

        <Command className='rounded-lg bg-transparent'>
            <CommandInput placeholder='Search Sub Account'/>
            <CommandList>
                    <CommandGroup heading="Sub Accounts">
                    {!!user.Agency?.SubAccount.length ?
                     user.Agency.SubAccount.map((subaccount: SubAccount) => (
                        <CommandItem key={subaccount.id}
                        className="h-32 !bg-background my-2 text-primary border-[1px] border-border p-4 rounded-lg hover:!bg-background cursor-pointer transition-all"
                        >
                            <Link href={`/subaccount/${subaccount.id}`} className='flex gap-4 w-full h-full'>
                                <div className='relative w-32'>
                                    <Image
                                    src={subaccount.subAccountLogo}
                                    alt='subaccountLogo'
                                    fill
                                    className='rounded-md object-contain bg-muted/50 p-4'
                                    />
                                </div>

                                <div className='flex flex-col justify-between'>
                                 <div className='flex flex-col'>
                                        {subaccount.name}
                                        <span className='text-muted-foreground text-xs'>
                                            {subaccount.address}
                                        </span>
                                 </div>
                                </div>
                            </Link>
                            <AlertDialogTrigger asChild>
                                <Button size="sm" variant="destructive" className='text-red-600 w-20 hover:bg-red-600 hover:text-white'>
                                     Delete
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogTitle className='text-left'>
                                    <AlertDialogTitle>
                                        Are You Sure About It Bro ?
                                    </AlertDialogTitle>
                                    <AlertDescription className='text-left'>
                                This Action cannot be Undone. This will permanently delete the sub Account and all data related to the sub account
                                    </AlertDescription>
                                </AlertDialogTitle>
                                <AlertDialogFooter className='flex items-center'>
                                    <AlertDialogCancel className='mb-2'>Cancel</AlertDialogCancel>
                                    <AlertDialogAction className='bg-destructive hover:bg-destructive'>
                                        <DeleteButton subaccountId = {subaccount.id}/>
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </CommandItem>
                     ))
                    : <div className='text-muted-foreground text-center p-4'>
                        No Sub Accounts
                    </div>
                    }
                    </CommandGroup>
            </CommandList>
        </Command>
        </div>
    </AlertDialog>
  )
}

export default AllSubAccountsPage