import React from "react";
import Table from "react-bootstrap/Table";


export default function Register_Step_Two() {
  return (
    <>
    <div>
    <h1 className="text-center py-5">登録内容の確認</h1>
    <div className="container">
          <Table bordered>
            <thead>
              <tr>
                <th>お名前（フリガナ）</th>
                <th>
                  <span className="baggg">お名前 </span>
                  <span className="baggg ps-5">フリガナ </span>
                  <br/>
                  <span className="baggg">山田 太郎 </span>
                  <span className="baggg ps-4">ヤマダ タロウ </span>
                </th>
                <th style={{display: "none"}}>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdddd">住所</td>
                <td colSpan={2}>
                <span className="baggg">〒100 0001 </span>
                  <br/>
                  <span className="baggg">青森県 品川区 西五反田 1-1-11 </span>
                  <br/>
                  <span className="baggg">五反田マンション 101号室 </span>
                </td>
              </tr>
              <tr>
                <td className="tdddd">生年月日</td>
                <td colSpan={2}>1995年11月09日</td>
              </tr>
              <tr>
                <td className="tdddd">性別</td>
                <td colSpan={2}>女性</td>
              </tr>
              <tr>
                <td className="tdddd">電話番号</td>
                <td colSpan={2}>090 1234 5678</td>
              </tr>
              <tr>
                <td className="tdddd">メールアドレス</td>
                <td colSpan={2}>xyz@gmail.com</td>
              </tr>
              <tr>
                <td className="tdddd">パスワード</td>
                <td colSpan={2}>************</td>
              </tr>
              <tr>
                <td className="tdddd">メールマガジン</td>
                <td colSpan={2}>受け取る</td>
              </tr>
            </tbody>
          </Table>
        </div>
    </div>
    </>
  );
}
