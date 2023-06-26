import React from 'react'
import "./Upper_footer_part.css"
import { useNavigate } from 'react-router-dom'

export default function Upper_footer_part() {
  const history=useNavigate()
  return (
    <div className='main_sea_part'>
    <h2 className='mainSEa_heaidn'>
    完全オリジナルグッズだけのカプセルプ<br className='bbrr' /> ライズ！
    
    </h2>
    <p className='pt-3'>企画・製造・販売まで手掛けているから、ここにしかない商品をお届け。</p>

   
    <div className="container pt-3 pt-md-5 pb-5">
    <div className="d-flex gap-4 justify-content-center hgh9 ">
        <div className="">
    <button className=' upper_footer_main_button me-3 me-md-0 ' onClick={()=>(history('/ContactUs'),window.scrollTo({top:0,behavior:'instant'}))}>お問い合わせ</button>

        </div>
        <div className="">
    <button className=' upper_footer_main_red_button hggt' onClick={()=>(history('/ListOTaprize'),window.scrollTo({top:0,behavior:'instant'}))}>ウェブガチャ一覧はコチラ</button>

        </div>
    </div>
    </div>


    </div>
  )
}
