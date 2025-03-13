import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LogoHeader from "@images/logo-header.webp";
import Image from "next/image";
import {
  AppBar,
  Box,
  TextField,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import NavigationBarList from "@layout/NavigationBar/NavigationBarList/NavigationBarList";
import Menu from "@components/Menu/Menu";
import { useQuery } from "@tanstack/react-query";
import fetchMainCategories from "@lib/api/categories/fetchMainCategories";

const NavigationBar = () => {
  const { data: { mainCategories } = {}, isLoading } = useQuery({
    queryKey: ["mainCategories"],
    queryFn: fetchMainCategories,
  });

  const theme = useTheme();
  const isMDSize = useMediaQuery(theme.breakpoints.down("md"));

  console.log(isMDSize);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className="flex w-full items-center justify-between p-2 bg-white">
          {isMDSize && (
            <div className="flex gap-4">
              <Menu mainCategories={mainCategories} />
              <SearchIcon className="text-black" />
            </div>
          )}
          <div className="w-36">
            <Image src={LogoHeader} alt="Logo Header" className="" />
          </div>
          {!isMDSize && (
            <Box component="form">
              <TextField
                size="small"
                className="w-[560px]"
                placeholder="Search Tires & Accessories"
                slotProps={{
                  input: {
                    startAdornment: <SearchIcon className="mr-2" />,
                  },
                }}
              ></TextField>
            </Box>
          )}

          <div className="flex gap-4">
            <PersonOutlineOutlinedIcon className="text-black" />
            {!isMDSize && <FavoriteBorderOutlinedIcon className="text-black" />}
            <ShoppingCartOutlinedIcon className="text-black" />
          </div>
        </Toolbar>
        {!isMDSize && (
          <NavigationBarList
            mainCategories={mainCategories}
            isLoading={isLoading}
          />
        )}
      </AppBar>
    </>
  );
};

export default NavigationBar;
