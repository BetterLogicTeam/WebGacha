import React from "react";
// import './Password_request.css'
import "./Password_request.css";
import { useNavigate } from "react-router-dom";


function Password_request() {
  const history=useNavigate()
  return (
    <div className="container-fluid password_bg">
      <div className="row justify-content-center">
        <div className="col-12 col-md-5  my-5 ">
          <div class="py-5 px-4 bg-white password_bor">
            <div class="card-body">
              <h3 class="card-title password_h3 mb-3 LargScreen d-none d-md-block">パスワード再設定 申請</h3>
              <h3 class="card-title password_h3 my-3 MblScreen d-block d-md-none">ログイン</h3>
              <p class="card-text password_p">
                ご登録済みのメールアドレスを以下に入力し、「送信」ボタンを押してください。
                メールにてパスワード再設定のURLをお知らせいたします。※@zenco.co.jp
                からメールが受信できるよう設定を行ってください。
              </p>

              <h5 className="password_h5 mb-0">メールアドレス </h5>

              <input
                type="text"
                className=" my-3 w-100 pasword_input _border"
                id="fname"
                name="fname"
                placeholder=""
              />

              <button className="w-100 password_req_button"  onClick={()=>history(("/PaswordStepTwo"),window.scrollTo(0,0))}> 送信 </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password_request;
