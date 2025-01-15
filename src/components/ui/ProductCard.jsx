import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { handleSuccess } from '../../assets/utils/messageHandler'; 
import { authContext } from "../../context/authContext";

const ProductCard = (props) => {
  const price = props.mrp * (props.discount / 100);
  const { setProductId } = useContext(authContext);

  return (
    <div className="card bg-base-100 shadow-xl overflow-hidden">
      <figure className="h-[40vh] bg-primary-content">
        <img src={props.img} alt="Shoes" />
      </figure>
      <div className="card-body px-4 py-4 bg-primary-content">
        <div>
          {props.cat.map((item, index) => (
            <div key={index} className="mr-2 badge badge-outline">
              {item}
            </div>
          ))}
        </div>
        <h2 className="card-title">{props.name}</h2>
        <p>{props.desc}</p>
        <div>
          <p className="font-semibold text-sm">
            <span className="text-xs font-normal line-through">
              ₹ {props.mrp}
            </span>{" "}
            {props.discount}% off
          </p>
          <p className="font-bold text-2xl">₹ {props.mrp - price}</p>
        </div>
        <div className="flex justify-between w-full mt-4">
          <button className="btn btn-outline w-[80%]">Buy Now</button>
          <button
            onClick={() => {
              setProductId(props.id);
              handleSuccess("Item added Successfully")
            }}
            className="btn btn-primary text-xl"
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
