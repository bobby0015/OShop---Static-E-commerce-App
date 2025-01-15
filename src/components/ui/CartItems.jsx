import React, { useContext, useEffect, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import { authContext } from "../../context/authContext";

const CartItems = ({img,name,desc,mrp,discount,id}) => {
  const [quantity, setQuantity] = useState(1);

  const {setProductInfo,removeFromCart} = useContext(authContext);
  const price = (mrp - (mrp*(discount/100)))*quantity
  
  useEffect(()=>{
    const data = {id,quantity}
    setProductInfo(data)
  },[quantity,price])

  // Function to increase quantity
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  // Function to decrease quantity (ensure it doesn't go below 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="my-6 relative select-none bg-white py-4 rounded-md flex items-center px-5">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-16 rounded-full ring ring-offset-2">
          <img
            src={img}
            alt={name}
          />
        </div>
      </div>
      <div className="ml-4">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-zinc-500">{desc}</p>
        <div className="flex items-center">
          <CiCirclePlus
            className="text-xl cursor-pointer text-primary hover:bg-primary hover:text-white hover:rounded-full"
            onClick={increaseQuantity}
          />
          <span className="mx-2 select-none">{quantity}</span>
          <CiCircleMinus
            className="text-xl cursor-pointer text-primary hover:bg-primary hover:text-white hover:rounded-full"
            onClick={decreaseQuantity}
          />
        </div>
        <p>Price: ₹ {price}</p>
      </div>
      <button onClick={()=>removeFromCart(id)} className="btn btn-circle bg-red-500 text-white hover:bg-red-600 absolute -top-4 -right-4"><IoCloseSharp className="text-xl font-semibold"/></button>
    </div>
  );
};

export default CartItems;
