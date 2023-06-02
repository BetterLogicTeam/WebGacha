import React, { useState } from "react";
import './Purchase_complete.css'
import Purchase_Popup_video from "../Purchase_Popup_video/Purchase_Popup_video";
export default function Purchase_complete() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  return (
    <div className="Purchase_complete_main">
        <Purchase_Popup_video showModal={showModal} setIsModalOpen={setIsModalOpen}  isModalOpen={isModalOpen} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="complete_content">
              <h2>購入完了</h2>
              <p>
                ご購入ありがとうございます！
                下記ボタンを押すと、プレイ画面へ移します。{" "}
              </p>
              <div className="d-flex justify-content-center">
              <button className="whiteeee_button ReRng" onClick={()=>showModal()}>ウェブガチャを再生する</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
