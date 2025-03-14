import TireDescription from "@components/tires/TireDescription";
import TireSpecifications from "@components/tires/TireSpecifications";
import TireSummary from "@components/tires/TireSummary";
import { Tire } from "@graphql/generated";
import fetchTireSpecificationById from "@lib/api/tireSpecifications/fetchTireSpecificationById";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

type TirePageProps = {
  tire: Tire;
};

const TirePage = ({ tire }: TirePageProps) => {
  const [tireSpecificationId, setTireSpecificationId] = useState<string | null>(
    null
  );

  const { data: { tireSpecification } = {} } = useQuery({
    queryKey: [`tireSpecification-${tireSpecificationId}`],
    queryFn: fetchTireSpecificationById(tireSpecificationId),
    enabled: tireSpecificationId !== undefined,
    staleTime: 1000,
  });

  return (
    <>
      <TireSummary
        tire={tire}
        setTireSpecificationId={setTireSpecificationId}
      />
      <div className="md:border-zinc-200 md:border-2 md:p-6 mx-4 my-4 flex flex-col gap-4">
        <TireSpecifications tireSpecification={tireSpecification} />
        <TireDescription tire={tire} />
      </div>
    </>
  );
};

export default TirePage;
