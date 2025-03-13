import { Grid2 } from "@mui/material";
import React from "react";
import { FOOTER_LIST } from "@lib/constants/footer.constants";

const Footer = () => {
  return (
    <Grid2
      component="footer"
      container
      spacing={2}
      className="bg-zinc-800 text-white p-4"
    >
      <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <div className="font-bold uppercase">{FOOTER_LIST.CUSTOMER.title}</div>
        <ul>
          {FOOTER_LIST.CUSTOMER.items.map((item) => (
            <li key={item.title} className="py-1">
              {item.title}
            </li>
          ))}
        </ul>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <div className="font-bold uppercase">
          {FOOTER_LIST.PRIORITY_TIRE.title}
        </div>
        <ul>
          {FOOTER_LIST.PRIORITY_TIRE.items.map((item) => (
            <li key={item.title} className="py-1">
              {item.title}
            </li>
          ))}
        </ul>
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
        <div className="font-bold uppercase">
          {FOOTER_LIST.SHOPPING_INFORMATION.title}
        </div>
        <ul>
          {FOOTER_LIST.SHOPPING_INFORMATION.items.map((item) => (
            <li key={item.title} className="py-1">
              {item.title}
            </li>
          ))}
        </ul>
      </Grid2>
    </Grid2>
  );
};

export default Footer;
