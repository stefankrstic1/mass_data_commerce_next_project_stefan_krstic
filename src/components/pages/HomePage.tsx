import Image from "next/image";
import React from "react";
import bannerHomePage from "@images/banner_home_page.jpg";
import RebatesCarousel from "@components/rebates/RebatesCarousel/RebatesCarousel";
import PromotionsList from "@components/promotions/PromotionsList/PromotionsList";
import PopularTiresCarousel from "@components/tires/PopularTiresCarousel";
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
          layout="responsive"
          alt="Home page banner"
          className="object-cover"
          priority
        />
      </div>
      <RebatesCarousel />
      <PromotionsList />
      <PopularTiresCarousel tires={tires} />
    </div>
  );
};

export default HomePage;
