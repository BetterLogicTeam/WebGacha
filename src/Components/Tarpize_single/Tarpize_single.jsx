import React, { useState } from "react";
import "./Tarpize_single.css";
import tarp from "../Assets/tarpize.png";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Purchase_Popup_video from "../Purchase_Popup_video/Purchase_Popup_video";



export default function Tarpize_single({location}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  const history=useNavigate()
    const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="tarpize_single_main">
      <div className="container-fulid">
        <div className="row m-0">
          <div className="col-md-6">
            <img src={location.state.Image} className="w-100" alt="" />
          </div>
          <div className="col-md-6">
            <div className="tarsize_content text-start">
              <p>コレクションページに戻る</p>
              <h3 className="text_clr">
                外ヒカト梨全エタス芸3転トメヌネ玉場よ
              </h3>
            </div>
            <div className="bor_content">
              <p className="text-clr fw-bold ">販売価格:</p>
              <p className="text-clr ">1回660円(税込)</p>
            </div>
            <div className="bor_content">
              <p className="text-clr fw-bold ">販売期間:</p>
              <p className="text-clr ">
                2023/05/05 (金) 12:00～2023/05/26 (金) 23:59
              </p>
            </div>
            <div className="bor_content align-items-center border-none">
              <p className="text-clr fw-bold ">数量:</p>
              <div className="d-flex gap-3">
                <input
                  type="number"
                  placeholder="1"
                  className="number_tarpize"
                  name=""
                  id=""
                />

                <button className="white_button" onClick={()=>history("/PurchaseTab")} >
                  10連ガチャ  (ボイス付き){" "}
                </button>
              </div>
            </div>
            <div className="row align-items-center my-3">
              <div className="col-md-8">
                <button className="red_button" onClick={()=>history("/PurchaseTab")}>
                  {" "}
                  購入する - 1回660円(税込)
                </button>
              </div>
              <div className="col-md-2 mt-3 mt-md-0">
                <div className="circula d-flex justify-content-center align-items-center">
                  <Checkbox
                    {...label}
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                    className="hrtt d-block "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
