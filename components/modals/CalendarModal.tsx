'use client';


// import { toast } from "react-hot-toast";
import {useState} from 'react'

import useCalendarModal from '@/app/hooks/useCalendarModal'
import Modal from "./Modal";
// import Heading from "@/components/Heading";

// import Calendar from "@/components/inputs/Calendar"
// import Calendar from "@/components/Calendar"




const CalendarModal= ({listings}) => {
const calendarModal = useCalendarModal()
  const [isLoading, setIsLoading] = useState(false);
    


  


    const bodyContent = (
    <div className="flex justify-center">
     {/* <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => setDateRange(value)}
      /> */}
        {/* <Calendar dates={calendarModal.availability} /> */}
        </div>
    )

  

  return (
    <Modal
      disabled={isLoading}
      isOpen={calendarModal.isOpen}
      title="Availability Dates"
      availability={calendarModal.availability}
      onClose={calendarModal.onClose}
      // onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      data={listings}

    />
  );
}

export default CalendarModal;