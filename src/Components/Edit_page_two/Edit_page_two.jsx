import React from "react";
import "./Edit_page_two.css";
import { useNavigate } from "react-router-dom";

export default function Edit_page_two({ prev, next }) {
  let url = window.location.pathname;
  // console.log("url", url);
  const history = useNavigate();
  return (
    <div className="edit_main_page ">
      <h3 className="h3_text text-center mt-2 mt-md-5">登録内容の確認 </h3>
      <div className="container main_cont my-5 ">
        <div className=" text-start">
          <div className="row   borrrrrrrrr justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 border_table tableBg col-md-2 borrrrrrrrr_right  notataion_border p-3">
              <p className="mb-0">お名前（フリガナ）</p>
            </div>
            <div className="col-8 d-flex align-items-center flex-column flex-md-row col-md-9 tableBg border_table1 notataion_border p-3">
              <div className="d-flex gap-4">
                <p className="edit_textt mb-0">お名前</p>
                <p className="edit_textt mb-0">フリガナ</p>
              </div>
              <div className="d-flex gap-4">
                <p className="edit_text mb-0">山田 太郎</p>
                <p className="edit_text mb-0">ヤマダ タロウ</p>
              </div>
            </div>
          </div>

          <div className="row    justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 tableBg borrrrrrrrr_right text-start col-md-2  notataion_border p-3">
              <p className="mb-0"> 住所</p>
            </div>
            <div className="col-8  align-items-center col-md-9 tableBg notataion_border p-3">
              <p className="edit_text mb-0">〒100 0001</p>
              <p className="edit_text mb-0">青森県 品川区 西五反田 1-1-11</p>
              <p className="edit_text mb-0">五反田マンション 101号室</p>
            </div>
          </div>

          <div className="row borrrrrrrrr   justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p className="mb-0"> 生年月日 </p>
            </div>
            <div className="col-8 d-flex align-items-center col-md-9 tableBg notataion_border p-3">
              <p className="edit_text mb-0">1995年11月09日</p>
            </div>
          </div>

          <div className="row borrrrrrrrr   justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p className="mb-0" >性別</p>
            </div>
            <div className="col-8 d-flex align-items-center col-md-9 tableBg notataion_border p-3">
              <p className="edit_text mb-0">女性</p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p className="mb-0">電話番号</p>
            </div>
            <div className="col-8 d-flex align-items-center col-md-9 tableBg notataion_border p-3">
              <p className="edit_text mb-0">090 1234 5678</p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p className="mb-0">メールアドレス</p>
            </div>
            <div className="col-8 d-flex align-items-center col-md-9 tableBg notataion_border p-3">
              <p className="edit_text mb-0">xyz@gmail.com</p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p className="mb-0">パスワード</p>
            </div>
            <div className="col-8 d-flex align-items-center col-md-9 tableBg notataion_border p-3">
              <p className="edit_text mb-0">************ </p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-4 d-flex align-items-center col-md-3 border_table2 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p className="mb-0">メールマガジン</p>
            </div>
            <div className="col-8 d-flex align-items-center col-md-9 tableBg border_table3 notataion_border p-3">
              <p className="edit_text mb-0">受け取る </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {url == "/EditPageTwo" ? (
            <>
              {" "}
             
                <button onClick={()=>(history('/MyPageEdit1'),window.scrollTo({top:0,behavior:'instant'}))} className="editED_white"> 戻る</button>
             
             
                <button className="editEDE_red ms-0 ms-md-4 mt-3 mt-md-0" onClick={()=>(history('/MyPageEditThree'),window.scrollTo({top:0,behavior:'instant'}))}>
                  登録を変更する{" "}
                </button>
   
            </>
          ) : (
            <>
              {" "}
              <div className=" col-lg-4 px-0  col-md-12">
                <button className="editED_white" onClick={() => prev()}>
                  戻る
                </button>
              </div>
              <div className="col-md-12 px-0 col-lg-4 editPageLsttBotton">
                <button className="editEDE_red " onClick={() => (next(),window.scrollTo({top:0,behavior:'instant'}))}>
                続ける{" "}
                </button>
              </div>{" "}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
