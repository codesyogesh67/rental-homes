'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  onClick,
  label
}) => {
  return ( 
    <div 
      onClick={onClick} 
      className="
        px-4 
        py-3 
        hover:bg-white
        hover:text-black 
        transition
        font-semibold
        cursor-pointer
      "
    >
      {label}
    </div>
   );
}
 
export default MenuItem;