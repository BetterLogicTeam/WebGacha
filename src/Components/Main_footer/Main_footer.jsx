import React from 'react'
import "./Main_footer.css"
import logo from "../Assets/Logog.png"

export default function Main_footer() {
  return (
    <div className='main_footer_bg'>
    <div className="container">
        <div className="row">
            <div className="col-md-4 text-center text-md-start">
                <img src={logo} alt="" />
            </div>

            <div className="col-md-8 mt-3 mt-md-0">
                <div className="footer_content">
                    <div className="upper d-flex  gap-4">
                        <p>ウェブガチャ一覧</p>
                        <p>ご利用ガイド</p>
                        <p>よくあるご質問</p>
                        <p>お問い合わせ</p>
                        <p>マイアカウント</p>
                    </div>
                    <div className="upper d-flex  gap-3">
                        <p>利用規約</p>
                        <p>プライバシーポリシー</p>
                        <p>よくあるご質問</p>
                        <p>特定商取引法に基づく表記</p>
                     
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container mt-3 all-right text-center">
        <p className='pt-3'>Copyright ©2023 Webgacha. All Rights Reserved.</p>
    </div>
    
    
    </div>
  )
}
