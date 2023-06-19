import React from "react";
import "./New_copenPurchaseCard.css";
import card_img from "../Assets/image 1.png";
import { AiOutlineRight } from "react-icons/ai";

const New_copenPurchaseCard = () => {
  return (
    <div>
      <div
        className="container mt-5 pb-4 "
        style={{
          backgroundColor: "#FFFFFF",
          borderRadius: "12px",
          border: "1px solid #D2E9FF",
        }}
      >
        <div className="row firstRw">
          <div className="col-lg-6">
            <div className="d-flex justify-content-between pe-0 pe-md-3">
              <div className="order_fld">
                <h5 className="orderTitle">注文番号：</h5>
                <div className="orderDetails">WP20230424190235040</div>
              </div>
              <div className="Purchase_fld">
                <h5 className="orderTitle">購入日：</h5>
                <div className="orderDetails">2023/04/24</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6 nichewl">
            <div className="d-flex justify-content-between ps-0 ps-md-3">
              <div className="Purchase_fld">
                <h5 className="orderTitle">合計金額：</h5>
                <div className="orderDetails">22600円(税込)</div>
              </div>
              <div>
                <button className="newCpnBlubbtn">発送準備中</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3 scndRw">
          <div className="col-lg-3 copnPicUpperrMain">
            <img src={card_img} alt="" className="newCopencrdImg" />
            <h5 className="titleforsmall mb-0">
                へ付必エチ代7校キヲノ創指ろ色線民あ
            </h5>
          </div>
          <div className="col-lg-5 fifthcll">
            <div className="newcrddetails_upper">
              <h5 className="titleofnewcrd mb-0">
                へ付必エチ代7校キヲノ創指ろ色線民あ
              </h5>
              <div className="detailsTitleUpper">
                <h6 className="copenCrdDetailTitle mb-0">お届け目安 :</h6>
                <p className="copnCrdDetal mb-0">
                  外も死図クエ安教レネニタ窓控供信クヱフ際人シノ作王ーレのト代併禁ょ測光づほー表読ま注介名吉句搭ねがち。口謙も遺江タヨコ登純目ヒメヱミ答点づンびけ類観あのなど重演ごきづつ奏8参え
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-between copen_card_priceUpperr">
            <div className="Purchase_quantity">
              <h5 className="mb-0 purchaseTitle">購入個数：</h5>
              <h6 className="mb-0 purchaseAmount">10個</h6>
            </div>

            <div className="Purchase_quantity">
              <h5 className="mb-0 purchaseTitle">合計金額：</h5>
              <h6 className="mb-0 purchaseAmount">6600円(税込)</h6>
            </div>
            <div className="copnNext_link">
              <h6 className="lnk_cpn d-flex">
                詳細を見る <AiOutlineRight style={{ fontSize: "18px" }} />
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_copenPurchaseCard;
