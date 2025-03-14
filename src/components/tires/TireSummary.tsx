import ThumbsGalleryCarousel from "@components/common/ThumbsGalleryCarousel/ThumbsGalleryCarousel";
import { Tire } from "@graphql/generated";
import { Select, MenuItem, Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

type TireSummaryProps = {
  tire: Tire;
  setTireSpecificationId: (id: string | null) => void;
};

const TireSummary = ({ tire, setTireSpecificationId }: TireSummaryProps) => {
  const [count, setCount] = React.useState(1);
  const { galleryImages, brand, model, price, oldPrice, sizes } = tire;

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 my-4">
      <ThumbsGalleryCarousel images={galleryImages} />
      <div className="flex flex-col gap-4 mx-4">
        <div className="text-3xl">{brand}</div>
        <div className="text-3xl font-bold">{model}</div>
        <div>
          <div className="text-xl font-bold">
            {`$${price}`}
            <sub>/each</sub>
          </div>
          <div className="line-through text-zinc-400">{oldPrice}</div>
        </div>
        <Select
          onChange={(event) => {
            const value = event.target.value as string;
            setTireSpecificationId(value);
          }}
        >
          {sizes.map(({ id, size }) => {
            return (
              <MenuItem key={id} value={id}>
                {size}
              </MenuItem>
            );
          })}
        </Select>
        <div className="flex gap-2 justify-end">
          <div className="flex flex-1/3 justify-between border-2 items-center border-zinc-300 rounded-sm">
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 1));
              }}
            >
              <RemoveIcon fontSize="small" className="text-zinc-500" />
            </Button>
            {count}
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" className="text-zinc-500" />
            </Button>
          </div>
          <Button variant="contained" size="small" className="flex-2/3">
            {`$${price} ADD TO CART`}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TireSummary;
