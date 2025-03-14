import ThumbsGalleryCarousel from "@components/common/ThumbsGalleryCarousel/ThumbsGalleryCarousel";
import { Tire } from "@graphql/generated";
import React from "react";

type TireSummaryProps = {
  tire: Tire;
};

const TireSummary = ({ tire }: TireSummaryProps) => {
  const { galleryImages } = tire;
  return <ThumbsGalleryCarousel images={galleryImages} />;
};

export default TireSummary;
