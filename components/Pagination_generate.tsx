'use client'

import React,{useState, useEffect} from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { demodata } from "@/lib/images-db"
import { db } from "@/lib/db"
import {useSearchParams, useRouter} from "next/navigation"


interface Listing {
  title: string;
  prop_addr: string;
  img1: string | null;
  img2: string | null;
  img3: string | null;
  bath: string | null;
  bedroom: string | null;
  pricew: string | null;
  prices: string | null;
  avail: string;
  // Add other properties as needed
}
  



interface PaginationSectionProps {
    totalPosts: number ;
    listingsPerPage: number;
    currentPage: number;
    

    
}
interface ListingPaginationProps {
  data: Listing[];
  totalLength: number
}





const ListingPagination: React.FC<ListingPaginationProps> = ({ data,totalLength }) => {

  const [isClient, setIsClient] = useState(false);


  const searchParams = useSearchParams()
  const router = useRouter()



  
  const currentPage = searchParams.get('page') ?? '1'
  

  

  // const maxPageCount = 5; // Maximum page numbers to display at once
    

  const generatePaginationLinks = () => {
    console.log("pagecount",pageCount)
    const paginationLinks = [];
    // const leftEllipsis = currentPage > 4;
    const rightEllipsis = currentPage < pageCount - 1;;

    for (let i = 1; i <= pageCount; i++) {
      if (
        i === 1 ||
        i === pageCount ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        paginationLinks.push(
          <PaginationLink
            key={i}
            onClick={() => changePage(i)}
            isActive={currentPage === i}
          >
            {i}
          </PaginationLink>
        );
      }
    }

    // if (leftEllipsis) {
    //   paginationLinks.splice(1, 0, <PaginationEllipsis key="left" />);
    // }
    // if (rightEllipsis) {
    //   paginationLinks.splice(
    //     paginationLinks.length - 1,
    //     0,
    //     <PaginationEllipsis key="right" />
    //   );
    // }
    console.log("paginationLinks",paginationLinks)

    return paginationLinks;
  };
  let pageSize = 5

  const pageCount = Math.ceil(totalLength / pageSize);

  if (pageCount <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };

    return (
      <Pagination>
    <PaginationContent className="">
      <PaginationItem className="cursor-pointer">
            <PaginationPrevious
              disabled={currentPage <= 1}
              onClick={() => changePage(currentPage - 1)} />
      </PaginationItem>
          {generatePaginationLinks()}
      
     <PaginationItem className="cursor-pointer">
            <PaginationNext
              disabled={currentPage === pageCount}
              onClick={() => changePage(Number(currentPage) + 1)} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
    )
}



export default ListingPagination;