import React from "react";
import "./Login_page.css";
import login_right from "../Assets/login_right.svg";
import { useNavigate } from "react-router-dom";

export default function Login_page() {
  const history= useNavigate()
  return (
    <div className="main_login_page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 PDngEnd">
            <div className="input_login_side">
              <h3 className="my-4">ログイン</h3>
              <label className="Login_label" htmlFor="login_first">
                ログインID
              </label>{" "}
              <br />
              <input
                type="text"
                id="login_first"
                placeholder="Eメール"
                className="login_page_inputss"
              />
              <label className="Login_label my-4" htmlFor="login_second">
              パスワード
              </label>{" "}
              <br />
              <input
                type="text"
                id="login_second"
                placeholder=""
                className="login_page_inputss"
              />
              <div className="d-flex chec gap-3 my-4">
                <input
                  type="checkbox"
                  className="login_check"
                  name=""
                  id="checkBox"
                />
                <label htmlFor="checkBox" className="check_box_text">
                  ログインIDを保存する
                </label>
              </div>
              <button className="login_red_button">ログイン</button>
              <p className="left_side_p" onClick={()=>history(("/PasswordRequest"),window.scrollTo(0,0))} style={{cursor:"pointer"}} >パスワードを忘れた方はこちら</p>
            </div>
          </div>

          <div className="col-md-6 mt-3 mt-md-0 PDngEnd">
            <div className="new_member text-center">
              <img src={login_right} className="my-2" alt="" />
              <h2>新規会員登録</h2>
              <h6 className="mb-4">まだ会員でない方は下記ボタンより会員登録を行ってください</h6>
              
              <button className=" login_white_btn   welU" onClick={()=>(history('/RegisterationTab'),window.scrollTo(0,0))}>新規会員登録</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
