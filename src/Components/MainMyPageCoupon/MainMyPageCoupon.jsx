import React, { useState } from "react";
import MyPageCouponBg from "../MyPageCouponBg/MyPageCouponBg";
import MyPageCouponContent from "../MyPageCouponContent/MyPageCouponContent";
import MypageCouponContentTwo from "../MypageCouponContentTwo/MypageCouponContentTwo";

function MainMyPageCoupon() {
  const [Coupon_Steps_Tab, setCoupon_Steps_Tab] = useState(1);
  return (
    <div>
      {Coupon_Steps_Tab === 1 ? (
        <>
          {" "}
          <MyPageCouponContent setCoupon_Steps_Tab={setCoupon_Steps_Tab} />{" "}
        </>
      ) : (
        <>
          {" "}
          <MypageCouponContentTwo />{" "}
        </>
      )}
    </div>
  );
}

export default MainMyPageCoupon;
