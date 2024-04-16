import React from 'react'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Dropdown from '../Dropdown'
import { searchPriceByWeek,searchPriceBySeason,searchPriceByWeekend } from '@/constants/index'
import { useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


interface PricePerDropDownProps {
    value?: string
    onChangeHandler?: () => void
    placeholder: string
      categories: string[]
    
}

const PriceDropdown = ({ value, onChangeHandler,placeholder,categories }: PricePerDropDownProps) => {
    const form = useForm()
    return (
      <div className="flex flex-row items-center border border-black/10 my-4">
       
      <p className="bg-black/10 text-green py-[6px] mb-0 px-3">$</p>
 
    <FormField
      control={form.control}
      name="Price Per Season"
      render={({ field }:{field:any}) => (
        <FormItem className="w-[80%] px-2">

              
              <FormControl>
          
              
                  {/* <Dropdown categories={searchPriceBySeason} onChangeHandler={field.onChange} value={field.value} placeholder="Price" /> */}
                  
      
      <Select onValueChange={field.onChange} defaultValue={field.value}>
        <SelectTrigger className="bg-grey-50 placeholder:text-grey-500 placeholder:text-red-500 border-none focus:outline-none !important">
       
            <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {categories?.length > 0 && categories.map((category) => (
            <SelectItem key={category} value={category}  className="py-3 cursor-pointer  focus:bg-primary-50">
              {category}
            </SelectItem>
          ))}
  
          
        </SelectContent>
        </Select>
        
          
                  </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
   
  </div>
    )
}

export default PriceDropdown
