'use client';

import {useState, useEffect} from 'react'
import Image from "next/image";
import Heading from "@/components/Heading";
import {useRouter} from 'next/navigation'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';


interface ListingHeadProps {
  title: string;
  locationValue: string;
  images:string[] | null

}


const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  locationValue,
  images

}) => {
  const [selectedImage, setSelectedImage] = useState<string>(images![0]); // Initialize selected image with the first image
  const [currentIndex, setCurrentIndex] = useState(0);


  const handleClick = (index: number) => {
    if (images) {
      setSelectedImage(images[index]);
      setCurrentIndex(index) // Update selected image when a small image is clicked
    }

  
  };
 
  const router = useRouter()
   
  if (!images || images.length === 0) {
      // Handle the case when images is undefined or empty
      return null; // or display a placeholder, show an error, etc.
  }
 

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const nextSlide = () => {
  const isLastSlide = currentIndex === images.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

const goToSlide = (slideIndex:number) => {
  setCurrentIndex(slideIndex);
};
const validIndex = Math.max(0, Math.min(currentIndex, images.length - 1));
  


  return ( 
    <>
      <Heading
        title={title}
        subtitle={locationValue}
      />
    <div
        className="
          w-full
          h-[60vh]
          rounded-xl
          relative
     
          flex justify-center
    
        "
      >
       <Image
           src={`/upload_img/${images[validIndex]}`}
           alt={`Slide ${validIndex + 1}`}
          height={500}
          width={860}
        
                 
         />
   
 
      {/* Left Arrow */}
      <div onClick={prevSlide}  className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
        <BsChevronCompactLeft size={16} />
      </div>
      {/* Right Arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-2xl rounded-full p-2 bg-black/60 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={16} />
      </div>
    
      </div>
      <div
           className="
            flex flex-row
           "
          
         >
        {images.map((each, index) => (
          
 
        <Image
          src={`/upload_img/${each}`}
          width={50}
          height={50}
          className="m-1 cursor-pointer"
            alt="Image"
            key={index}
            onClick={() => handleClick(index)}
        />
     
        ))}
           </div>
      
    </>
   );
}
 
export default ListingHead;
