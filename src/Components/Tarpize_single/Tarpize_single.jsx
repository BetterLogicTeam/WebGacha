import React, { useMemo, useState } from "react";
import "./Tarpize_single.css";
import tarp from "../Assets/tarpize.png";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Purchase_Popup_video from "../Purchase_Popup_video/Purchase_Popup_video";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Select } from "antd";

export default function Tarpize_single({ location }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setCount] = useState(1);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const history = useNavigate();
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const incrementCount = useMemo(
    () => () => setCount((prev) => prev + 1),
    [value]
  );
  const decrementCount = useMemo(() => {
    if (value === 1) {
      return () => setCount(1);
    } else {
      return () => setCount((prev) => prev - 1);
    }
  }, [value]);
  return (
    <div className="tarpize_single_main">
      <div className="conta_uper">
        <div className="containerrrr">
          <div className="row m-0">
            <div className="col-md-12 col-lg-7 text-center lftgacHPiCUpEr">
              <img src={location.state.Image} className="lftgacHPiC" alt="" />
            </div>
            <div className="col-md-12 mt-3 mt-lg-0 col-lg-5">
              <div className="tarsize_content text-start">
                <p
                  className="sigleFull1st"
                  style={{ cursor: "pointer" }}
                  onClick={() => history("/ListOTaprize")}
                >
                  <IoIosArrowBack /> コレクションページに戻る
                </p>
                <h3 className="text_clr">
                  外ヒカト梨全エタス芸3転トメヌネ玉場よ
                </h3>
              </div>
              <div className="bor_content">
                <p className="text-clr frmlfftr six6On mb-0">販売価格:</p>
                <p
                  className="text-clr underTxtrghht  mb-0"
                  style={{ fontWeight: "600" }}
                >
                  1回660円(税込)
                </p>
              </div>
              <div className="bor_content">
                <p className="text-clr frmlfftr mb-0">販売期間:</p>
                <p
                  className="text-clr underTxtrghht mb-0"
                  style={{ fontWeight: "600" }}
                >
                  2023/05/05 (金) 12:00～2023/05/26 (金) 23:59
                </p>
              </div>
              <div className="bor_content align-items-center border-none xb1660 ">
                <p className="text-clr frmlfftr mb-0 doHJ">数量:</p>
                <div className="d-flex gap-3 quantityUpper align-items-center  inptBtw">
                  <div className="imputdve">
                    <select
                      class="form-select BDMain1 shadow-none" 
                      aria-label="Default select example"
                    >
                      <option selected value="1">
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                  
                  </div>

                  <button
                    className=" snlstWhite BdrRdiS"
                    onClick={() => history(`/PurchaseTab/1`)}
                  >
                    購入する - 1回660円(税込)
                  </button>
                </div>
              </div>
              <div className="row align-items-center  my-3">
                <div className="col-md-9 wdLGr">
                  <button
                    className=" snlstTen  exRDB abbc"
                    onClick={() => history(`/PurchaseTab/2`)}
                  >
                    {" "}
                    10連ガチャ (ボイス付き){" "}
                  </button>
                </div>
                <div className="col-md-2 mt-3 mt-md-0">
                  <div className="circula d-flex justify-content-center align-items-center">
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder className="FavoriteBorder" />}
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
    </div>
  );
}
