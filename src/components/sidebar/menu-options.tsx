'use client'

import { Agency, AgencySidebarOption, SubAccount, SubAccountSidebarOption } from '@prisma/client'
import React, { useEffect, useMemo, useState } from 'react'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { ChevronsUpDown, Compass, Menu, PlusCircleIcon } from 'lucide-react'
import clsx from 'clsx'
import { AspectRatio } from '../ui/aspect-ratio'
import Image from 'next/image'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command , CommandInput , CommandDialog , CommandItem , CommandSeparator, CommandList, CommandEmpty, CommandGroup} from '../ui/command'
import Link from 'next/link'
import { useModal } from '@/providers/modal-providers'
import CustomModal from '../global/custom-modal'
import SubAccountDetails from '../forms/subaccount-details'
import { Separator } from '../ui/separator'
import { icons } from '@/lib/constants'

type Props = {
    defaultOpen?:boolean
    subAccounts: SubAccount[]
    sideBarOpt: AgencySidebarOption[] | SubAccountSidebarOption[]
    sidebarLogo: string
    details: any
    user: any
    id: string
}

const MenuOptions = ({defaultOpen,sideBarOpt,subAccounts,sidebarLogo,details,user,id} : Props) => {
    // For hydration errors
    const [isMounted , setIsMounted] = useState(false);

    const {setOpen} = useModal()

    const openState = useMemo(() => defaultOpen?{open:true}: {}, [defaultOpen])

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if(!isMounted) return


  return(
     <Sheet
      modal={false}
      {...openState}
      >
        <SheetTrigger asChild className='absolute left-4 top-4 z-[100] md:!hidden flex'>

        <Button variant="outline" size="icon">
            <Menu/>
        </Button>
        </SheetTrigger>
        <SheetContent
        showX={true}
        side="left"
        className={clsx("bg-background/80 backdrop-blur-xl fixed top-0 border-r-[1] p-6", 
        {
            'hidden md:inline-block z-0 w-[300px]' : defaultOpen, 
            "inline-block md:hidden z-[100] w-full": !defaultOpen
        }
    )}
        >
            <div className='no-scrollbar'>
                <AspectRatio ratio={16 / 5}>
                    <Image
                    src={sidebarLogo}
                    alt='sidebarlogo'
                    fill
                    className=' rounded-md object-contain'
                    />
                </AspectRatio>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button className='w-full my-4 flex items-center justify-between py-8' variant="ghost">
                                <div className='flex items-center text-left gap-2'>
                                    <Compass/>
                                    <div className='flex flex-col'>
                                        {details.name}
                                        <span className='text-muted-foreground'>
                                            {details.address}
                                        </span>
                                    </div>
                                </div>
                                {/* ----------------------------------------- */}
                                <div>
                                    <ChevronsUpDown size={16} className='text-muted-foreground'/>
                                </div>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-80 h-80 mt-4 z-[200] no-scrollbar'>
                        {
                            <Command className='rounded-lg'>
                                <CommandInput placeholder='Search Account'/>
                                <CommandList className='pb-16'>
                                    <CommandEmpty>No Results Found</CommandEmpty>
                                    {(user?.role === "AGENCY_OWNER" || user?.role ===
                                     "AGENCY_ADMIN") && user?.Agency &&
                                     <CommandGroup
                                     heading= "Agency"
                                     >
                                        <CommandItem className='!bg-transparent my-2 text-primary border-[1px] border-border p-2 rounded-md hover:bg-muted cursor-pointer transition-all'>
                                            {defaultOpen ?
                                             <Link href={`/agency/${user?.Agency?.id}`} className='flex gap-4 w-full h-full'>
                                              <div className='relative w-16'>
                                                <Image
                                                src={user?.Agency.agencyLogo}
                                                alt='AgencyLogo'
                                                fill
                                                className='rounded-md object-contain'
                                                />
                                              </div>
                                              <div className='flex flex-col flex-1'>
                                            {user?.Agency?.name}
                                            <span className='text-muted-foreground'>
                                                {user?.Agency?.address}
                                            </span>
                                              </div>
                                             </Link> : (
                                                <SheetClose asChild>
                                        <Link href={`/agency/${user?.Agency?.id}`} className='flex gap-4 w-full h-full'>
                                              <div className='relative w-16'>
                                                <Image
                                                src={user?.Agency?.agencyLogo}
                                                alt='AgencyLogo'
                                                fill
                                                className='rounded-md object-contain'
                                                />
                                              </div>
                                              <div className='flex flex-col flex-1'>
                                            {user?.Agency?.name}
                                            <span className='text-muted-foreground'>
                                                 {user?.Agency?.address}
                                            </span>
                                              </div>
                                             </Link>
                                                </SheetClose>
                                             )
                                             }
                                        </CommandItem>
                                     </CommandGroup>
                                     }

                     {/* --------------------------------------------------------------------*/}

                     <CommandGroup heading="Accounts">
                        {!!subAccounts ? subAccounts.map((subaccount) =>
                        <CommandItem key={subaccount.id}>
                            {defaultOpen ?
                                             <Link href={`/subaccount/${subaccount.id}`} className='flex gap-4 w-full h-full'>
                                              <div className='relative w-16'>
                                                <Image
                                                src={subaccount.subAccountLogo}
                                                alt='AgencyLogo'
                                                fill
                                                className='rounded-md object-contain'
                                                />
                                              </div>
                                              <div className='flex flex-col flex-1'>
                                            {subaccount.name}
                                            <span className='text-muted-foreground'>
                                                {subaccount.address}
                                            </span>
                                              </div>
                                             </Link> : (
                                                <SheetClose asChild>
                                        <Link href={`/subaccount/${subaccount.id}`} className='flex gap-4 w-full h-full'>
                                              <div className='relative w-16 rouded-full'>
                                                <Image
                                                src={subaccount.subAccountLogo}
                                                alt='SubAccountLogo'
                                                fill
                                                className='rounded-full object-contain'
                                                />
                                              </div>
                                              <div className='flex flex-col flex-1'>
                                            {subaccount.name}
                                            <span className='text-muted-foreground'>
                                                {subaccount.address}
                                            </span>
                                              </div>
                                             </Link>
                                                </SheetClose>
                                             )
                                             }
                        </CommandItem>)
                        
                        : "No Accounts Found"
                        }
                     </CommandGroup>
                                </CommandList>

                                {(user?.role === 'AGENCY_OWNER' ||
                                user?.role === 'AGENCY_ADMIN') && (
                                <SheetClose>
                                    <Button className='w-full flex gap-2' onClick={() => {
                                            setOpen(
                                            <CustomModal
                                             title='Create A Sub Account'
                                             subheading='You can switch between your subaccounts , agency anytime from the sidebar'
                                            >
                                                <SubAccountDetails
                                                agencyDetails= {user?.Agency as Agency}
                                                userId={user?.id as string}
                                                userName={user?.name}
                                                />
                                            </CustomModal>
                                            )
                                    }}>
                                        <PlusCircleIcon size={15} />
                                        Create Sub Account
                                    </Button>
                                    </SheetClose>
                                )
                                }

                            </Command>
                        }
                    </PopoverContent>
                </Popover>

                        <p className='text-muted-foreground text-xs mb-2'>MENU LINKS</p>
                        <Separator className='mb-4'/>
                        <nav className='relative'>
                            <Command className='rounded-lg overflow-visible bg-transparent'>
                                <CommandInput placeholder='Search...'/>
                                <CommandList className='pb-16 overflow-visible py-5'>
                                <CommandEmpty>No Results Found</CommandEmpty>
                                <CommandGroup className='overflow-visible'>
                                {sideBarOpt.map((sidebarOptions) => {
                                        let val;
                                        const result = icons.find((icon) => icon.value===sidebarOptions.icon)

                                        if(result){
                                            val = <result.path/>
                                        }
                                        return (
                                            <CommandItem key={sidebarOptions.id} className='md:w-[320px] w-full'>
                                                <Link
                                                href={sidebarOptions.link}
                                                className='flex items-center gap-2 hover:bg-transparent rounded-md transition-all md:w-full w-[320px]'
                                                >
                                                {val}
                                                <span>
                                                {sidebarOptions.name}
                                                </span>
                                                </Link>
                                            </CommandItem>
                                        )
                                })}
                                </CommandGroup>
                                </CommandList>
                            </Command>
                        </nav>
            </div>
        </SheetContent>
     </Sheet>
        )
  
}

export default MenuOptions
