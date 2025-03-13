import NavigationBarItem from "@layout/NavigationBar/NavigationBarItem/NavigationBarItem";
import { Category } from "@graphql/generated";
import React from "react";
import { Button } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";

type NavigationBarListProps = {
  mainCategories: Category[] | undefined;
  isLoading: boolean;
};

const NavigationBarList = ({
  mainCategories,
  isLoading,
}: NavigationBarListProps) => {
  return (
    <>
      {!isLoading && (
        <div className="bg-white flex gap-3 px-6 py-2 justify-between">
          {mainCategories &&
            mainCategories.map((category: Category) => (
              <NavigationBarItem key={category.id} category={category} />
            ))}
          <div className="flex gap-2">
            <Button
              className="flex gap-2"
              variant="contained"
              color="secondary"
            >
              <DirectionsCarIcon /> MY GARAGE
            </Button>
            <Button className="flex gap-2" variant="contained">
              <TwoWheelerOutlinedIcon />
              FIND TIRES
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavigationBarList;
