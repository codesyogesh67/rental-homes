"use client"

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


interface MonthMapping {
  G: number;
  H: number;
  I: number;
}



export default function Calendar({ dates }: { dates:string}) {
  const [selectedDate, setSelectedDate] = useState(null);
  // console.log("calendar dates", dates)
  

  const datesArray:string[] = dates.split(",");
  console.log("Dates array",datesArray)

  const startDate = new Date(2024, 5, 1); // Month is zero-based (5 for June)
const endDate = new Date(2024, 7, 31); // Month is zero-based (7 for August)
const june = new Date(new Date().getFullYear(), 5, 1); // June is 5th month (0-based index)
  const august = new Date(new Date().getFullYear(), 7, 31); 


// Function to convert date string to Date object
const convertToDate = (dateString: string): Date => {
  const month: string = dateString.charAt(0); // Extract the month character (G, H, or I)
  const day: number = parseInt(dateString.slice(1)); // Extract the day part and convert it to a number

  // Map month character to month index (0-based)
  const monthIndex: number = ({ G: 6, H: 7, I: 8 } as MonthMapping)[month] || 0;
  
  // Create Date object using year 2024 (you can adjust the year as needed)
  return new Date(2024, monthIndex, day);
};

// Convert each date string to Date object
const datesAsDates: Date[] = datesArray.map(convertToDate);

console.log(datesAsDates);

  return (
    <>
    
      <main className="flex flex-col items-center justify-between">
      <DatePicker
     selected={startDate}
    //  onChange={(date) => setSelectedDate(date)}
    //  start={startDate}
    //  end={endDate}
    startDate={june} // Set the start date to June 1st
    endDate={august} // Set the end date to August 31st
       
     inline // Show the calendar as an inline component
     monthsShown={3} // Display three months
   
    />
      </main>
    </>
  )
}