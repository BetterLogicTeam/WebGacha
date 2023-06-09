import React from "react";
import "./MyPageEditThree.css";
import { useNavigate } from "react-router-dom";

function MyPageEditThree() {
  const history= useNavigate()
  return (
    <div className="containerfluid MypageEdit_bg">
      <div className="row m-0 justify-content-center">
        <div className=" my-5 col-12 col-md-5">
          <h3 className="text-center py-4 edit_paaaaa">登録内容の変更完了</h3>
          <p className="text-center editPage_p">
            お客様の会員情報の変更を受け付けました。 <br />
            引き続きウェブガチャをご利用ください。
          </p>
          <div className="py-3 d-flex justify-content-center">
            <button className="red_button" onClick={()=>(history('/CouponTab'),window.scrollTo({top:0,behavior:'instant'}))}> マイページTOPへ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageEditThree;
