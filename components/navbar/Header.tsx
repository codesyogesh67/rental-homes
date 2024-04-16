'use client';

import React from 'react'
import Container from '@/components/Container'

import Image from "next/image"

import {useRouter} from 'next/navigation'

import Links from './Links';

const Header = () => {
    const router = useRouter()

    return (
        <div className="w-full z-50 shadow-sm text-black">
            <div className="py-4 border-b-[1px]"
            >
                <Container>
                    <div className="flex flex-col md:flex-row gap-8 items-center justify-between">

                <Links />
                   
                              <Image
                                src="/logo-reantal.png"
                                width={500}
                                height={500}
                            alt="Rental Logo"
                            priority
                                />
                             
                             

                        <div className="flex flex-col items-center justify-center">
                            <p className="text-lg">Questions?
                             
                                </p>
                            <p className="text-2xl">
                                Call us at:
                                </p>
                            <span className="text-4xl">
                            (518) 583-4970
                            </span>
                        </div>
             
                    </div>
                </Container>

            </div>
     
        </div>
    )
}

export default Header
