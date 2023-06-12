import React, { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";
import "./Tarpize_single_model.css";
import cat from "../Assets/cat.png";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import Card_Data from "../Taprize_single_main_card/Data_main_card";

export default function Tarpize_single_model(props) {
  const [spinner, setspinner] = useState(false)

  console.log("datalength", props.sliderName);
  const increment_data = async () => {
    try {
      if (props.sliderName === props.datalength - 1) {
        props.setsliderName(props.sliderName);
      } else {
        props.setsliderName(Number(props.sliderName) + 1);
        // console.log("datalength",props.sliderName);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const decrement_data = async () => {
    try {
      if (props.sliderName === 0) {
        props.setsliderName(props.sliderName);
      } else {
        props.setsliderName(props.sliderName - 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main_modal_tarpize">
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       
        <Modal.Body className="modla_content_main ">
          {spinner ? (
            <></>
          ) : (
            <>
              <IoIosArrowDropleft
                className="icons_left"
                onClick={() => decrement_data()}
              />
              <div className="model_main_content">
                <img
                  src={Card_Data[props.sliderName]?.Image}
                  className="Slider_imge"
                  alt=""
                />
                <h5 className="modal_titlte">
                  {Card_Data[props.sliderName]?.Name}
                </h5>
              </div>
              <IoIosArrowDropright
                className="icons_left"
                onClick={() => increment_data()}
              />
            </>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}
