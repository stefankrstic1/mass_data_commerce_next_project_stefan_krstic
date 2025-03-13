import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { Pagination } from "swiper/modules";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { SwiperSlide, Swiper } from "swiper/react";
import useSlideCount from "@lib/carousel/useSlideCount";

export type CarouselItem = {
  image: string;
  title: string;
  showButton?: string;
  href?: string;
  description: string;
};

type CarouselProps = {
  items: CarouselItem[];
};

const Carousel = ({ items }: CarouselProps) => {
  const slideCount = useSlideCount();

  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={slideCount}
        pagination
        modules={[Pagination]}
      >
        {items.map(({ title, showButton, href, description, image }) => {
          const content = (
            <Card className={href ? "cursor-pointer" : ""}>
              <CardMedia
                component="img"
                image={image}
                alt={title}
                className="object-cover"
              />
              <CardContent className="flex flex-col items-center gap-3">
                <Typography className="text-ellipsis text-center whitespace-nowrap">
                  {title}
                </Typography>
                {showButton && (
                  <Button
                    variant="contained"
                    endIcon={<ArrowForwardIosOutlinedIcon />}
                  >
                    View offer
                  </Button>
                )}
                <p className="text-center">{description}</p>
              </CardContent>
            </Card>
          );

          return (
            <SwiperSlide key={title}>
              {href ? (
                <a href={href} className="cursor-pointer">
                  {content}
                </a>
              ) : (
                content
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Carousel;
