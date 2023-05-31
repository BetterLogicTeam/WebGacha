import React from "react";
// import './Password_request.css'
import "./Password_request.css";
import { useNavigate } from "react-router-dom";


function Password_request() {
  const history=useNavigate()
  return (
    <div className="container-fluid password_bg">
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 my-5 ">
          <div class="py-5 px-4 bg-white password_bor">
            <div class="card-body">
              <h3 class="card-title password_h3 my-3">パスワード再設定 申請</h3>
              <p class="card-text password_p">
                ご登録済みのメールアドレスを以下に入力し、「送信」ボタンを押してください。
                メールにてパスワード再設定のURLをお知らせいたします。※@zenco.co.jp
                からメールが受信できるよう設定を行ってください。
              </p>

              <h5 className="password_h5">メールアドレス </h5>

              <input
                type="text"
                className=" my-3 w-100 pasword_input _border"
                id="fname"
                name="fname"
                placeholder="elunub3@gmail.com"
              />

              <button className="w-100 red_button"  onClick={()=>history("/PaswordStepTwo")}> 送信 </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password_request;
