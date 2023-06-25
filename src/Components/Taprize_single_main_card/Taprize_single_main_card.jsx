import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Taprize_single_pic from "../Assets/single_1.svg";
import "./Taprize_single_main_card.css";
import Tarpize_single_model from "../Tarpize_single_model/Tarpize_single_model";
import Card_Data from "./Data_main_card";
import { Image } from "antd";

function Taprize_single_main_card() {
  const [modalShow, setModalShow] = React.useState(false);
  const [Image_url, setImage_url] = useState("");
  const [sliderName, setsliderName] = useState("");

  return (
    <div className="my-5">
      {/* <Tarpize_single_model
        show={modalShow}
        onHide={() => setModalShow(false)}
        Image_url={Image_url}
        sliderName={sliderName}
        setsliderName={setsliderName}
        datalength={Card_Data.length}
      /> */}
      <div className="container FrEndPd">
        <div className="row">
          {Card_Data.slice(0,3).map((items, index) => {
            return (
              <>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="tarpize_single_main_carrd">
                    <Image
                      src={items.Image}
                      onClick={() => (setModalShow(true), setsliderName(index))}
                      className="pop_up_img_tar"
                      
                      alt=""
                    />

                    <div className="d-flex gap-3 my-3">
                      <h6 className="blue_heading">特別賞 -{index + 1}</h6>
                      <h6 className="black_heading">特大タオル</h6>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="lower_content">
                          <p>各賞の当選率</p>
                          <p>1%</p>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="lower_content ">
                          <p style={{ color: "#020140" }}>各賞の当選率</p>
                          <p style={{ color: "#020140" }}>1%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        
        </div>
      </div>
    </div>
  );
}

export default Taprize_single_main_card;
