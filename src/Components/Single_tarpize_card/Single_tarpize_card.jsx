import React from "react";
import "./Single_tarpize_card.css";
import { Image } from "antd";

export default function Single_tarpize_card({
  card_p,
  carddimg,
  a1,
  setsliderName,
  setModalShow,
  index,
}) {
  return (
    <div className="single_tarpize_card mt-3 mt-md-5">
      <div
        className="single_card_bg"
        // onClick={() => (setModalShow(true), setsliderName(index))}
      >
        {/* <img src={carddimg} className="w-100" alt="" /> */}
        <Image
          src={carddimg}
          // onClick={() => (setModalShow(true), setsliderName(index))}
          className="pop_up_img_tar"
          alt=""
        />
        <div className="card_single_content py-2">
          <p className="mb-0">{a1}</p>
          <p className="mb-0" style={{ color: "#020140" }}>{card_p}</p>
        </div>

        <div className="row lstlowwer">
          <div className="col-6 lowwerInr">
            <div className="lower_content">
              <p className="mb-1">各賞の当選率</p>
              <p className="mb-1">1%</p>
            </div>
          </div>
          <div className="col-6 lowwerInr">
            <div className="lower_content ">
              <p style={{ color: "#020140" }}>各賞の当選率</p>
              <p style={{ color: "#020140" }}>1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
