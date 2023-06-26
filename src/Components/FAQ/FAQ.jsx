import React, { useEffect, useState } from "react";
import "./FAQ.css";
import FAQDetails from "./FAQ_Details";
import { HashLink, NavHashLink } from "react-router-hash-link";
import Accordion from "react-bootstrap/Accordion";
import FAQData from "./FAQ_Data";
import { useInView } from "react-intersection-observer";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default function FAQ() {
  const [Faq_Tab, setFaq_Tab] = useState(100)
  const [activeSection, setActiveSection] = useState(false);

  console.log("Width",window.innerWidth);
  
  useEffect(() => {
    let width= window.innerWidth
    if (width >= 768) {
      setActiveSection(true) 
    } else  if(width < 766) {
      setActiveSection(false)
    }
  }, [])
  

  return (
    <div className="main_faq bg_clr">
      <div className="main_faq_img">
        <h1 className="main_heading">よくあるご質問 </h1>
      </div>
      <div className="container pt-2 pt-md-5 my-4">
        <div className="row">
          <div className="col-md-3 side_bar ">
            <ul className="ps-0 faq_ul">
              <li onClick={() => (activeSection==true ? (setFaq_Tab(0),scroll.scrollTo(200)):(setFaq_Tab(0),scroll.scrollTo(680)))} style={{ cursor: "pointer" }}>
                {/* <Link activeClass="first_li"  spy to="section1"> */}
                  <a className="link_text">会員登録・ログインについて</a>
                {/* </Link> */}
              </li>

              <li style={{ cursor: "pointer" }} onClick={() => (activeSection==true ? (setFaq_Tab(1),scroll.scrollTo(820)):(setFaq_Tab(1),scroll.scrollTo(1220)))}>
                {/* <Link activeClass="first_li"  spy to="section2"> */}
                  <a className="link_text"> 商品について</a>
                {/* </Link> */}
              </li>

              <li onClick={() => (activeSection==true ? (setFaq_Tab(2),scroll.scrollTo(1240)):(setFaq_Tab(2),scroll.scrollTo(1770)))} style={{ cursor: "pointer" }}>
                {/* <Link activeClass="first_li"  spy to="section3"> */}
                  <a className="link_text">ウェブガチャのプレイについて</a>
                {/* </Link> */}
              </li>

              <li onClick={() => (activeSection==true ? (setFaq_Tab(3),scroll.scrollTo(1690)):(setFaq_Tab(3),scroll.scrollTo(2250)))} style={{ cursor: "pointer" }}>
                {/* <Link activeClass="first_li"  spy to="section4"> */}
                  <a className="link_text">メールの受信について</a>
                {/* </Link> */}
              </li>

              <li onClick={() => (activeSection==true ? (setFaq_Tab(4),scroll.scrollTo(2100)):(setFaq_Tab(4),scroll.scrollTo(2750)))} style={{ cursor: "pointer" }}>
                {/* <Link activeClass="first_li"  spy to="section5"> */}
                  <a className="  link_text"> 商品のお届けについて</a>
                {/* </Link> */}
              </li>

              <li onClick={() => (activeSection==true ? (setFaq_Tab(5),scroll.scrollTo(2600)):(setFaq_Tab(5),scroll.scrollTo(3240)))}  style={{ cursor: "pointer" }}>
                {/* <Link activeClass="first_li"  spy to="section6"> */}
                  <a className="link_text">お支払い方法について</a>
                {/* </Link> */}
              </li>
            </ul>
          </div>
          <div className="col-md-9 px-0 px-md-1">
            <div className="container  FrEndPd ">
              <Accordion>
                <section id="section1">
                  <div className="">
                    <h4
                   
                      className={
                        Faq_Tab === 0
                          ? " faq_heading_active resos"
                          : "faq_heading  "
                      }
                    >
                      会員登録・ログインについて
                    </h4>
                    <Accordion.Item
                      className="faq_acc"
                      defaultActiveKey="0"
                      eventKey="0"
                    >
                      <Accordion.Header className="acc_header text_clr ">
                        会員登録方法を教えて下さい
                      </Accordion.Header>
                      <Accordion.Body className="" show>
                        <p className="text_clr acc_text">
                          お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    {FAQData.slice(1, 5).map((items, index) => {
                      return (
                        <>
                          <Accordion.Item
                            className="faq_acc"
                            defaultActiveKey="0"
                            eventKey={index + 1}
                          >
                            <Accordion.Header className="acc_header text_clr ">
                              {items.Title}
                            </Accordion.Header>
                            <Accordion.Body className="" show>
                              <p className="text_clr acc_text">{items.body}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                   
                  </div>
                </section>
              </Accordion>
              <Accordion>
                <section id="section2">
                  <div className="nav_scroll">
                    <h4
                      className={
                        Faq_Tab == 1
                          ? "faq_heading_active"
                          : "faq_heading mt-5 mt-md-0 "
                      }
                      style={{ paddingTop: "120px" }}
                    >
                      商品について
                    </h4>
                    {FAQData.slice(5, 9).map((items, index) => {
                      return (
                        <>
                          <Accordion.Item
                            className="faq_acc"
                            eventKey={index + 5}
                          >
                            <Accordion.Header className="acc_header text_clr">
                              {items.Title}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text_clr acc_text">{items.body}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                 
                  </div>
                </section>
              </Accordion>
              <Accordion>
                <section>
                  <div className="nav_scroll" id="section3">
                    <h4
                      className={
                        Faq_Tab == 2
                          ? "faq_heading_active"
                          : "faq_heading mt-5 mt-md-0 "
                      }
                    >
                      ウェブガチャのプレイについて
                    </h4>
                    {FAQData.slice(5, 9).map((items, index) => {
                      return (
                        <>
                          <Accordion.Item
                            className="faq_acc"
                            eventKey={index + 5}
                          >
                            <Accordion.Header className="acc_header text_clr">
                              {items.Title}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text_clr acc_text">{items.body}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                    <div id="section14" ></div>
                  </div>
                </section>
              </Accordion>
              <Accordion>
                <section>
                  <div className="nav_scroll" id="section4">
                    <h4 className="faq_heading">メールの受信について</h4>
                    {FAQData.slice(5, 9).map((items, index) => {
                      return (
                        <>
                          <Accordion.Item
                            className="faq_acc"
                            eventKey={index + 5}
                          >
                            <Accordion.Header className="acc_header text_clr">
                              {items.Title}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text_clr acc_text">{items.body}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                    <div id="section15" ></div>
                  </div>
                </section>
              </Accordion>
              <Accordion>
                <section id="section5">
                  <div className="nav_scroll">
                    <h4 className="faq_heading">商品のお届けについて</h4>
                    {FAQData.slice(5, 9).map((items, index) => {
                      return (
                        <>
                          <Accordion.Item
                            className="faq_acc"
                            eventKey={index + 5}
                          >
                            <Accordion.Header className="acc_header text_clr">
                              {items.Title}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text_clr acc_text">{items.body}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                    <div id="section16" ></div>
                  </div>
                </section>
              </Accordion>
              <Accordion>
                <section id="section6">
                  <div className="nav_scroll">
                    <h4 className="faq_heading">お支払い方法について</h4>
                    {FAQData.slice(5, 9).map((items, index) => {
                      return (
                        <>
                          <Accordion.Item
                            className="faq_acc"
                            eventKey={index + 5}
                          >
                            <Accordion.Header className="acc_header text_clr">
                              {items.Title}
                            </Accordion.Header>
                            <Accordion.Body>
                              <p className="text_clr acc_text">{items.body}</p>
                            </Accordion.Body>
                          </Accordion.Item>
                        </>
                      );
                    })}
                  </div>
                </section>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
