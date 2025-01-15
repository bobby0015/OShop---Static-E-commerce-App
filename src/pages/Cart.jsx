import React, { useContext, useEffect, useState } from "react";
import CartItems from "../components/ui/CartItems";
import { authContext } from "../context/authContext";
import productData from "../assets/static/product";
import { Link } from "react-router-dom";

const Cart = () => {
  const [showCart, setShowCart] = useState(true);
  const { cartItems} = useContext(authContext);

  useEffect(() => {
    if (cartItems.length <= 0) {
      setShowCart(true);
    } else {
      setShowCart(false);
    }
  }, [cartItems]);

  const productInCart = cartItems.map((cartItem) => {
    return productData.find((product) => product.id === cartItem.id);
  });

  const arr = productInCart.map((item, index)=>{
    const finalprice = item.productMRP - (item.productMRP*(item.productDiscount/100));
    const currentProduct = cartItems.find((product)=> item.id === product.id)
    return finalprice * currentProduct.quantity;
  })

  const total = arr.reduce((sum, current) => {
    // Ensure the current value is a number before adding
    return sum + (Number(current) || 0);
  }, 0);

  return showCart ? (
    <div className="w-full flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-xl font-semibold">No Item available in your Cart</h1>
      <Link to="/" className="btn mt-6 btn-primary">
        Continue Shopping
      </Link>
    </div>
  ) : (
    <div className="py-8 min-h-[60vh] px-10">
      <h1 className="text-2xl font-semibold">Your Cart Items :</h1>
      <div>
        {productInCart.map((item, index) => 
          (<CartItems
            key={index}
            id={item.id}
            img={item.productImage}
            name={item.productName}
            desc={item.productDescription}
            mrp={item.productMRP}
            discount={item.productDiscount}
          />
        ))}
      </div>
      <div className="my-6 flex justify-between items-center py-4 border-t-2 border-black">
        <div className="flex flex-col">
          <h2 className="font-medium text-xl mb-2">Apply Coupon Code</h2>
          <div className="flex">
            <input
              type="text"
              placeholder="Apply Coupon"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn btn-primary ml-2">Apply</button>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold">Total: ₹ {total}</h3>
        </div>
      </div>
    </div>
  );
};
export default Cart;
