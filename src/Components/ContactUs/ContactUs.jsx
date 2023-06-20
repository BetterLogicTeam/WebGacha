import React from "react";
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";

function ContactUs() {
  const history=useNavigate()
  return (
    <><div className="Contact_us_bg">

      <div className="main_faq_img">
        <h1 className="main_heading">  お問い合わせ</h1>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="row mt-5 justify-content-center">
              <div className="col-5 w-100 PDngEnd">
                <p className="Contact_h">お問い合わせ種別 </p>

                <select
                  class="form-select Contact_input"
                  aria-label="Default select example"
                >
                  <option selected>お問い合わせ種別  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

            <div className="row ">
              <p className="Contact_h my-4">お名前（フリガナ</p>
              <div className="col-md-6 mb-3 mb-md-0 PDngEnd">
                <div className="w-100">
                  <input
                    type="text"
                    className="w-100 Contact_input forGraycllr"
                    id="fname"
                    name="fname"
                    placeholder="姓"
                  />
                </div>
              </div>
              <div className="col-md-6 PDngEnd">
                <input
                  type="text"
                  id="fname"
                  className="w-100  Contact_input forGraycllr"
                  name="fname"
                  placeholder="名"
                />
              </div>
            </div>

            <div className="row  mt-4">
              <div className="col-md-6 mb-3 mb-md-0 PDngEnd">
                <div className="w-100">
                  <input
                    type="text"
                    className="w-100 Contact_input forGraycllr"
                    id="fname"
                    name="fname"
                    placeholder="セイ"
                  />
                </div>
              </div>
              <div className="col-md-6 PDngEnd">
                <input
                  type="text"
                  id="fname"
                  className="w-100  Contact_input forGraycllr"
                  name="fname"
                  placeholder="メイ"
                />
              </div>
            </div>

            <div className="row ">
              <p className="Contact_h my-4">メールアドレス</p>
              <div className="col-md-12 PDngEnd">
                <div className="w-100">
                  <input
                    type="text"
                    className="w-100 Contact_input forGraycllr"
                    id="fname"
                    name="fname"
                    placeholder="メールアドレスを入力してください"
                  />

                  <p className=" Contact_P">
                    ドメイン指定受信をご利用の場合は、「@name.co.jp」からのメールが受信できるよう設定を行ってください。
                  </p>
                </div>
              </div>
            </div>

            <div className="row  mt-4">
              <p className="Contact_h">お問い合わせ内容</p>
              <div className="col-md-12 PDngEnd">
                <textarea
                  id="w3review"
                  className="Contact_input w-100 forGraycllr"
                  name="w3review"
                  rows="8"
                  placeholder="お問い合わせ内容を記入ください。"
                ></textarea>
              </div>
            </div>

            {/* button  */}

            <div className="row ">
              <div className="col-md-12 ">
                <div className="my-4">
                  <button className="w-100 contact_us_red_button RdRpS" onClick={()=>(history("/ContactUs_Confirmation"),window.scrollTo(0, 0))}> 内容を確認する </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ContactUs;

// <p className='Contact_h'>
// お名前（フリガナ
// </p>

// <input type="text" id="fname" name="fname" placeholder='アン' />
