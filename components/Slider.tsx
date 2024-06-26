'use client';

import React, { useState,useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Image from "next/image"
import {useRouter} from "next/navigation"

interface SliderProps {
  images: string[];
  slug: Number | string
}

function Slider({ images, slug }: SliderProps) {
  const router = useRouter()

  const [currentIndex, setCurrentIndex] = useState(0);
 
   
   
    
    
  // useEffect(() => {
      
  //   if (!images || images.length === 0) {
  //     // Handle the case when images is undefined or empty
  //     return; // or display a placeholder, show an error, etc.
  // }
  //       // Function to advance to the next slide
  //       const nextSlide = () => {
  //       // setTransitionClass('flex transition-transform ease-in-out duration-500 transform translate-x-[-200%]')
  //         const isLastSlide = currentIndex === images.length - 1;
  //         const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //         setCurrentIndex(newIndex);
  //       };
    
  //       // Set up interval to advance slides every 5 seconds
  //       const intervalId = setInterval(() => {
  //         nextSlide();
  //       }, 5000);

  //       // Reset transition class after the delay (adjust as needed)
  //   // const timeoutId = setTimeout(() => {
  //   //     setTransitionClass('transition-transform');
  //   //   }, 500);
    
  //       // Clean up interval on component unmount
  //       return () => {
  //           // clearTimeout(timeoutId);
  //           clearInterval(intervalId);
  //       }
  //     }, [currentIndex, images.length]);

  // const prevSlide = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const nextSlide = () => {
  //   const isLastSlide = currentIndex === images.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  // const goToSlide = (slideIndex:number) => {
  //   setCurrentIndex(slideIndex);
  // };
  const validIndex = Math.max(0, Math.min(currentIndex, images.length - 1));
    return (
      
<>
       
           <Image
           src={`/upload_img/${images[validIndex]}`}
          // src="https://trackrental.com/trackrental/upload_img/162CRES_1_1.JPG?1615901839"

          //  alt={`Slide ${validIndex + 1}`}
          alt="Listing"
           fill
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='w-full h-full bg-center bg-cover transition ease-in-out duration-700 '
                onClick={() => router.push(`/saratoga-rental-homes-listing-${slug}`)}   
         />
   
 
      {/* Left Arrow */}
      {/* <div onClick={prevSlide}  className='absolute top-[90%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
        <BsChevronCompactLeft size={16} />
      </div> */}
      {/* Right Arrow */}
      {/* <div className='absolute top-[90%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={16} />
      </div> */}
      {/* <div className='absolute translate-y-40 translate-x-16 flex justify-center py-2'>
        {images?.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled className="bg-white h-[4px] text-white mr-2" />
          </div>
        ))}
          </div> */}
      
    </>
         
  
  );
}

export default Slider;