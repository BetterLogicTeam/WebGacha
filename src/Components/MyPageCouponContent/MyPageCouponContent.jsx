import React from "react";
import "./MyPageCouponContent.css";

function MyPageCouponContent({setCoupon_Steps_Tab}) {
  return (
    <div className="container-fluid MyPageCouponContentBg ">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 py-5">
          <h3 className="text-center MyPageCoupon_h3">クーポン一覧</h3>

          <p className="text-center MyPageCoupon_p">
            取得しているクーポン一覧です
            。クーポンを使用したい場合は、決済画面にて「クーポン利用」欄の{" "}
            
            「使用する」を選択することで、ご利用可能なクーポンが表示されます。
            新規でクーポンを取得した

            い場合は、「クーポン取得」ボタンを押してください。
          </p>

          <div className="d-flex justify-content-center">
          <button className="mt-5 copn1stBt" onClick={()=>setCoupon_Steps_Tab(2)}>クーポン取得</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageCouponContent;
