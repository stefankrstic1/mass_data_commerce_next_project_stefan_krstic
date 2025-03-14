import { Tire } from "@graphql/generated";
import { Button, MenuItem, Select } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import React from "react";

type TireSpecificationsProps = {
  tire: Tire;
};

const TireSpecifications = ({ tire }: TireSpecificationsProps) => {
  const [count, setCount] = React.useState(1);
  const { model, brand, price, sizes, oldPrice } = tire;

  return (
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
      <Select>
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
              setCount(Math.max(count - 1, 0));
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
          {" "}
          {`$${price} ADD TO CART`}{" "}
        </Button>
      </div>
    </div>
  );
};

export default TireSpecifications;
