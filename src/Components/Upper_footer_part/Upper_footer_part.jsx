import React from 'react'
import "./Upper_footer_part.css"
import { useNavigate } from 'react-router-dom'

export default function Upper_footer_part() {
  const history=useNavigate()
  return (
    <div className='main_sea_part'>
    <h2 className='mainSEa_heaidn'>
    完全オリジナルグッズだけのカプセルプ <br /> ライズ！
    
    </h2>
    <p className='pt-3'>企画・製造・販売まで手掛けているから、ここにしかない商品をお届け。</p>

   
    <div className="container py-5">
    <div className="row justify-content-center m-0">
        <div className="col-md-4">
    <button className=' white_button'onClick={()=>(history('/ContactUs'),window.scrollTo(0,0))}>お問い合わせ</button>

        </div>
        <div className="col-md-4 mt-md-0 mt-3">
    <button className=' red_button' onClick={()=>(history('/ListOTaprize'),window.scrollTo(0,0))}>ウェブガチャ一覧はコチラ</button>

        </div>
    </div>
    </div>


    </div>
  )
}
