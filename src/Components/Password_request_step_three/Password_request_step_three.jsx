import React from "react";
import "./Password_request_step_three.css";
import { useNavigate } from "react-router-dom";

export default function Password_request_step_three() {
  const history=useNavigate()
  return (
    <div className="main_password_req_bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="new_password_com">
              <h3 className="mt-2 mb-0">パスワード再設定</h3>
              <label htmlFor="new_pass" className="pass_three_text mt-2 mb-3" style={{fontWeight:"600"}}>
                新パスワード
              </label>{" "}
              <br />
              <input
                type="password"
                name=""
                id="new_pass"
                className="login_page_inputss"
                placeholder="********"
              />
              <label htmlFor="new_passs" className="pass_three_text my-3" style={{fontWeight:"600"}}>
                確認用
              </label>{" "}
              <br />
              <input
                type="password"
                name=""
                id="new_passs"
                className="login_page_inputss"
                placeholder="********"
              />
              <button className="w-100 passowrd_req_3_buttond mt-4" onClick={()=>history(("/PasswordRequestStepFour"),window.scrollTo(0,0))}>パスワード再設定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
