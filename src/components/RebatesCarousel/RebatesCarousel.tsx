import React from "react";
import Carousel from "@components/Carousel/Carousel";
import { REBATES_LIST } from "@lib/constants/rebates.constants";

const RebatesCarousel = () => {
  return (
    <div className="flex flex-col gap-4 mx-10">
      <p className="text-center text-xl sm:text-3xl">Save with Promotions</p>
      <Carousel items={REBATES_LIST} />
    </div>
  );
};

export default RebatesCarousel;
