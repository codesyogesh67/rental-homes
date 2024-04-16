import { db } from '@/lib/db';



export const getListings = () => {
    const listings = db.property.findMany(
        {
            where: {
              active: 'Y'
          }
      }  
    )
    return listings
   
}