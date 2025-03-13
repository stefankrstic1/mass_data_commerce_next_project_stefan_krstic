import Image from "next/image";
import React from "react";
import bannerHomePage from "@images/banner_home_page.jpg";
import RebatesCarousel from "@components/RebatesCarousel/RebatesCarousel";
import PromotionsList from "@components/PromotionsList/PromotionsList";
import PopularTiresCarousel from "@components/PopularTiresCarousel/PopularTiresCarousel";
import { Tire } from "@graphql/generated";

type HomePageProps = {
  tires: Tire[];
};

const HomePage = ({ tires }: HomePageProps) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-center h-56 md:h-80">
        <Image
          src={bannerHomePage}
          alt="Home page banner"
          className="object-cover"
        />
      </div>
      <RebatesCarousel />
      <PromotionsList />
      <PopularTiresCarousel tires={tires} />
    </div>
  );
};

export default HomePage;
