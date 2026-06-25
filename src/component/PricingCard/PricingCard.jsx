import React from "react";
import PricingFeture from "./PricingFeture";

const PricingCard = ({ pricing }) => {
  console.log(pricing);
  const { name, price, description, features, duration } = pricing;
  return (
    <div className="flex flex-col border-2 bg-amber-600 rounded-2xl p-4">
      {/* card header */}
      <div>
        <h1 className="text-7xl">{name}</h1>
        <h4 className="text-3xl">
          {price}
          {duration}
        </h4>
        {/* Body */}
      </div>
      <div className=" bg-amber-400 p-4 rounded-2xl mt-10 flex-1">
        <p>{description}</p>
        {features.map((feature, index) => (
          <PricingFeture key={index} feature={feature}></PricingFeture>
        ))}
      </div>
      <div className="">
        <button className="btn w-full mt mt-5">Neutral</button>
      </div>
    </div>
  );
};

export default PricingCard;
