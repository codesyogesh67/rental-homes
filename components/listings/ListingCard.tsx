
'use client';

import { FaBed,FaBath } from "react-icons/fa";
import { IoPawSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button"
import CalendarModal from '../modals/CalendarModal';
import useCalendarModal from '@/app/hooks/useCalendarModal';
import Slider from "@/components/listings/Slider"
import { useRouter } from "next/navigation";
import { imagestag } from "@/lib/images-db"




interface IListingProps{
    data: {      
        title: string,
        prop_addr: string,
        img1: string | null,
      img2: string | null,
          img3:string | null,
      bath: string | null,
        bedroom:string | null,
        pricew: string | null,
      prices: string | null,
    
        avail: string
    },
  slug: number,

    
 
}



const ListingCard: React.FC<IListingProps> = (
    {
        
    data: { title, prop_addr, img1, img2,img3, bath,bedroom, pricew, prices,avail },slug
       
    }
 
) => {

  const openCalendar = useCalendarModal();
  const router = useRouter();
 
  

    const calendarButton = (avail:string) => {
      
      openCalendar.onOpen()
      openCalendar.updateavailability(avail)
    }
  
    const images = [img1, img2, img3].filter(img => img); 
  // const images: string[] = [img1, img2, img3].filter(Boolean);
  // const images: string[] = [img1, img2, img3].filter((img) => img)?.filter(Boolean) as string[];

  // const images: ImagesListProps = tags.map(({ tags }: { tags: string[] }) => { return tags })
    
    return (
    
        <div className="flex flex-col md:flex-row border border-black-500">
          <div 
            className="
         
              w-full 
              max-h-[400px]    
              md:w-64
              h-screen
              md:h-full
            "
                >
          <div className="w-full h-full relative cursor-pointer" >
            
            <Slider images={images} slug={slug}/>
                  
                    </div>
         
              
                   
        </div>
        <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col">

            <div className="flex flex-col bg-green text-white p-1">

                <div className="pl-5 pr-2 text-md flex flex-row justify-between items-center cursor-pointer" onClick={() => router.push(`/saratoga-rental-homes-listing-${slug}`)}>
              {/* {location?.region}, {location?.label} */}
             
              {title}
              <div className="flex flex-row items-center gap-2">
                        
                  <div className="flex flex-row items-center mr-2">
                    <span className="pr-2">{bath}</span> <FaBath /></div>
                  <div className="flex flex-row items-center"><span className="pr-2">{bedroom}</span>  <FaBed /></div>
                       
                          </div>
            </div>
          
                   
          </div>
          <div className="flex-1 py-2">
                <div className="pl-5 text-sm">
                {prop_addr}
                
              </div>
              
              <div className="pl-5 text-bold text-lg">
                {/* 2200/season */}
  {pricew && (
    <>
                    {"$"}{pricew} {"/per week"}
      <br />
    </>
  )}
  {prices && (
    <>
      {"$"}{prices} {"/per season"}
      <br />
    </>
  )}
</div>
              


                    <div className="pl-5 py-4">
                    <IoPawSharp /> <span>Pets Ok</span>
                    </div>
          </div>
          <div className="w-full h-[2px] bg-black/10" />
                

        </div>
        <div className="flex flex-row gap-2">
                <Button onClick={() => calendarButton(avail)} className="w-full bg-transparent text-black hover:bg-green hover:text-white">Availability</Button>
                <Button className="w-full bg-transparent text-black hover:bg-green hover:text-white">Lease Property</Button>
          </div>
          

        



            </div>
        
          
        </div>
   
    )
}

export default ListingCard