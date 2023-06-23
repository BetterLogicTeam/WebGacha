import React from "react";
import "./Landing_Page.css";
import { useNavigate } from 'react-router-dom'
export default function   Landing_Page() {
  const history=useNavigate()
  return (
    <>
      <div className="landing_Bg">
        <div className="main_div_Landing">
          <div className="inner_text_landing">
            <h1>限定グッズが必ず当たる！</h1>
            <h1> Web版カプセルプライズ！</h1>
            <p className="mb-0 py-3 ">
              企画・製造・販売まで手掛けているから、ここにしかない商品をお届け。
            </p>
            <div className="d-flex justify-content-center mt-1">

            <button className="VeryfstButton" onClick={()=>(history('/ListOTaprize'),window.scrollTo(0,0))}>販売中のタップライズをチェック！</button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------ News--------------------------- */}
      <div className="Slider_News_Bg">
        <h1 className="News_Heading">ニュース</h1>
      </div>
    </>
  );
}

