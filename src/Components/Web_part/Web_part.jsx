import React from 'react'
import "./Web_part.css"
import imgg from "../Assets/web.svg"
import hh from "../Assets/home.svg"
import book from "../Assets/book.svg"
import box from "../Assets/box.svg"

export default function Web_part() {
  return (
    <div className=' text-center'>
    <div className='main_web_part'>
    <img src={imgg} alt="" />
</div>
<div className="container design">
    <div className="row">
        <div className="col-md-4">
        <img src={hh} alt="" />
        <p>Web上での販売経路のご提供！</p>
        <p>ウェブガチャはWeb上で行うカプセルプライズです。Web上での販売となるため、24時間お好きな時にプレイができ、商品販売に必要な実店舗や人員の手配は必要ありません。最短２週間で販売をスタートすることができます。</p>

        </div>
        <div className="col-md-4">
        <img src={book} alt="" />
        <p>Web上での販売経路のご提供！</p>
        <p>ウェブガチャはWeb上で行うカプセルプライズです。Web上での販売となるため、24時間お好きな時にプレイができ、商品販売に必要な実店舗や人員の手配は必要ありません。最短２週間で販売をスタートすることができます。</p>

        </div>
        <div className="col-md-4">
        <img src={box} alt="" />
        <p>Web上での販売経路のご提供！</p>
        <p>ウェブガチャはWeb上で行うカプセルプライズです。Web上での販売となるため、24時間お好きな時にプレイができ、商品販売に必要な実店舗や人員の手配は必要ありません。最短２週間で販売をスタートすることができます。</p>

        </div>
    </div>
</div>

    </div>
  )
}
