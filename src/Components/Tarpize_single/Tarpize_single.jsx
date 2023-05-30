import React from 'react'
import  "./Tarpize_single.css"
import tarp from "../Assets/tarpize.png"

export default function Tarpize_single() {
  return (
    <div className='tarpize_single_main'>
    <div className="container-fulid">
        <div className="row m-0">
            <div className="col-md-6">
                <img src={tarp} className='w-100' alt="" />
            </div>
            <div className="col-md-6">
            <div className="tarsize_content text-start">
            <p>コレクションページに戻る</p>
                <h3 className='text_clr'>外ヒカト梨全エタス芸3転トメヌネ玉場よ</h3>
            </div>
            <div className='bor_content'>
                <p className='text-clr fw-bold '>販売価格:</p>
             <p className='text-clr '>1回660円(税込)</p>
            </div>
            <div className='bor_content'>
                <p className='text-clr fw-bold '>販売期間:</p>
             <p className='text-clr '>2023/05/05 (金) 12:00～2023/05/26 (金) 23:59</p>
            </div>
            <div className='bor_content align-items-center border-none'>
                <p className='text-clr fw-bold '>数量:</p>
             <div className='d-flex gap-3'>
                <input type="number" placeholder='1' className='number_tarpize' name="" id="" />
                <button className='white_button'>10連ガチャ (ボイス付き) </button>
             </div>
            </div>
            <div className="row align-items-center my-3">
                <div className="col-md-8">
                    <button className='red_button'> 購入する  - 1回660円(税込)</button>
                </div>
                <div className="col-md-2 mt-3 mt-md-0">
                    <div className="circula">

                    </div>
                </div>
            </div>
              
            </div>
        </div>
    </div>


    </div>
  )
}
