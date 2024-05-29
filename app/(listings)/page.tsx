

import React from 'react'
import ListingCard from '@/components/listings/ListingCard'

import { getListings } from '@/actions/get-listings';
import SearchForm from '@/components/forms/SearchForm';
import {SearchParamProps} from '@/types'
import Container from '@/components/Container';
import CalendarModal from '@/components/modals/CalendarModal';
import {demodata} from "@/lib/images-db"
import AdvancedSearchForm from '@/components/forms/AdvancedSearchForm';
// import ListingPagination from '@/components/Pagination';
import  ListingPagination  from '@/components/Pagination';
import MapComponent from '@/components/MapComponent'
import { getLocations } from '@/actions/get-location';



const Listings = async ({ searchParams }: SearchParamProps) => {
  // const searchText = (searchParams?.query as string) || '';

  // const [currentPage, setCurrentPage] = useState(1);

  
  const data = await getListings({
    query: searchParams,
    // page: page,
    // limit: 3
  })
  const { listings, totalLength } = data;

  
  // const locations = await getLocations(listings);



 
  return (
    <Container>
    <div className="pt-20 pb-12">
    <p className="uppercase text-2xl font-medium">Featured Listings:</p>
    <div className="w-36 h-2 bg-lightgreen my-4 mb-10 " />
    <div className="flex flex-col lg:flex-row">
    <div className="flex-1 md:mr-6 grid gap-8 mb-8">
   
        {
          listings.map((each, index) => (
            <ListingCard key={index} data={each} slug={index} />
          ))
        }
        </div>
     
   
      <div className="flex-[0.4] lg:max-w-[300px] flex flex-col items-center">
        <div className="w-full max-w-[500px]">
          
        <SearchForm />
   </div>
   <div className="w-full max-w-[500px] mt-8 lg:mt-4">
        {/* <AdvancedSearchForm /> */}
        </div>
     
        </div>
    </div>
   
      </div>
      <div className="mb-20">
        <ListingPagination data={listings} totalLength={totalLength}
          
        />
        {/* <ListingPagination /> */}
      </div>

  


  <div className="h-[300px] md:h-[500px] my-10">

        {/* <Map data={listings} /> */}
        {/* <MapComponent data={locations} /> */}
      </div>
      <CalendarModal listings={listings}/>
  </Container>
    )
}

export default Listings
