import React from "react";
import "./MyPageCouponBg.css";
import power from "../Assets/power.svg";

function MyPageCouponBg() {
  return (
    <div className="container-fluid">
      <div className="row px-2 px-md-0">
        <div className="col-12 Bgcoopon ">
          <div>
            <h1 className="Notation_h1 text-white">マイページ </h1>
          </div>

          <br />
          <div className="border-0  ">
            <button className="btn_coupon p-2 ">
              <img src={power} className="px-2" alt="" />
              グアウト{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageCouponBg;
