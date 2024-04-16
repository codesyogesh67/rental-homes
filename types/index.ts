
  export type GetAllEventsParams = {
    query: string
    // category: string
    limit: number
    // page: number
  }

   
  export type listingParamProps = {
    params: { listingId: string }
  }

  export type SearchParamProps = {
 
    searchParams: {  
      leaseType: string
      startDateTime: Date 
      endDateTime: Date 
      bedroomsCount: string
      bathroomsCount: string
      page: Number
      limit: Number
    }
  }


  export type GetAllListingsParams = {
    query: {
      leaseType: string
      startDateTime: Date
      endDateTime: Date
      bedroomsCount: string
      bathroomsCount: string
     
      
    }
    limit: number
    page: number
  }


export type ListingDataProps = {
  title: string,
  prop_addr: string,
  pricew: string | null,
  prices: string | null,
  bedroom: string,
  bath: string,
  avail: string,
  img1: string | null,
  img2: string | null,
  img3: string | null,
  img4: string | null,
  img5: string | null,
  img6: string | null,
  img7: string | null,
  img8: string | null,
  img9: string | null,
  
}
  
export type SubscribeFormProps = {
  firstName: string,
  lastName: string,
  email: string
}

export type UrlQueryParams = {
  params: string
  keys: string | string[]
  value: string | null | string[]
}

export type RemoveUrlQueryParams = {
  params: string
  keysToRemove: string | string[]
}