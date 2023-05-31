import React from 'react'
import "./Password_request_step_four.css"

export default function Password_request_step_four() {
  return (
    <div className='Password_request_step_four_main'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="password_fout_content">
                    <h3 className='h3_text'>パスワード再設定 完了</h3>
                    <p className='ptext'>パスワードの再設定が完了いたしました。  <br />  再度ログインしてください。</p>
               
<button className='red_button'>ログイン画面へ</button>               
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
