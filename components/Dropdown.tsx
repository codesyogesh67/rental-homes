import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
 
  

  
  type DropdownProps  ={
    value?: string
      onChangeHandler?: () => void
      placeholder: string
        categories: string[]
  }
  
  const Dropdown = ({ value, onChangeHandler,placeholder,categories }: DropdownProps) => {
  
    
  
 
  
   
    return (
      <Select onValueChange={onChangeHandler} defaultValue={value}>
        <SelectTrigger className="bg-grey-50 h-[54px] placeholder:text-grey-500 px-5 py-3 focus-visible:ring-transparent focus:ring-transparent !important">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {categories?.length > 0 && categories.map((category) => (
            <SelectItem key={category} value={category}  className="py-3 cursor-pointer  focus:bg-primary-50 p-regular-14">
              {category}
            </SelectItem>
          ))}
  
          
        </SelectContent>
      </Select>
    )
  }
  
  export default Dropdown