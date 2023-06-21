import React, { useEffect, useState } from "react";
import "./FAQ.css";
import FAQDetails from "./FAQ_Details";
import { HashLink, NavHashLink } from "react-router-hash-link";

export default function FAQ() {
  const [Faq_Tab, setFaq_Tab] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const { top, height, id } = section.getBoundingClientRect();
      if (top <= scrollPosition && top + height > scrollPosition) {
        setActiveSection(id);
      }
    });
  };
  return (
    <div className="main_faq bg_clr">
      <div className="main_faq_img">
        <h1 className="main_heading">よくあるご質問 </h1>
      </div>
      <div className="container pt-2 pt-md-5 my-4">
        <div className="row">
          <div className="col-md-3 side_bar ">
            <ul className="ps-0 faq_ul">
              <NavHashLink
                to="#会員登録・ログインについて"
                className="link_text_d"
              >
                <li
                  className={Faq_Tab === 0 ? "first_li " : ""}
                  onClick={() => setFaq_Tab(0)}
                  style={{ cursor: "pointer" }}
                >
                  <a className="link_text_d">会員登録・ログインについて</a>
                </li>
              </NavHashLink>
              <NavHashLink to="#商品について" className="link_text_d  ">
                <li
                  className={Faq_Tab === 1 ? "first_li " : ""}
                  style={{ cursor: "pointer" }}
                  onClick={() => setFaq_Tab(1)}
                >
                  <a className="link_text_d"> 商品について</a>
                </li>
              </NavHashLink>
              <NavHashLink
                to="#ウェブガチャのプレイについて"
                className="link_text_d"
              >
                <li
                  onClick={() => setFaq_Tab(2)}
                  className={Faq_Tab === 2 ? "first_li " : ""}
                  style={{ cursor: "pointer" }}
                >
                  <a className="link_text_d fqqabl">
                    ウェブガチャのプレイについて
                  </a>
                </li>
              </NavHashLink>
              <NavHashLink to="#メールの受信について" className="link_text_d">
                <li
                  onClick={() => setFaq_Tab(3)}
                  className={Faq_Tab === 3 ? "first_li " : ""}
                  style={{ cursor: "pointer" }}
                >
                  <a className="link_text_d" href="#メールの受信について">
                    メールの受信について
                  </a>
                </li>
              </NavHashLink>
              <NavHashLink to="#商品のお届けについて" className="link_text_d">
                <li
                  onClick={() => setFaq_Tab(4)}
                  className={Faq_Tab === 4 ? "first_li " : ""}
                  style={{ cursor: "pointer" }}
                >
                  <a className="link_text_d"> 商品のお届けについて</a>
                </li>
              </NavHashLink>
              {/* <NavHashLink to="#商品のお届けについて" className="link_text_d">
              <li
                href="#商品のお届けについて"
                onClick={() => setFaq_Tab(5)}
                className={Faq_Tab === 5 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
              >
                <a className="link_text_d"> 商品のお届けについて</a>
              </li>
              </NavHashLink> */}
              <NavHashLink to="#お支払い方法について" className="link_text_d">

              <li
                onClick={() => setFaq_Tab(6)}
                className={Faq_Tab === 6 ? "first_li " : ""}
                style={{ cursor: "pointer" }}
              >
                <a className="link_text_d" >
                  お支払い方法について
                </a>
              </li>
              </NavHashLink>
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
