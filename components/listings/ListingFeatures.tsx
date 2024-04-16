'use client'

import React, { useState } from 'react'
import { featuresDetails } from '../../constants/index'
import { Button } from '@/components/ui/button'

interface Props {
    
}

const ListingFeatures = (props: Props) => {
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
        setShowAll(prevState => !prevState);
    };
    return (
        <div className="bg-white border border-black-100 p-4">
            <p className="text-lg font-bold mb-5">Amenities &amp; Features</p>
            <div className="flex flex-col gap-3">
            {featuresDetails.slice(0, showAll ? featuresDetails.length : 2).map((category, index) => (
                <div key={index} className="flex flex-col">

                <p className="text-lg text-green">{category.title}</p>
                <div className="flex flex-row gap-1">
                    {category.features.map((feature, index) => (
                        <p key={index} className="p-2 text-sm">{feature}</p>
                    ))
                        }
                        </div>
                </div>
                
                ))}
            </div>
            <Button onClick={toggleShowAll} className="bg-white text-black border border-green mt-4 hover:text-white hover:bg-green">{showAll ? 'Show Less' : 'Show More'}</Button>
        </div>
        
       
    )
}

export default ListingFeatures
