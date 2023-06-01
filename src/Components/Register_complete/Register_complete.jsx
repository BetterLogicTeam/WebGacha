import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Register_complete() {
  const history=useNavigate()
  return (
    <div className='register_main_bg py-5'>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-4">
                <div className="complete_content text-center">
                    <h3 className='h3_text'>登録完了</h3>
                    <p className='ptext'>会員登録が完了いたしました。ウェブガチャをお楽しみください。</p>
                    <p className='ptext'>登録内容を変更したい場合は下記マイページからお願いいたします</p>
                    <button className='white_button' onClick={()=>history('/Login')}> 
                    マイページへ
                    </button>
                </div>
            </div>
        </div>
    </div>

    
    
    
    </div>
  )
}
