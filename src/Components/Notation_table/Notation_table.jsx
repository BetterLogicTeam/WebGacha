import React from "react";
// import from './Notation.css'
import "./Notation_table.css";
import Notation from "../Notation/Notation";

function Notation_table() {
  return (
    <>
    <Notation/>
    <div className="container-fluid bbgg">
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2  notataion_border p-3">
          <p>メールアドレス</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">example@email.jp</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2  notataion_border p-3">
          <p className=""> URL</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">http://webgacha.net</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p> 商標登録出願番号 </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">商願 2016-39243</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>商品以外の必要代金</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">配送手数料：原則1個〜20個までにつき550円 [税込]</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>注文方法</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">クレジットカード/携帯キャリア決済</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>配送業者</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">ヤマト運輸</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>商品の発送</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">
            各ウェブガチャにより異なるため、各販売ページにお届け目安を記載しております。お客様ご自身でご確認頂けます様お願い致します。
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>
            海外発送 <p></p>
          </p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">海外発送はお取り扱いしておりません。</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>返品・交換</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">
            商品のキャンセル、返品、交換は受け付けておりませんのでご了承ください。ただし、商品が不良品の場合、または異なる商品が到着した場合は交換をさせて頂きます。万が一、交換商品が無い場合は商品代金を返金させて頂きます。※以下の場合は返品・交換はお受け致しかねます。・お客様のご都合での返品（イメージと違う、2重に取得した等）・商品到着から3日以上経過した商品・一度使用された商品・お客様のもとで汚れやキズが生じた商品商品をご購入頂いた後に退会手続きをされた場合でもご購入頂いた商品はキャンセルされません。ご了承ください。
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>商品の同梱</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">
            同一ウェブガチャの購入では、原則注文回数にかかわらず1個から20個までを同一梱包にて発送します。
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>18歳未満のご購入</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">
            18歳未満の方のご購入は必ず保護者の方とご一緒にご注文頂きますよう、お願い致します。
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>長期不在・受取拒否</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">
            お客様都合による受取拒否（長期不在、住所不備などを含む）をされた場合は配送中止扱いとさせて頂きます。受取拒否された商品の保管期間は、出荷日より10日間とさせて頂きます。再出荷をご希望のお客様は、着払い(お客様負担)での出荷となりますのでご了承ください。
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>お問い合わせ</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="T_p">
            お問い合せは当サイトのお問い合わせフォームより24時間受け付けております。お問い合せには土日祝日・夏季休暇・年末年始などを除き、原則として3営業日以内にご返答させて頂きます。ただし、お問い合わせの内容によってはご回答にお時間がかかる場合、ご回答できない場合もございます。予めご了承ください。
          </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-2 notataion_border p-3">
          <p>電話番号</p>
        </div>
        <div className="col-7 tableBg notataion_border   p-3">
          <p className="T_p">00-0000-0000</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Notation_table;
