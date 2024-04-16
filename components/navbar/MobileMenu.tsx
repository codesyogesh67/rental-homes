'use client';

import {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import MenuItem from './MenuItem';

import { useRouter } from 'next/navigation'
import {navLinks} from "@/constants"


const MobileMenu = () => {
   const router = useRouter()
    const [isOpen, setIsOpen] = useState(false)
    
    return (
        <div className="block md:hidden relative">
    <RxHamburgerMenu onClick={() => setIsOpen(!isOpen)} className="text-black w-10 h-6 md:hidden cursor-pointer text-bold" />

            {isOpen && (

                
                <div 
                className="
                absolute 
                rounded-xl 
                shadow-md
                w-[40vw]
                md:w-3/4 
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm
                "
                >
                    {navLinks?.map((nav) => (
                        <MenuItem key={nav.title} label={nav.title} onClick={() => router.push(nav.href)} />
                ))}
                </div>
            )}
            </div>
    )
}

export default MobileMenu;