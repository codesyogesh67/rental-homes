'use client'

import React,{useState,useEffect} from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
import { useRouter, useSearchParams } from "next/navigation";


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


const ListingPagination:React.FC<ListingPaginationProps>=({data,totalLength} ) => {
    const [isClient, setIsClient] = useState(false);

  const searchParams = useSearchParams()
  
  const currentPage = searchParams.get('page') ?? '1'
  const listingsPerPage = 3

    useEffect(() => {
        setIsClient(true)
    },[])
  
    // const [currentPage, setCurrentPage] = useState(1);

    const lastPostIndex = currentPage * listingsPerPage;
    const firstPostIndex = lastPostIndex - listingsPerPage;
    const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
  
    return (
      <>
        {/* <button onClick={resetLocalStorage}>Reset Local Storage</button> */}
        {/* {isClient ? ( */}
          <>
           
            <PaginationSection
              totalPosts={totalLength}
            listingsPerPage={3}
              currentPage={currentPage}
            
            />
          </>
        {/* // ) : (
        //             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full p-10">
        //                 Pagination Not Available
        //   </div>
        // )} */}
      </>
    );
  }




const PaginationSection = ({ totalPosts, listingsPerPage, currentPage }: PaginationSectionProps) => {
  console.log("total length of data",totalPosts)

  const [isClient, setIsClient] = useState(false);


  const searchParams = useSearchParams()
  const router = useRouter()


  const pageNumbers: number[] = [];
    for (let i = 1; i <= Math.ceil(totalPosts / listingsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const maxPageNum = 5; // Maximum page numbers to display at once
    const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible
  
    let activePages = pageNumbers.slice(
      Math.max(0, currentPage - 1 - pageNumLimit),
      Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
    );
  
 

    const changePage = (page: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      router.push("?" + params.toString());
    };
  
    // const handleNextPage = () => {
    //   if (currentPage < pageNumbers.length) {
    //     setCurrentPage(currentPage + 1);
    //   }
    // };
  
    // const handlePrevPage = () => {
    //   if (currentPage > 1) {
    //     setCurrentPage(currentPage - 1);
    //   }
    // };

//     // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={currentPage === page ? "bg-neutral-100 rounded-md cursor-pointer": "cursor-pointer"}
      >
        <PaginationLink onClick={() => changePage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    // if (activePages[0] > 1) {
    //   renderedPages.unshift(
    //     <PaginationEllipsis
    //       key="ellipsis-start"
    //       onClick={() => changePage(activePages[0] - 1)}
    //     />
    //   );
    // }

    // Add ellipsis at the end if necessary
    // if (activePages[activePages.length - 1] < pageNumbers.length) {
    //   renderedPages.push(
    //     <PaginationEllipsis
    //       key="ellipsis-end"
    //       onClick={() =>
    //         changePage(activePages[activePages.length - 1] + 1)
    //       }
    //     />
    //   );
    // }

    return renderedPages;
  };



    return (
      <Pagination>
    <PaginationContent className="">
      <PaginationItem className="cursor-pointer">
                    <PaginationPrevious onClick={() => Number(currentPage) > 1 && changePage(currentPage - 1)} />
      </PaginationItem>
    
          {renderPages()}
      {/* <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem> */}
     <PaginationItem className="cursor-pointer">
        <PaginationNext onClick={() => Number(currentPage) < pageNumbers.length && changePage(Number(currentPage) + 1)} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
    )
}



export default ListingPagination;
