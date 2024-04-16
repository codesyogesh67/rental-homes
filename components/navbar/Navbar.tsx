'use client';

import React from 'react'
import Container from '@/components/Container'
import Link from "next/link";
import MenuItem from './MenuItem';

import {useRouter} from 'next/navigation'

import MobileMenu from './MobileMenu';
import {navLinks} from "@/constants"



const Navbar = () => {
    const router = useRouter()

    return (
        <div className="w-full bg-green z-50 shadow-sm text-white">
            <div className="py-4 border-b-[1px]"
            >
                <Container>
                    <div className="flex flex-row items-center justify-between">

       
                    <div
                        className="
                        hidden 
                        md:flex
                        flex-row
                        items-center
                        justify-center
                        gap-3
                        lg:gap-10
                        
                        
                        ">
                       
                        {navLinks.map((nav) => (
                            //    <Link href={nav.href} className="ml-4 flex lg:ml-0 gap-x-2">
                            //     <p className="font-bold text-xl">
                            //         {nav.title}
                            //    </p>
                            //                </Link>
                            <MenuItem label={nav.title} onClick={() => router.push(nav.href)} key={nav.title} />
                            ))}
   

                    </div>
                    {/* <RxHamburgerMenu className="text-black w-10 h-6 md:hidden cursor-pointer text-bold" /> */}
                                <MobileMenu />
                    </div>
                </Container>

            </div>
     
        </div>
    )
}

export default Navbar
