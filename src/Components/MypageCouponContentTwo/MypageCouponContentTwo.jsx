import React from 'react'
import './MypageCouponContentTwo.css'

function MypageCouponContentTwo() {
  return (
   
    <div className="container-fluid MypageCouponContentTwoBg">
        <div className="row py-5 px-3 justify-content-center">
            <div className="col-md-5 col-12 bg-white thisCouponBorder">

                <h3 className='MyPageCoupon_h3 text-start'>
                クーポン取得
                </h3>

                <p className='MyPageCoupon_p1 mb-1'>クーポンコードを入力して 「取得する」ボタンを押してください。</p>


                <input
                type="text"
                name=""
                id="new_passs"
                className="login_page_inputss "
                placeholder="1234567891011"
              />

                <p className='MyPageCoupon_p text-start mt-3'>*クーポンコードは16桁の文字列です。</p>

                <div className='d-flex gap-3 justify-content-evenly medi_two_btn nwaha'>


                <button className=' white_button '> バック </button>

                <button className=' red_button down_btn'>  取得する</button>
                </div>
            </div>
        </div>
    </div>

  )
}

export default MypageCouponContentTwo