import React from 'react'
import "./Password_request_step_three.css"

export default function Password_request_step_three() {
  return (
    <div className='main_password_req_bg'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="new_password_com">
                <h3>パスワード再設定</h3>
                <label htmlFor='new_pass' className='ptext my-3'>新パスワード</label> <br />
                <input type="password" name="" id="new_pass" className='login_page_inputss' placeholder='********' />
                <label htmlFor='new_passs' className='ptext my-3'>確認用</label> <br />
                <input type="password" name="" id="new_passs" className='login_page_inputss' placeholder='********' />

                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
