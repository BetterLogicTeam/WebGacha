import React, { useState } from "react";
import "./FAQ.css";
import FAQDetails from "./FAQ_Details";

export default function FAQ() {
  const [Faq_Tab, setFaq_Tab] = useState(0);
  return (
    <div className="main_faq bg_clr">
      <div className="main_faq_img">
        <h1 className="main_heading">よくあるご質問</h1>
      </div>
      <div className="container my-4">
        <div className="row">
          <div className="col-md-3 side_bar">
            <ul className="ps-0 faq_ul">
              <li className={Faq_Tab===0? "first_li ":""} onClick={() => setFaq_Tab(0)} style={{cursor:"pointer"}}>
                会員登録・ログインについて
              </li>
              <li  className={Faq_Tab===1? "first_li ":""} style={{cursor:"pointer"}}  onClick={() => setFaq_Tab(1)}>商品について</li>
              <li onClick={() => setFaq_Tab(2)} className={Faq_Tab===2? "first_li ":""} style={{cursor:"pointer"}}>
                ウェブガチャのプレイについて
              </li>
              <li onClick={() => setFaq_Tab(3)} className={Faq_Tab===3? "first_li ":""} style={{cursor:"pointer"}}>メールの受信について</li>
              <li onClick={() => setFaq_Tab(4)} className={Faq_Tab===4? "first_li ":""} style={{cursor:"pointer"}}>商品について</li>
              <li onClick={() => setFaq_Tab(5)}className={Faq_Tab===5? "first_li ":""} style={{cursor:"pointer"}}>商品のお届けについて</li>
              <li onClick={() => setFaq_Tab(6)} className={Faq_Tab===6? "first_li ":""} style={{cursor:"pointer"}} >お支払い方法について</li>
            </ul>
          </div>
          <div className="col-md-9 px-0 px-md-1">
            {Faq_Tab === 0 ? (
              <FAQDetails />
            ) : Faq_Tab === 1 ? (
              <FAQDetails />
            ) : Faq_Tab === 2 ? (
              <FAQDetails />
            ) : Faq_Tab === 3 ? (
              <FAQDetails />
            ) : Faq_Tab === 4 ? (
              <FAQDetails />
            ) : (
              <FAQDetails />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
