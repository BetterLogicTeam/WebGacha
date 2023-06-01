import React from 'react'
import "./Register_page_3.css"

export default function Register_page_3() {
  return (
    <div className='main_Register_page_3'>
    <div className="register_page_3_content text-center">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
            <h3 className='h3_text'>仮登録完了</h3>
<h6 className='h6_text py-3' style={{color:"#E63700"}}>まだ本登録は完了していません。</h6>
<p className='ptext'>ご入力されたメールアドレスに仮登録のメールを送りましたので、その本文に記載されたURLをクリックして本登録を完了して下さい。</p>
<p className='ptext'>もしメールが届かない場合は入力されたメールアドレスが間違っているか、携帯メールアドレスの場合はドメインの受信登録が違っている可能性があります。
（ドメインの受信登録は zenco.co.jp です）</p>
<div className="row justify-content-center">
    <div className="col-md-4">
        <button className='register_buttton'>再度、確認書を送付する</button>
    </div>
</div>

            </div>
        </div>
    </div>



    </div>



    </div>
  )
}
