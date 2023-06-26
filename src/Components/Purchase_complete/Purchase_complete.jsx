import React, { useEffect, useState } from "react";
import "./Purchase_complete.css";
import Purchase_Popup_video from "../Purchase_Popup_video/Purchase_Popup_video";
import { useNavigate } from "react-router-dom";
export default function Purchase_complete({ id }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (id != 1) {
      showModal();
    }
  }, []);
  const history=useNavigate()

  return (
    <div className="Purchase_complete_main">
      <Purchase_Popup_video
        showModal={showModal}
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
      {id == 1 ? (
        <>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-5">
                <div className="complete_content">
                  <h2>購入完了 </h2>
                  <p>
                    ご購入ありがとうございます！ <br />
                    <button
                      className="tab_three_btn_only mt-3 "
                      onClick={() => (
                        history("/"),
                        window.scrollTo({ top: 0, behavior: "instant" })
                      )}
                    >
                  ホームに戻る
                    </button>
                    {/* 下記ボタンを押すと、プレイ画面へ移します。{" "} */}
                  </p>
                  {/* <div className="d-flex justify-content-center">
                    <button
                      className="tab_three_btn_only mt-3 "
                      onClick={() => (
                        history("/ListOfResults"),
                        window.scrollTo({ top: 0, behavior: "instant" })
                      )}
                    >
                      {" "}
                      ウェブガチャを再生する
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
