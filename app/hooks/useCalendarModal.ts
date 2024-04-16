
import { create } from 'zustand';

interface CalendarModalStore {
  isOpen: boolean;
  availability: string | null;
  onOpen: () => void;
  onClose: () => void;
  updateavailability: (avail: string) => void; 
 
}

const useCalendarModal = create<CalendarModalStore>((set) => ({
  isOpen: false,
  availability: null,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  updateavailability: (avail:string) => set({availability :avail})
}));


export default useCalendarModal;