import React from "react";

const PromotionListItemInfo = () => {
  return (
    <div className="absolute flex flex-col gap-2 bg-orange-300 bottom-5 px-4 py-3">
      <p className="text-xl font-bold">5% DISCOUNT FOR</p>
      <ul className="list-disc pl-4">
        <li>Military</li>
        <li>Teachers</li>
        <li>First responders</li>
        <li>Medical staff</li>
      </ul>
    </div>
  );
};

export default PromotionListItemInfo;
