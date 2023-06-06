import React from "react";
import "./Landing_Page.css";
export default function   Landing_Page() {
  return (
    <>
      <div className="landing_Bg">
        <div className="main_div_Landing">
          <div className="inner_text_landing">
            <h1>限定グッズが必ず当たる！</h1>
            <h1> Web版カプセルプライズ！</h1>
            <p className="mt-2">
              企画・製造・販売まで手掛けているから、ここにしかない商品をお届け。
            </p>
            <div className="d-flex justify-content-center mt-1">

            <button>販売中の販売中のウェブガチャをチェック！</button>
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

//font family japanese language barlow
