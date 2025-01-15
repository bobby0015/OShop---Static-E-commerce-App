import React from "react";

const CategoryCard = ({img,desc,name}) => {
  return (
    <a href="" className="card bg-base-100 image-full w-96 shadow-xl">
      <figure>
        <img
          src={img}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{name}</h2>
        <p>{desc}</p> 
      </div>
    </a>
  );
};

export default CategoryCard;
