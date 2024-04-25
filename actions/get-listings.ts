import { GetAllPropertiesParams } from '@/types/index';
import { db } from '@/lib/db';



export const getListings = async ({ page,limit }:GetAllPropertiesParams) => {
    const listings = await db.property.findMany(
      
        {
            where: {
              active: 'Y'
            },
            take: limit,
        skip: (page - 1) * limit,
        
      },
     
    )
  
  // Fetch the total length of the dataset
const totalLength = await db.property.count({
  where: {
    active: 'Y'
  }
});
    
    

    // const selected = await db.property.findMany({
    //     where: {
    //         active: 'Y'
    //     },
    //     select: {
    //         id: true,
    //         title:true
    //     },
    //     take: limit,
    //     skip:(page-1)*limit
    // })

    // console.log("selected", selected)
    // console.log("selected",selected.length)
  return { listings, totalLength }
   
}

// await db.property?.findMany({
//     select: listing_selectives,
//     take: limit,
//     skip: (page - 1) * limit,
//   });