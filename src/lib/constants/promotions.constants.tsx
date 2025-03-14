import PromotionListItemButton from "@components/promotions/PromotionsList/PromotionListItemButton";
import PromotionListItemCopyCoupon from "@components/promotions/PromotionsList/PromotionListItemCopyCoupon";
import PromotionListItemInfo from "@components/promotions/PromotionsList/PromotionListItemInfo";
import PriorityTireClearance from "@images/promotions/Priority_Tire_Clearance_deals.jpg";
import PriorityTireFirstTimeBuyerDiscount from "@images/promotions/Priority_Tire_First_Time_Buyer_discount.jpg";
import PriorityTireSpecialDiscounts from "@images/promotions/Priority_Tire_Special_Discounts.jpg";

export const PROMOTIONS_LIST = [
  {
    title: "Priority Tire First Time Buyer Discount",
    image: PriorityTireFirstTimeBuyerDiscount,
    component: <PromotionListItemCopyCoupon />,
  },
  {
    title: "Priority Tire Special Discounts",
    image: PriorityTireSpecialDiscounts,
    component: <PromotionListItemInfo />,
  },
  {
    title: "Priority Tire Clearance",
    image: PriorityTireClearance,
    component: <PromotionListItemButton />,
  },
];
