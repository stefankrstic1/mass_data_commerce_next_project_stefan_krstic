import { Tire } from "@graphql/generated";
import React from "react";

type TirePageProps = {
  tire: Tire;
};

const TirePage = ({ tire }: TirePageProps) => {
  console.log(tire);
  return <div>TirePage</div>;
};

export default TirePage;
