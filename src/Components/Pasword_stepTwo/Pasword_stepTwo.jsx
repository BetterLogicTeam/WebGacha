import React from "react";
import "./Pasword_stepTwo.css";
import { useNavigate } from "react-router-dom";

function Pasword_stepTwo() {
  const history=useNavigate()

  return (
    <div className="container-fluid passwordStepTwo_bg ">
      <div className="row justify-content-center">
        <div className="col-12 px-2 col-md-5  py-5  ">
          <div className="bg-white py-5 px-4 bordd">
            <h3 className="passtpTwo_h3">パスワード再設定 申請完了</h3>

            <p className="passwordstepTwo_p my-3">
              登録されているメールアドレスにパスワード再設定のURLをお送りいたしました。
            </p>

            <p className="passwordstepTwo_p my-4">
              メールが届かない場合は、再度申請をお願いいたします。
            </p>

            <button className="white_button w-100" onClick={()=>history(("/PasswordRequestStepThree"),window.scrollTo(0,0))}> 戻る </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pasword_stepTwo;
