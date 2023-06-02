import React from 'react'
import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import Purchase_process_one from "../Purchase_process_one/Purchase_process_one";
import Purchase_process_1 from "../Purchase_process_1/Purchase_process_1";
import Purchase_process_2 from "../Purchase_process_2/Purchase_process_2";
import Purchase_complete from "../Purchase_complete/Purchase_complete";
import Register from '../Register/Register';
import Register_Step_Two from '../Register/Register_Step_Two';
import Edit_page_two from '../Edit_page_two/Edit_page_two';
import Register_Step_Three from '../Register/Register_Step_Three';
import Register_page_3 from '../Register_page_3/Register_page_3';
import './Registeration_tab.css'
const steps = [
    {
      title: "会員登録入力",
      content: "First-content",
    },
    {
      title: "確 認",
      content: "Second-content",
    },
    {
      title: "完 了",
      content: "Last-content",
    },
  ];

export default function Registeration_tab() {
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
    <div>
      <div className="Purchase_tab_bg">
      <div className="">
        <div className="container">
          <div className="outlone_tab">
            <Steps current={current} items={items} />
          </div>
          {current === 0 ? (
            <Register next={next}  />
          ) : current === 1 ? (          
            <Edit_page_two prev={prev}  next={next} />
          ) : (
            <Register_page_3/>
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
    
    </div>
  )
}
