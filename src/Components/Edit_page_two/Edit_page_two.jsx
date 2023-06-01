import React from 'react'
import "./Edit_page_two.css"

export default function Edit_page_two() {
  return (
    <div className='edit_main_page'>
    <h3 className="h3_text text-center">
    登録内容の確認
    </h3>
       <div className="container main_cont my-5 ">
        <div className=" text-start">
          <div className="row   borrrrrrrrr justify-content-center">
            <div className="col-5 border_table tableBg col-md-2 borrrrrrrrr_right  notataion_border p-3">
              <p>お名前（フリガナ）</p>
            </div>
            <div className="col-7 tableBg border_table1 notataion_border p-3">
             <div className='d-flex gap-4'>
                <p className='edit_text'>お名前</p>
                <p className='edit_text'>フリガナ</p>
             </div>
             <div className='d-flex gap-4'>
                <p className='edit_text'>山田 太郎</p>
                <p className='edit_text'>ヤマダ タロウ</p>
             </div>
            </div>
          </div>

          <div className="row    justify-content-center">
            <div className="col-5 tableBg borrrrrrrrr_right text-start col-md-2  notataion_border p-3">
              <p> 住所</p>
            </div>
            <div className="col-7 tableBg notataion_border p-3">
              <p className="edit_text mb-0">
              〒100 0001
              </p>
              <p className="edit_text mb-0">
              青森県 品川区 西五反田 1-1-11
              </p>
              <p className="edit_text mb-0">
              五反田マンション 101号室
              </p>
            </div>
          </div>

          <div className="row borrrrrrrrr   justify-content-center">
            <div className="col-5 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p> 生年月日 </p>
            </div>
            <div className="col-7 tableBg notataion_border p-3">
            
            <p className='edit_text'>1995年11月09日</p>
            </div>
          </div>

          <div className="row borrrrrrrrr   justify-content-center">
            <div className="col-5 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p>性別</p>
            </div>
            <div className="col-7 tableBg notataion_border p-3">
              <p className="edit_text">
              女性
              </p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-5 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p>電話番号</p>
            </div>
            <div className="col-7 tableBg notataion_border p-3">
              <p className="edit_text">090 1234 5678</p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-5 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p>メールアドレス</p>
            </div>
            <div className="col-7 tableBg notataion_border p-3">
              <p className="edit_text">
              elunub3@gmail.com
              </p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-5 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p>パスワード</p>
            </div>
            <div className="col-7 tableBg notataion_border p-3">
              <p className="edit_text">
              ************              </p>
            </div>
          </div>
          <div className="row  borrrrrrrrr  justify-content-center">
            <div className="col-5 border_table2 tableBg borrrrrrrrr_right col-md-2 notataion_border p-3">
              <p>メールマガジン</p>
            </div>
            <div className="col-7 tableBg border_table3 notataion_border p-3">
              <p className="edit_text">
              受け取る             </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-3">
                <button className='white_button'>戻る</button>
            </div>
            <div className="col-md-3">
                <button className='red_button'>登録を変更する   </button>
            </div>
        </div>
      </div>
    </div>
  )
}
