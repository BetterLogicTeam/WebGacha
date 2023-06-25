import React from 'react'
import './Confirmataion.css'
import { useNavigate } from 'react-router-dom'

function Confirmataion() {
  const history=useNavigate()

  return (
   <div className="container-fluid confirmation_bg px-4">
   <h1 className='d-flex justify-content-center py-5 '>お問い合わせ 確認</h1>
    <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-3  notataion_border p-3 border_mob border_table">
          <p className="ghgh">お問い合わせ種別</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3 border_table1">
          <p className="hjhj">入会について </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-3  notataion_border p-3 border_mob ">
          <p className="ghgh">お名前（フリガナ）</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3 ">
          <p className="T_p"> <span className='pe-3'> お名前 </span> <span className='ps-5'> フリガナ </span> <br />
          
          <span className='hjhj'>山田 太郎</span> <span className='ps-5 hjhj'> ヤマダ タロウ </span>
           </p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-3  notataion_border p-3 ">
          <p className="ghgh">メールアドレス</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3">
          <p className="hj">abc@mail.com</p>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-5 tableBg col-md-3   p-3 border_mob border_table2">
          <p className="ghgh">お問い合わせ内容</p>
        </div>
        <div className="col-7 tableBg notataion_border p-3 border_table3">
          <p className="hjhj">46供どれきド庶社ッフをく総氷るかねよ朝文ムイタラ将朝きさ号助トケム岐専トモマウ白惑散ヤロサモ護31体アエハ半語ばぎ。型けあん変図さよゆ共会をなゅべ点松ムフ氏皇ニヌル原積の譲国広強ク振未わゃろち背裁じ改読りよわリ要聞をリごあ勇星奥謝除び。
          業香モヒエ芸明リ留港霊みいなげ業8新シミウ校意ゅぞつわ携写81浜7補ナ気記っわトレ改制サホヘ的度スウワイ治均拠ゆリ。</p>
        </div>
      </div>

      <div className="row justify-content-center my-4 gap-4">
        <button className='new_white_btn hgfdf' onClick={()=>history('/ContactUs')} > 戻る</button>
        <button className='new_red_btn  mb-5'> 送信する </button>

      </div>
   </div>
  )
}

export default Confirmataion