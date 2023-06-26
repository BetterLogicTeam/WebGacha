import React from 'react'
import play_btn from "../Assets/Taprize materials/play_btn.png";
import stop_btn from "../Assets/Taprize materials/stop_btn.png";
import icon from "../Assets/Taprize materials/icon.png";
import List_of_Results from "../List_of_Results/List_of_Results";
export default function New_detail() {
  return (
    <div>
       <div className="container mobile_vala_stauts">
            <div className="row justify-content-center ">
              <div className="col-6 tableBg  border_table notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center tableBg align-items-center  bgtableicon notataion_border p-3">
                <img src={play_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table1 d-flex justify-content-center align-items-center tableBg notataion_border p-3">
                <img src={icon} className="mobile_main_img"/>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg   notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center tableBg bgtableicon  notataion_border p-3">
                <img src={stop_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table3 d-flex justify-content-center align-items-center tableBg notataion_border p-3">
                <img src={icon}  className="mobile_main_img"/>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg   notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center tableBg bgtableicon  notataion_border py-3">
                <img src={play_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table3 d-flex justify-content-center align-items-center tableBg notataion_border py-3">
                <img src={icon}  className="mobile_main_img"/>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg   notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center tableBg bgtableicon  notataion_border py-3">
                <img src={play_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table3 d-flex justify-content-center align-items-center tableBg notataion_border py-3">
                <img src={icon}  className="mobile_main_img"/>
              </div>
            </div>
          </div>

          <div className="container desktop_vala_stauts">
            <div className="row justify-content-center ">
              <div className="col-6 tableBg new_fntt border_table notataion_border p-3">
                <p> No.1 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg  bgtableicon notataion_border p-3">
                <img src={play_btn}></img>
              </div>
              <div className="col-4 border_table1 d-flex justify-content-center tableBg notataion_border p-3">
                <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg new_fntt  notataion_border p-3">
                <p> No.3 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg bgtableicon  notataion_border p-3">
                <img src={stop_btn}></img>
              </div>
              <div className="col-4 border_table3 d-flex justify-content-center tableBg notataion_border p-3">
              <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg new_fntt  notataion_border p-3">
                <p> No.3 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg bgtableicon  notataion_border p-3">
                <img src={play_btn}></img>
              </div>
              <div className="col-4 border_table3 d-flex justify-content-center tableBg notataion_border p-3">
              <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>
            
            <div className="row">
              <div className="col-6 border_table2 tableBg new_fntt  notataion_border p-3">
                <p> No.4 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg bgtableicon  notataion_border p-3">
                <img src={play_btn}></img>
              </div>
              <div className="col-4 border_table3 d-flex justify-content-center tableBg notataion_border p-3">
              <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>
          </div>
    
    </div>
  )
}
