import React from "react";
import "./Web_part.css";
import hh from "../Assets/home.svg";
import book from "../Assets/book.svg";
import box from "../Assets/box.svg";

export default function Web_part() {
  return (
    <div className=" text-center ftrUpprAGN">
      <div className="main_web_part">
        {/* <img src={imgg} alt="" /> */}
        <h1 className="web">
          Web上で行う <br /> 限定グッズ販売サービス
        </h1>
      </div>
      <div className="container design">
        <div className="row">
          <div className="col-md-4">
            <img src={hh} alt="" />
            <p className="web_part_title">Web上での販売経路のご提供！</p>
            <p className="web_part_para">
              ウェブガチャはWeb上で行うカプセルプライズです。Web上での販売となるため、24時間お好きな時にプレイができ、商品販売に必要な実店舗や人員の手配は必要ありません。最短２週間で販売をスタートすることができます。
            </p>
          </div>
          <div className="col-md-4">
            <img src={book} alt="" />
            <p className="web_part_title">オリジナルページでのカプセルプライズが可能！</p>
            <p className="web_part_para">
            作品ページではメインビジュアルや、ロゴ、背景色など自由にカスタマイズが可能です。作品にあった雰囲気のページを生成することができるので、世界観を崩すことなくお客様にご提供致します。
            </p>
          </div>
          <div className="col-md-4">
            <img src={box} alt="" />
            <p className="web_part_title">オリジナル商品のご提案から製作～配送まで一括対応！</p>
            <p className="web_part_para">
            使用できる素材とコンテンツの情報をご提供頂ければ、グッズのデザインからご提案いたします。豊富なグッズ形態から、ここにしかないオリジナルグッズの製作が可能です。ウェブガチャの販売グッズは受注生産が主ですが、在庫商品の販売としてもお使いいただけます。 購入後のお客様宛ての発送作業まで全てお任せください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
