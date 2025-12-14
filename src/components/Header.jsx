import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useSelector } from "react-redux";
import CartDialog from "./CartDialog";

const Header = () => {
  const [open, setOpen] = useState(false);
  const totalQty = useSelector((state) => state.cart.totalQty);

  return (

    <>
    <header className="bg-gray-900 p-4 flex justify-between items-center">
      <h1 className="text-white">My Store</h1>

      <div className="relative cursor-pointer" onClick={()=>setOpen(true)}>
        <ShoppingCartIcon className="size-7 text-white" />
        <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-2 rounded-full">
          {totalQty}
        </span>
      </div>
    </header>

     <CartDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
