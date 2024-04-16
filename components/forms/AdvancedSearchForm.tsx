"use client"

import { useEffect, useState } from 'react'
// import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"



import "react-datepicker/dist/react-datepicker.css";

import { useRouter } from "next/navigation"


import {searchPriceBySeason,searchPriceByWeek,searchPriceByWeekend} from "@/constants"
import {propertyTypes,locationTypes,features} from "@/constants"


import PriceDropdown from './PriceDropdown'
import { CheckboxReactHookFormMultiple } from '@/components/Checkbox'


interface FormValuesProps {
  leaseType: string,
  startDateTime: Date,
  endDateTime: Date,
  bedroomsCount: string
  bathroomsCount: string
}


const AdvancedSearchForm = () => {
    const [query, setQuery] = useState('');

   
  const [files, setFiles] = useState<File[]>([])

    const router = useRouter();
  

    const form = useForm()
 
    
    
// const onSubmit = (values:FormValuesProps) => {
  
// };

    

  return (
    <Form {...form}>
          <form className="flex flex-col shadow-md">
              
        <div className="bg-lightgreen text-white flex items-center py-2 pl-4">

              <p className="align-center mb-0 font-[600]">Advanced Search</p>
        </div>
       <div className="flex flex-col py-3 items-center">
                  <p className="text-lightgreen underline pl-2 text-[15px] font-[500] lg:self-start">Search By Price:</p>
          
          
          <div className="flex flex-col items-center mt-4">
          <PriceDropdown categories={searchPriceBySeason}  placeholder="Price"/>
          <PriceDropdown categories={searchPriceByWeek}  placeholder="Price"/>
          <PriceDropdown categories={searchPriceByWeekend}  placeholder="Price"/>

          </div>     
     

          <div className="pl-4 flex flex-col items-center lg:items-start">
            
             
          <div className="flex flex-col gap-5 md:flex-row py-3">
          <CheckboxReactHookFormMultiple label="Property Type" items={propertyTypes} />
       
                  
            </div>
            
          <div className="flex flex-col gap-5 md:flex-row py-3">
          <CheckboxReactHookFormMultiple label="Location Type" items={locationTypes} />              
            </div>
            
          <div className="flex flex-col gap-5 md:flex-row py-3">
          <CheckboxReactHookFormMultiple label="Features" items={features} />
       
                  
          </div>
          </div>
              
         
            <div className="flex flex-row my-4 justify-center">

<Button 
  type="submit"
  size="lg"             
  className="button col-span-2 w-[100%] bg-lightgreen rounded-none"
  >
  Apply filter</Button>


  </div>
        </div>

    

      </form>
    </Form>
  )
}

export default AdvancedSearchForm