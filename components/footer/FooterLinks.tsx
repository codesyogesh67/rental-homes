import React from 'react'
import Image from "next/image"
import { footerlinks } from '../../constants/index'


interface Props {
    
}

const FooterLinks = (props: Props) => {
    return (
        <div className="flex flex-col md:flex-row gap-8 bg-green text-white p-16 px-4 md:p-16 md:px-10 border-b border-white">

            {/* logo */}
            <div className="flex flex-col md:items-start items-center">
                <p className="mb-6 text-xl font-bold">Do you want to buy or sell a home?</p>
        
                <Image
                                src="/logo-reantal.png"
                                width={200}
                                height={200}
                    alt="Rental Logo"
                    priority
                />
                            <Image
                                src="/equal-housing-new.png"
                                width={50}
                    height={50}
                    priority
                    alt="Rental Logo"
                    className="mt-4"
                                />
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center gap-8">
                {footerlinks.map((each, index) => (
                    <div className="flex flex-col gap-2" key={index}>
                        <p className="text-xl font-bold">
                        {each.header}
                        </p>
                       
                        {each.subHeader.map((link, index) => (
                            <p key={index} className="text-sm">{link}</p>
                        ))}
                            </div>
                     
                ))}
            </div>
        </div>
    )
}

export default FooterLinks
