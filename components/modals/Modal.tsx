'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Calendar } from "@/components/ui/calendar"


interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  // onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  // actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
  availability: string[],
  data:Object[]
 
}

const Modal: React.FC<ModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  body, 
  // actionLabel, 
  availability,
  footer, 
  disabled,
  secondaryAction,
  secondaryActionLabel,
  data
}) => {
  const [showModal, setShowModal] = useState(isOpen);
 

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300)
  }, [onClose, disabled]);



  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }


  return (
    <>
      <div
        className="
        justify-center 
        items-center 
          flex 
          overflow-x-hidden 
          overflow-y-auto 
          fixed 
          inset-0 
          z-50 
          outline-none 
          focus:outline-none
          bg-neutral-800/70]
          border border-red-500
          
   
        "
      >
        <div className="
          relative 
          my-6
          mx-auto 
          h-full 
          md:h-auto
          w-100
          "
        >
          {/*content*/}
          <div className={`
            translate
            duration-300
            h-full
            w-100
            ${showModal ? 'translate-y-0' : 'translate-y-full'}
            ${showModal ? 'opacity-100' : 'opacity-0'}
          `}>
            <div className="
              translate
              md:mt-36
              h-fit
              rounded-lg 
              shadow-lg 
              relative 
              flex 
              flex-col
              items-center 
              w-screen
              md:w-full 
              bg-white 
              outline-none 
              focus:outline-none
              border-0
              w-100
            "
            >
              {/*header*/}
              <div className="
                flex 
                items-center 
                p-6
                rounded-t
                justify-between
               
                border-b-[1px]
                w-full
                "
              >
                <button
                  className="
                    p-1
                    border-0 
                    hover:opacity-70
                    transition
                   
                  "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>

                <div className="text-lg font-semibold">
                  {title}
                </div>
                <div className="justify-self-end">
                  <div className="flex items-center">
                    <div className="h-4 w-4 border border-black-200 rounded-sm mr-2" />
                  <p>indicates availability</p>
                  </div>
                  <div className="flex items-center">
                  <div className="h-4 w-4 bg-red-500 mr-2 border rounded-sm" />
                  <p className="align-center">indicates not available</p>
                  </div>
                 
                
                </div>
              </div>
              {/*body*/}
              <div className="relative p-6">
                {/* {body} */}
                <div className="">
                  <Calendar availDays={availability}/>
                  {/* <Calendar />
                  <Calendar /> */}
                </div>
               
              </div>
              {/*footer*/}
             
                
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;