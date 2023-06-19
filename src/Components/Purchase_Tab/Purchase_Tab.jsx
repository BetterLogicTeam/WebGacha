import React from "react";
import "./Purchase_Tab.css";
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import Purchase_process_one from "../Purchase_process_one/Purchase_process_one";
import Purchase_process_1 from "../Purchase_process_1/Purchase_process_1";
import Purchase_process_2 from "../Purchase_process_2/Purchase_process_2";
import Purchase_complete from "../Purchase_complete/Purchase_complete";
const steps = [
  {
    title: "購入手続き",
    content: "First-content",
  },
  {
    title: "購入確認",
    content: "Second-content",
  },
  {
    title: "購入完了",
    content: "Last-content",
  },
];

export default function Purchase_Tab() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: (
      <>
        <p className="title_purchse_tab">{item.title}</p>
      </>
    ),
    title: item.title,
  }));

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div className="Purchase_tab_bg">
      <div className="">
        <div className="container">
          <div className="outlone_tab">
            <Steps current={current} items={items} />
          </div>
          {current === 0 ? (
            <Purchase_process_one next={next}  />
          ) : current === 1 ? (
            <Purchase_process_2 prev={prev}  next={next} />
          ) : (
            <Purchase_complete />
          )}
          {/* <div style={contentStyle}>{steps[current].content}</div> */}
          <div
            style={{
              marginTop: 24,
            }}
          >
            
          </div>
        </div>
      </div>
    </div>
  );
}
