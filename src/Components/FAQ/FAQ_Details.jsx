import React from "react";
import Accordion from "react-bootstrap/Accordion";
import FAQData from "./FAQ_Data";
export default function FAQ_Details({length}) {
  return (
    <div className="container  FrEndPd">
      <h4 className="faq_heading mt-5 mt-md-0">会員登録・ログインについて</h4>
      <Accordion defaultActiveKey="0">
      <Accordion.Item className="faq_acc"  defaultActiveKey="0" eventKey="0">
                <Accordion.Header className="acc_header text_clr " >
                会員登録方法を教えて下さい
                </Accordion.Header>
                <Accordion.Body className="" show>
                  <p className="text_clr acc_text">
        お客様の会員登録内容の確認及び変更は、ログイン後「マイページ」→「お客様情報」で変更できます。尚、登録内容変更ではなく新規会員登録をしてしまいますと重複会員登録となり、ログイン出来なくなる可能性がございますのでご注意下さい
                  
                     </p>
                </Accordion.Body>
              </Accordion.Item>
        {FAQData.slice(1,length).map((items, index) => {
          return (
            <>
              <Accordion.Item className="faq_acc"  defaultActiveKey="0" eventKey={index+1}>
                <Accordion.Header className="acc_header text_clr " >
                 {items.Title}
                </Accordion.Header>
                <Accordion.Body className="" show>
                  <p className="text_clr acc_text">
                   {items.body}
                     </p>
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}
      

        <div className=" my-5">
          <h4 className="faq_heading">商品について</h4>
          {FAQData.slice(length,9).map((items, index) => {
          return (
            <>
              <Accordion.Item className="faq_acc"   eventKey={index+5}>
                <Accordion.Header className="acc_header text_clr">
                 {items.Title}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="text_clr acc_text">
                   {items.body}
                     </p>
                </Accordion.Body>
              </Accordion.Item>
            </>
          );
        })}

        

        
        </div>
      </Accordion>
    </div>
  );
}
