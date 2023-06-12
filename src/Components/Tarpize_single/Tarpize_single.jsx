import React, { useMemo, useState } from "react";
import "./Tarpize_single.css";
import tarp from "../Assets/tarpize.png";
import { Checkbox } from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Purchase_Popup_video from "../Purchase_Popup_video/Purchase_Popup_video";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";



export default function Tarpize_single({location}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setCount] = useState(1);
    const showModal = () => {
      setIsModalOpen(true);
    };
  const history=useNavigate()
    const label = { inputProps: { "aria-label": "Checkbox demo" } };

    const incrementCount = useMemo(
    
      () => () => setCount((prev) => prev + 1),
      [value]
    );
    const decrementCount = useMemo(() => {
      if (value === 1) {
        return () => setCount(1);
      }else{

        return () => setCount((prev) => prev - 1);
      }
    }, [value]);
  return (
    <div className="tarpize_single_main">
      <div className="container-fulid">
        <div className="row m-0">
          <div className="col-md-6 col-lg-7 text-center lftgacHPiCUpEr">
            <img src={location.state.Image} className="lftgacHPiC" alt="" />
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="tarsize_content text-start">
              <p className="sigleFull1st">コレクションページに戻る</p>
              <h3 className="text_clr">
                外ヒカト梨全エタス芸3転トメヌネ玉場よ
              </h3>
            </div>
            <div className="bor_content">
              <p className="text-clr frmlfftr six6On mb-0">販売価格:</p>
              <p className="text-clr underTxtrghht  mb-0" style={{fontWeight:"600"}}>1回660円(税込)</p>
            </div>
            <div className="bor_content">
              <p className="text-clr frmlfftr mb-0">販売期間:</p>
              <p className="text-clr underTxtrghht mb-0" style={{fontWeight:"600"}}>
                2023/05/05 (金) 12:00～2023/05/26 (金) 23:59
              </p>
            </div>
            <div className="bor_content align-items-center border-none">
              <p className="text-clr frmlfftr mb-0">数量:</p>
              <div className="d-flex gap-3 inptBtw">
                <div className="imputdve">

               
                  <input
                    type="number"
                    placeholder="1"
                    className="number_tarpize"
                    name=""
                    id=""
                    value={value}
                  />
                  <IoIosArrowUp className="icon_arrow" onClick={()=>incrementCount()}/>
                  <IoIosArrowDown className="icon_arrow_down" onClick={()=>decrementCount()}/>

                </div>

                <button className="white_button BdrRdiS" onClick={()=>history("/PurchaseTab")} >
                  10連ガチャ  (ボイス付き){" "}
                </button>
              </div>
            </div>
            <div className="row align-items-center  my-3">
              <div className="col-md-9">
                <button className="red_button exRDB" onClick={()=>history("/PurchaseTab")}>
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
