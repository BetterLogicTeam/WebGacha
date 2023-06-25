import React from "react";
import "./Password_request_step_four.css";
import { useNavigate } from "react-router-dom";

export default function Password_request_step_four() {
  const history= useNavigate()
  return (
    <div className="Password_request_step_four_main">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="password_fout_content">
              <h3 className="h3_text text-start">パスワード再設定 完了</h3>
              <p className="pass_4_tst mt-3 mb-4">
                パスワードの再設定が完了いたしました。 <br />
                再度ログインしてください。
              </p>

              <button className="pass_word_4_vtuubt" onClick={()=>history("/Login")} >ログイン画面へ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
