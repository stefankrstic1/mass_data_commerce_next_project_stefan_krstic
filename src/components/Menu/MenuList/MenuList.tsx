import { Category } from "@graphql/generated";
import { List } from "@mui/material";
import React from "react";
import MenuListItem from "../MenuListItem/MenuListItem";

type MenuListProps = {
  mainCategories: Category[] | undefined;
};

const MenuList = ({ mainCategories }: MenuListProps) => {
  if (!mainCategories) return null;

  return (
    <List>
      {mainCategories.map((category) => {
        return <MenuListItem key={category.id} category={category} />;
      })}
    </List>
  );
};

export default MenuList;
