import React, { useState } from "react";
import "./FAQ.css";
import FAQDetails from "./FAQ_Details";

export default function FAQ() {
  const [Faq_Tab, setFaq_Tab] = useState(0);
  return (
    <div className="main_faq bg_clr">
      <div className="main_faq_img">
        <h1 className="main_heading">よくあるご質問 </h1>
      </div>
      <div className="container pt-2 pt-md-5 my-4">
        <div className="row">
          <div className="col-md-3 side_bar ">
            <ul className="ps-0 faq_ul">
              <li
                className={Faq_Tab === 0 ? "first_li " : ""}
                onClick={() => setFaq_Tab(0)}
                style={{ cursor: "pointer" }}
              >
                <a className="link_text_d" href="#会員登録・ログインについて">会員登録・ログインについて</a>
              </li>
              <li
                className={Faq_Tab === 1 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
                onClick={() => setFaq_Tab(1)}
              >
                <a className="link_text_d" href="#商品について"> 商品について</a>
               
              </li>
              <li
                onClick={() => setFaq_Tab(2)}
                className={Faq_Tab === 2 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
              >
                <a className="link_text_d fqqabl" href="#ウェブガチャのプレイについて">ウェブガチャのプレイについて</a>
                
              </li>
              <li
                onClick={() => setFaq_Tab(3)}
                className={Faq_Tab === 3 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
              >
               
                <a className="link_text_d" href="#メールの受信について">メールの受信について</a>
              </li>
              <li
                onClick={() => setFaq_Tab(4)}
                className={Faq_Tab === 4 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
              >
           
                <a className="link_text_d" href="#商品のお届けについて">  商品のお届けについて</a>
              </li>
              <li
                onClick={() => setFaq_Tab(5)}
                className={Faq_Tab === 5 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
              >
                <a className="link_text_d" href="#商品のお届けについて">  商品のお届けについて</a>
                
              </li>
              <li
                onClick={() => setFaq_Tab(6)}
                className={Faq_Tab === 6 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
              >
                <a className="link_text_d" href="#お支払い方法について">お支払い方法について</a>
                
              </li>
            </ul>
          </div>
          <div className="col-md-9 px-0 px-md-1">
            <FAQDetails length={5} />

            {/* {Faq_Tab === 0 ? (
              <FAQDetails length={5} />
            ) : Faq_Tab === 1 ? (
              <FAQDetails length={3} />
            ) : Faq_Tab === 2 ? (
              <FAQDetails length={2} />
            ) : Faq_Tab === 3 ? (
              <FAQDetails length={5} />
            ) : Faq_Tab === 4 ? (
              <FAQDetails length={4} />
            ) : (
              <FAQDetails length={2} />
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
