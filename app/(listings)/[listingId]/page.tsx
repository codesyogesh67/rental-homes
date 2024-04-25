

import React, {useState, useEffect} from 'react'
import Container from '@/components/Container'
import ListingHead from '@/components/listings/ListingHead'

import { getListingByIndex } from '@/actions/get-listings'

import ListingFeatures from '@/components/listings/ListingFeatures'
import {listingParamProps} from '@/types'
import ListingInfo from '@/components/listings/ListingInfo'
import { ListingDataProps } from '@/types/index'
import {demodata} from '@/lib/images-db'

interface ListingProps {
    params: {
        id: string
    }
  
    
}



const ListingPage =  async({params :{listingId}}:listingParamProps) => {

   

     // Extract the number using regular expression
     const match = listingId.match(/\d+/);
     
     // Check if a match is found and extract the number
    const indexNumber = match ? match[0] : null;
    const listing = await getListingByIndex(Number(indexNumber))

    const listingData = listing as ListingDataProps;
    


    
    // const { title, prop_addr, pricew, prices, bedroom, bath, avail, img1, img2, img3,img4,img5,img6,img7,img8,img9 } = listingData;
      
 
    const { title, tags } = demodata;
  
 
    return (
       
        <Container>
      
                <div className="flex flex-row" >
                    <div className="flex-1 flex flex-col gap-8">
            <ListingHead
              title={title}
            //   images={[img1 || '', img2 || '', img3 || '', img1 || '', img2 || '', img3 || '', img4 || '', img5 || '', img6 || '', img7 || '', img8 || '', img9 || '']}
              images={tags}
                        // locationValue={prop_addr}
                locationValue="170 Jefferson Street Saratoga Springs NY 12866"             
            />
                    <ListingFeatures />

                    {/* property details */}
                    <div className="bg-white border border-black-100 p-4">
                        <p>Property Details</p>
                        <p>
                      
**Available for Track Season 2024** Enjoy your summer in this wonderful, newly renovated, waterfront home! With 3 bedrooms and 2.5 bathrooms, you and your group will have more than enough space to relax. The home offers modern finishes and new appliances. the 3 bedrooms have a king-sized bed, 1 queen, and 2 twins. Only 6 minutes from the track, you will be just a short drive away from the excitement. not only will you have lake access and a dock, but there is also a boat slip available for your use! Washer/dryer, central A/C, and wifi are all included. *No Pets Please*
                        </p>
                    </div>

                    {/* Sleeping Arrangements */}
                  
                    <div className="bg-white border border-black-100 p-4">
                        <p className="text-lg font-bold text-green py-4">Sleeping Arrangements</p>
                        <div className="flex flex-row gap-4">
                            {/* {bedrooms.map((each, index) => (
                                 <div className="border border-green p-10 rounded" key={index}>
                                    <p>{each.title}</p>
                                    {each.features.map((feature, index) => (
                                        <p key={index}>{feature}</p>
                                    ))}
                             
                             </div>
                            ))} */}
                       
                        
                      
                            </div>

                    </div>
                    
                    </div>    
                    <div>
                        <ListingInfo />
                    </div>
            </div> 
           
        
            </Container>
      
    )
}

export default ListingPage
