'use client';

import React from 'react'
import Container from '@/components/Container'

import Image from "next/image"

import {useRouter} from 'next/navigation'
import FooterLinks from './FooterLinks';
import SubscribeForm from '../forms/SubscribeForm';
import NewsletterForm from '../forms/NewsletterForm';

// import Links from './Links';

const Footer = () => {
    const router = useRouter()

    return (
        <div className="w-full z-50 shadow-sm text-black bg-green">
            <div className="py-4 border-b-[1px]"
            >
                <Container>

                    <FooterLinks />
                    <SubscribeForm />
                   {/* <NewsletterForm /> */}
                             
                             
                             

                      
             
                </Container>

            </div>
     
        </div>
    )
}

export default Footer
