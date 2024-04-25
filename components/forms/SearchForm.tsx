"use client"

import { useEffect, useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import * as z from 'zod'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils';
import DatePicker from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";

import { useRouter,useSearchParams } from "next/navigation"
import Dropdown from "../Dropdown"

import {leaseCategories,bedroomCategories,bathroomCategories,searchDefaultValues} from "@/constants"
import { searchFormSchema } from "@/lib/validator"


interface FormValuesProps {
  leaseType: string,
  startDateTime: Date,
  endDateTime: Date,
  bedroomsCount: string
  bathroomsCount: string
}


const SearchForm = () => {
    const [query, setQuery] = useState('');

   
    const searchParams = useSearchParams();
  const [files, setFiles] = useState<File[]>([])
    const initialValues = searchDefaultValues;
    const router = useRouter();
  
  const form = useForm<z.infer<typeof searchFormSchema>>({
    resolver: zodResolver(searchFormSchema),
    defaultValues: initialValues
  })
 
    
    
const onSubmit = (values:FormValuesProps) => {
   

    const { leaseType, startDateTime, endDateTime, bedroomsCount, bathroomsCount } = values;

    // Update the URL based on the presence of the 'query' parameter

    let newUrl;

    if (values) {
      // Construct query string with all properties from 'values' object
      const queryString = Object.entries(values)
        .map(([key, value]) =>
        {
          if (key === 'startDateTime') {
            return `${encodeURIComponent(value.toISOString().split('T')[0])}`;
          } else if (key === 'endDateTime') {
            return `${encodeURIComponent(value.toISOString().split('T')[0])}`;
          }
          return `${encodeURIComponent(value)}`;
          }
      )
      
   
    
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keys: Object.keys(values),
        value: queryString
      });
    } else {
      newUrl = removeKeysFromQuery({
        params: searchParams.toString(),
        keysToRemove: [...Object.keys(values)]
      });
    }
  
   
    
    router.push(newUrl, { scroll: false });
  
  
  
};

    

  return (
    <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 shadow-md">
              <div className="bg-green text-white pl-4 py-2">

              <p>Search Here</p>
              </div>
        <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="leaseType"
            render={({ field }:{field:any}) => (
              <FormItem className="w-full">
                <FormControl>
                        <Dropdown categories={leaseCategories} onChangeHandler={field.onChange} value={field.value} placeholder="---Lease Type---" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         
        </div>

     

        

        <div className="flex flex-col gap-5">
        <FormField
              control={form.control}
              name="startDateTime"
              render={({ field }:{field:any}) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full rounded-full bg-grey-50 px-4 py-2">
                     
                    
                      <DatePicker 
                                  selected={field.value} 
                                  placeholderText="mm/dd/2024"
                        onChange={(date: Date) => field.onChange(date)} 
                   
                        dateFormat="MM/dd/yyyy"
                        wrapperClassName="datePicker"
                      />
                    </div>

                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
                  />
                  
                  <FormField
              control={form.control}
              name="endDateTime"
              render={({ field }:{field:any}) => (
                <FormItem className="w-full">
                  <FormControl>
                    <div className="flex-center h-[54px] w-full rounded-full bg-grey-50 px-4 py-2">
                      
                    
                      <DatePicker 
                                  selected={field.value} 
                                  placeholderText="mm/dd/2024"
                        onChange={(date: Date) => field.onChange(date)} 
                   
                        dateFormat="MM/dd/yyyy"
                        wrapperClassName="datePicker"
                      />
                    </div>

                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
              </div>
              

              <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="bedroomsCount"
            render={({ field }:{field:any}) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown categories={bedroomCategories} onChangeHandler={field.onChange} value={field.value} placeholder="---Bed Rooms---" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
         
              </div>
              <div className="flex flex-col gap-5 md:flex-row">
        <FormField
            control={form.control}
            name="bathroomsCount"
            render={({ field }:{field:any}) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown categories={bathroomCategories} onChangeHandler={field.onChange} value={field.value} placeholder="---Bath Rooms---" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
                  />
                  
      
         
        </div>
        <Button 
          type="submit"
          size="lg"             
          className="button col-span-2 w-full bg-green"
        >
          Apply filter</Button>
        

      </form>
    </Form>
  )
}

export default SearchForm