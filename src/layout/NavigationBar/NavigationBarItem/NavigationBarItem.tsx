import { Category } from "@graphql/generated";
import { Button, Menu, MenuItem, MenuList } from "@mui/material";
import React from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

import useSubcategoriesQuery from "@lib/categories/useSubcategories";

type NavigationBarItemProps = {
  category: Category;
  key: string;
};

const NavigationBarItem = ({
  key,
  category: { id, name },
}: NavigationBarItemProps) => {
  const { setQueryEnabled, subCategories } = useSubcategoriesQuery({ id });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setQueryEnabled(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div key={key}>
      <Button
        className="!text-black uppercase"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownOutlinedIcon />}
      >
        {name}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList>
          {subCategories &&
            subCategories.map(({ name, productCount }: Category) => {
              return (
                <MenuItem key={name}>
                  <div className="flex gap-3 justify-between w-full">
                    <p>{name}</p>
                    <p className="text-orange-400">{productCount}</p>
                  </div>
                </MenuItem>
              );
            })}
        </MenuList>
      </Menu>
    </div>
  );
};

export default NavigationBarItem;
