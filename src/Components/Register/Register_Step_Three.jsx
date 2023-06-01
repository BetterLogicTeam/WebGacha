import { Button } from "antd";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";

export default function Register_Step_Three() {

    const [step, setstep] = useState(0)
  return (
    <>
    {
        step === 0 ? <>
        <div className="container">
        <div>
          <h1 className="text-center pt-5 pb-3 Register_Step_Three">
            仮登録完了
          </h1>
          <p className="Register_Step_Three_para">
            まだ本登録は完了していません。
          </p>
          <p className="text-center Register_Step_Three_scnd_para">
            ご入力されたメールアドレスに仮登録のメールを送りましたので、その本文に記載されたURLをクリックして本登録を完了して下さい。
          </p>
          <p className="text-center Register_Step_Three_scnd_para">
            もしメールが届かない場合は入力されたメールアドレスが間違っているか、携帯メールアドレスの場合はドメインの受信登録が違っている可能性があります。
            （ドメインの受信登録は zenco.co.jp です）
          </p>

            <div className="step_change">
          <Button className="next_btttn" onClick={() => setstep()}>
          マイページへ
              </Button>
              </div>
        </div>
      </div>
        </> : <>
        <div className="container">
        <div>
          <h1 className="text-center pt-5 pb-3 Register_Step_Three">
          登録完了
          </h1>
          <p className="text-center Register_Step_Three_scnd_para">
          会員登録が完了いたしました。ウェブガチャをお楽しみください。
          </p>
          <p className="text-center Register_Step_Three_scnd_para">
          登録内容を変更したい場合は下記マイページからお願いいたします。
          </p>
        </div>
      </div>
        </>
    }
      
    </>
  );
}
