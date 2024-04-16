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
import {demodata} from "@/lib/images-db"


interface ListingPaginationProps {
    totalPosts: number ;
    postsPerPage: number;
    currentPage: number;
    setCurrentPage: any;
    
}


export default function ListingPagination() {
    const [isClient, setIsClient] = useState(false);


    useEffect(() => {
        setIsClient(true)
    },[])
  
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(2);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = demodata.slice(firstPostIndex, lastPostIndex);
  
    return (
      <>
        {/* <button onClick={resetLocalStorage}>Reset Local Storage</button> */}
        {isClient ? (
          <>
           
            <PaginationSection
              totalPosts={demodata.length}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </>
        ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 w-full p-10">
                        Pagination Not Available
          </div>
        )}
      </>
    );
  }








const PaginationSection = ({totalPosts,postsPerPage, currentPage,setCurrentPage}:ListingPaginationProps ) => {

  const [isClient, setIsClient] = useState(false);


    


    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const maxPageNum = 5; // Maximum page numbers to display at once
    const pageNumLimit = Math.floor(maxPageNum / 2); // Current page should be in the middle if possible
  
    let activePages = pageNumbers.slice(
      Math.max(0, currentPage - 1 - pageNumLimit),
      Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
    );
  
    const handleNextPage = () => {
      if (currentPage < pageNumbers.length) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevPage = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };

    // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={currentPage === page ? "bg-neutral-100 rounded-md cursor-pointer": "cursor-pointer"}
      >
        <PaginationLink onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      );
    }

    return renderedPages;
  };


    return (
      <Pagination>
    <PaginationContent className="">
      <PaginationItem className="cursor-pointer">
                    <PaginationPrevious oClick={handlePrevPage} />
      </PaginationItem>
      {renderPages()}
      {/* <PaginationItem>
        <PaginationEllipsis />
      </PaginationItem> */}
     <PaginationItem className="cursor-pointer">
        <PaginationNext oClick={handleNextPage} />
      </PaginationItem>
    </PaginationContent>
  </Pagination>
    )
}



