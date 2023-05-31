import React from "react";
import "./Shipping_status_Details.css";
import Table from "react-bootstrap/Table";
import play_btn from "../Assets/Taprize materials/play_btn.png";
import stop_btn from "../Assets/Taprize materials/stop_btn.png";
import icon from "../Assets/Taprize materials/icon.png";
import List_of_Results from "../List_of_Results/List_of_Results";

function Shipping_status_Details() {
  return (
    <>
    <div className="Shipping_status_Details">
      <h1 className="text-center py-5">購入-発送状況 詳細</h1>
      <div>
        <div className="container">
          <Table bordered>
            <thead>
              <tr>
                <th>発送状況 :</th>
                <th>
                  <span className="baggg">発送準備中</span>
                </th>
                <th style={{display: "none"}}>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdddd">注文番号：</td>
                <td colSpan={2}>WP20230424190235040</td>
              </tr>
              <tr>
                <td className="tdddd">購入日：</td>
                <td colSpan={2}>10個</td>
              </tr>
              <tr>
                <td className="tdddd">購入金額：</td>
                <td colSpan={2}>6,600円（税込）</td>
              </tr>
              <tr>
                <td className="tdddd">配送手数料：</td>
                <td colSpan={2}>550円（税込）</td>
              </tr>
              <tr>
                <td className="tdddd">クーポン割引額：</td>
                <td colSpan={2}>0円</td>
              </tr>
              <tr>
                <td className="tdddd">総支払額：</td>
                <td colSpan={2}>7,150円（税/配送手数料込）</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <h1 className="text-center py-5">音声ダウンロード特典</h1>

        <div className="container">
          <div className="Shipping_status_Details_scnd_tble">
            <Table bordered>
              <tbody>
                <tr>
                  <td className="tdddd">No. 1</td>
                  <td className="tdddd Shipping_status_Details_scnd_tble">
                    <img src={play_btn}></img>
                  </td>
                  <td className="text-center text-pink"><img src={icon}/> ダウンロード</td>
                </tr>
                <tr>
                  <td className="tdddd">No. 3</td>
                  <td className="tdddd Shipping_status_Details_scnd_tble">
                    <img src={stop_btn}></img>
                  </td>
                  <td className="text-center text-pink"><img src={icon}/> ダウンロード</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    <List_of_Results />
    </div>
    </>
  );
}

export default Shipping_status_Details;
