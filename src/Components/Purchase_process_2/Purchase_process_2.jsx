import React from "react";
import "./Purchase_process_2.css";

export default function Purchase_process_2({prev,next}) {
  return (
    <div className="Purchase_process_2_main">
      <h3 className="h3_text py-5">購入確認</h3>
      <div className="container ">
        <div className="row  justify-content-center ">
          <div className="col-5 border_table  d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> ウェブガチャ名 </p>
          </div>
          <div className="col-7 border_table1  bg-white     notataion_border p-3 ">
            <p className="T_p">
            うるわしの宵の月
            </p>
          </div>
        </div>

        <div className="row  justify-content-center ">
          <div className="col-5 d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> プレイ単価（税込） </p>
          </div>
          <div className="col-7 bg-white     notataion_border p-3 1">
            <p className="T_p">
            660円
            </p>
          </div>
        </div>
        <div className="row  justify-content-center ">
          <div className="col-5 d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> 回数 </p>
          </div>
          <div className="col-7 bg-white     notataion_border p-3 1">
            <p className="T_p">
            1回
            </p>
          </div>
        </div>
        <div className="row  justify-content-center ">
          <div className="col-5 d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> 配送手数料（税込） </p>
          </div>
          <div className="col-7 bg-white     notataion_border p-3 ">
            <p className="T_p">
            550円
            </p>
          </div>
        </div>
        <div className="row  justify-content-center ">
          <div className="col-5 d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> クーポン割引額 </p>
          </div>
          <div className="col-7 bg-white     notataion_border p-3 1">
            <p className="T_p">
            0円
            </p>
          </div>
        </div>
        <div className="row  justify-content-center ">
          <div className="col-5 border_table2 d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> 総支払金額（税込） </p>
          </div>
          <div className="col-7 border_table3 bg-white     notataion_border p-3 1">
            <p className="T_p">
            1,210円
            </p>
          </div>
        </div>
        <div className="row mt-5  justify-content-center ">
          <div className="col-5 border_table d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> 支払方法 </p>
          </div>
          <div className="col-7 border_table1 bg-white     notataion_border p-3 1">
            <p className="T_p">
            キャリア決済
            </p>
          </div>
        </div>
        <div className="row   justify-content-center ">
          <div className="col-5 border_table2 d-flex align-items-center bg-white col-md-2 notataion_border  p-3 ">
            <p className="mb-0"> キャリア </p>
          </div>
          <div className="col-7 border_table3 bg-white     notataion_border p-3 1">
            <p className="T_p">
            SoftBankまとめて支払い
            </p>
          </div>
        </div>
        <d className="d-flex flex-column flex-md-row  gap-3 justify-content-center mt-5">
            <button className="whiteeee_button" onClick={()=>(prev(),window.scrollTo(0, 0))} >戻る</button>
            <button className="reddd_button" onClick={()=>(next(),window.scrollTo(0, 0))} >続ける</button>
        </d>
      </div>
    </div>
  );
} 
