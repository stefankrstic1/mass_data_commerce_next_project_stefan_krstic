import { Button } from "@mui/material";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import React from "react";

const PromotionListItemCopyCoupon = () => {
  return (
    <div className="absolute flex flex-col gap-2 bg-orange-300 bottom-5 px-4 py-3">
      <div className="font-bold">First Time Buyer</div>
      <p className="text-3xl font-bold">$5 OFF</p>
      <Button variant="outlined" endIcon={<ContentCopyOutlinedIcon />}>
        Copy Coupon Code: FIRST5
      </Button>
    </div>
  );
};

export default PromotionListItemCopyCoupon;
