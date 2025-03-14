import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from "react";
import { Category } from "@graphql/generated";
import useSubcategoriesQuery from "@lib/categories/useSubcategories";

type MenuListItemProps = {
  category: Category;
};

const MenuListItem = ({ category: { id, name } }: MenuListItemProps) => {
  const [open, setOpen] = React.useState(false);

  const { setQueryEnabled, subCategories } = useSubcategoriesQuery({ id });

  const handleClick = () => {
    setQueryEnabled(true);
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton key={id} onClick={handleClick}>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subCategories &&
            subCategories.map(({ id, name, productCount }) => {
              return (
                <ListItemButton key={id} sx={{ pl: 4 }}>
                  <ListItemText primary={name} />
                  <p className="text-orange-400 mr-1">{productCount}</p>
                </ListItemButton>
              );
            })}
        </List>
      </Collapse>
    </>
  );
};

export default MenuListItem;
