import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerOutlinedIcon from "@mui/icons-material/TwoWheelerOutlined";
// import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
// import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import {
  Button,
  // Collapse,
  Divider,
  Drawer,
  // List,
  // ListItem,
  // ListItemButton,
  // ListItemIcon,
  // ListItemText,
} from "@mui/material";
import { Category } from "@graphql/generated";
import MenuList from "./MenuList/MenuList";
// import { useQuery } from "@tanstack/react-query";
// import { GetAllMainCategoriesDocument } from "@graphql/generated";
// import request from "graphql-request";

type MenuProps = {
  mainCategories: Category[] | undefined;
};

const Menu = ({ mainCategories }: MenuProps) => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} className="text-black" />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <div className="p-1 flex justify-end">
          <CloseOutlinedIcon
            onClick={toggleDrawer(false)}
            className="text-black"
          />
        </div>
        <div className="flex gap-2 px-4 py-2 justify-center">
          <Button className="flex gap-2" variant="contained" color="secondary">
            <DirectionsCarIcon /> MY GARAGE
          </Button>
          <Button className="flex gap-2" variant="contained">
            <TwoWheelerOutlinedIcon />
            FIND TIRES
          </Button>
        </div>

        {mainCategories && <MenuList mainCategories={mainCategories} />}

        <div className="flex gap-2 mx-4 text-amber-400">
          <LocalShippingOutlinedIcon />
          Track my order
        </div>
        <div className="mt-auto">
          <Divider />
          <div className="flex flex-col justify-center text-center py-2 ">
            <p className="text-amber-400 font-bold">866-440-0177</p>
            <p>8am - 6pm EST Monday - Saturday</p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
