import { Tire } from "@graphql/generated";
import React from "react";

type TireDescriptionProps = {
  tire: Tire;
};

const TireDescription = ({ tire }: TireDescriptionProps) => {
  const { featuresAndBenefits, description } = tire;

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-3xl">Product Description</div>
      <div className="flex flex-col gap-2 font-bold">
        <p>FEATURE AND BENEFITS</p>
        <ul className="list-disc pl-5">
          {featuresAndBenefits.map((value) => {
            return <li key={value}>{value}</li>;
          })}
        </ul>
      </div>
      <div className="font-bold">Overview</div>
      <p>{description}</p>
    </div>
  );
};

export default TireDescription;
