import { db } from '@/lib/db';


interface IListingsParams {
  query: {
    leaseType?: string;
    // startDateTime,
    // endDateTime,
  bathroomsCount?: number;
    bedroomsCount?: number;
    page?: number;
  }
 
}





export const getListings = async (params: IListingsParams) => {
  const page = Number(params?.query.page) || 1;
  const limit = 3;
  try {
    const { query: {
      leaseType, 
      bathroomsCount,
      bedroomsCount
    }  
    } = params;
  
    let query: any = {active: 'Y'};

   

    if (leaseType) {

      if (params.query.leaseType === 'Season') {
     
        query.prices = { not: "" }
      }
       else if (params.query.leaseType === 'Weekly') {

        query.pricew = { not: ""}
      }
    }


    if (bedroomsCount) {
      const minBedrooms = bedroomsCount.toString()
      query.bedroom = {
        gte: minBedrooms
      }
    }

   

    if (bathroomsCount) {
      const minBathrooms = bathroomsCount.toString()
      query.bath = {
        gte: minBathrooms
      }
    }


    const listings = await db.property.findMany(
      
      {
        where: query,

        take: limit,
        skip: (page - 1) * limit,
        
      },
     
    )
  
    // Fetch the total length of the dataset
    const totalLength = await db.property.count({
      where: 
        query
      
    });
    
    

    return { listings, totalLength }
  }
    catch (error: any) {
      throw new Error(error);
    }
   
}

