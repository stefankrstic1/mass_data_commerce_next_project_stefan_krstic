import TireDescription from "@components/tires/TireDescription";
import TireSpecifications from "@components/tires/TireSpecifications";
import TireSummary from "@components/tires/TireSummary";
import { Tire } from "@graphql/generated";
import React from "react";

type TirePageProps = {
  tire: Tire;
};

const TirePage = ({ tire }: TirePageProps) => {
  return (
    <>
      <TireSummary tire={tire} />
      <TireSpecifications tire={tire} />
      <TireDescription tire={tire} />
    </>
  );
};

export default TirePage;
