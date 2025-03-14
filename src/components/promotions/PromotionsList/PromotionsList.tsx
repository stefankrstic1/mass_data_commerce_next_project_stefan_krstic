import { PROMOTIONS_LIST } from "@lib/constants/promotions.constants";
import { Button, Grid2 } from "@mui/material";
import Image from "next/image";
import React from "react";

const PromotionsList = () => {
  return (
    <div className="flex flex-col gap-4 mx-10">
      <p className="text-center text-xl sm:text-3xl">Save with Promotions</p>
      <Grid2 container spacing={1}>
        {PROMOTIONS_LIST.map(({ title, image, component }) => {
          return (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4 }}
              key={title}
              className="relative h-90"
            >
              <Image
                src={image.src}
                alt={title}
                fill
                className="object-cover"
              />
              {component && component}
            </Grid2>
          );
        })}
      </Grid2>
      <div className="flex justify-center">
        <Button variant="contained">VIEW ALL PROMOTIONS</Button>
      </div>
    </div>
  );
};

export default PromotionsList;
