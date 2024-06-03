"use client"

import  {useState} from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  // const data = props.listings[0]?.avail;
  const data = props.availDays;
  const months = {
    'F': 5, // June
    'G': 6, // July
    'H': 7, // August
    'I' :8 //September
    // Add more months as needed
  };

  const availableDates = []
  const items = data.split(',')
 

  // Iterate over each item and create Date objects
items.forEach(item => {
  const monthKey = item.charAt(0);
  const day = parseInt(item.substring(1));

  // Check if the month key exists in the months object
  if (months.hasOwnProperty(monthKey)) {
    const month = months[monthKey];
    // Create a new Date object and push it to the dates array
    availableDates.push(new Date(2024, month - 1, day)); // Months in JavaScript are zero-based
  }
});

 
  // const [selectedDay, setSelectedDay] = useState<Date[]>();
  return (
    <DayPicker
      // showOutsideDays={showOutsideDays}
      numberOfMonths={4} 
      disableNavigation
      fromMonth={new Date(2024,5)}

      selected={availableDates}
    
      className={cn("p-3", className)}
      classNames={{
        // months: "flex flex-wrap border border-blue-500  sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        months: "grid md:grid-cols-2 lg:grid-cols-3 gap-2 gap-y-4",
        month: "space-y-5 space-x-4 border border-black-500 p-2 rounded-lg pt-5 px-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "absolute left-1",
        // nav_button_previous: "hidden",
        nav_button_next: "absolute right-1",
        // nav_button_next: "hidden",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-muted-foreground rounded-md w-9 font-normal text-[0.8rem] mr-2",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center mr-2 text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-9 w-9 p-0 font-normal aria-selected:opacity-100"
        ),
        day_range_end: "day-range-end",
        day_selected:
          // "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          "bg-red-500 text-white",
        day_today: "bg-accent text-accent-foreground",
        day_outside:
          "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        day_disabled: "text-muted-foreground opacity-50",
        day_range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = "Calendar"

export { Calendar }
