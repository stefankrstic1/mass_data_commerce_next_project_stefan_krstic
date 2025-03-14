import Carousel, { CarouselItem } from "@components/common/Carousel/Carousel";
import { Tire } from "@graphql/generated";
import React from "react";

type PopularTiresCarouselProps = {
  tires: Tire[];
};

const PopularTiresCarousel = ({ tires }: PopularTiresCarouselProps) => {
  const items: CarouselItem[] = tires.map((tire) => {
    const { model, image, id, price } = tire;
    return {
      image,
      title: model,
      href: `/tires/${id}`,
      description: price.toString(),
    };
  });

  return (
    <div className="flex flex-col gap-4 mx-10">
      <p className="text-center text-xl sm:text-3xl">Save with Promotions</p>
      <Carousel items={items} />
    </div>
  );
};

export default PopularTiresCarousel;
