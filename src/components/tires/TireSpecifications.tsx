import { TireSpecification } from "@graphql/generated";
import {
  FIELD_LABELS,
  FIELDS_ORDER,
} from "@lib/constants/tireSpecifications.constants";

import React from "react";

type TireSpecificationsProps = {
  tireSpecification: TireSpecification | null | undefined;
};

const TireSpecifications = ({ tireSpecification }: TireSpecificationsProps) => {
  if (!tireSpecification) return null;

  const columns: string[][] = [[], []];
  FIELDS_ORDER.forEach((field, index) => {
    const columnIndex = Math.floor(index / 10);
    columns[columnIndex].push(field);
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="font-bold text-3xl">Tire Specifications</div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col">
            {column.map((field, index) => (
              <div
                key={field}
                className={`grid grid-cols-2 p-2 ${
                  index % 2 !== 0 ? "" : "bg-zinc-200"
                }`}
              >
                <div className="mx-1">{FIELD_LABELS[field]}</div>
                <div>
                  {tireSpecification[
                    field as keyof TireSpecification
                  ]?.toString()}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TireSpecifications;
