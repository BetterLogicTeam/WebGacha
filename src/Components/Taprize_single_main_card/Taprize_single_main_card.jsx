import React from "react";
import Card from "react-bootstrap/Card";
import Taprize_single_pic from "../Assets/single_1.svg";
import "./Taprize_single_main_card.css"
import Tarpize_single_model from "../Tarpize_single_model/Tarpize_single_model";

function Taprize_single_main_card() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="my-5">
     <div className="container FrEndPd">
      <div className="row">
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="tarpize_single_main_carrd">
          <img src={Taprize_single_pic}  onClick={() => setModalShow(true)} className="w-100" alt="" />
          <Tarpize_single_model
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
          <div className="d-flex gap-3 my-3">
            <h6 className="blue_heading">特別賞 -1</h6>
            <h6 className="black_heading">特大タオル</h6>
          </div>
          <div className="d-flex gap-3 my-3">
            <h6 className="blue_heading">特別賞 -1</h6>
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
            <p style={{color:"#020140"}} >各賞の当選率</p>
                <p style={{color:"#020140"}} >1%</p>

            </div>
              
            </div>
          </div>

          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="tarpize_single_main_carrd">
          <img src={Taprize_single_pic} className="w-100" alt="" />
          <div className="d-flex gap-3 my-3">
            <h6 className="blue_heading">特別賞 -1</h6>
            <h6 className="black_heading">特大タオル</h6>
          </div>
          <div className="d-flex gap-3 my-3">
            <h6 className="blue_heading">特別賞 -1</h6>
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
            <p style={{color:"#020140"}} >各賞の当選率</p>
                <p style={{color:"#020140"}} >1%</p>

            </div>
              
            </div>
          </div>

          </div>
        </div>
        <div className="col-md-4 mt-3 mt-md-0">
          <div className="tarpize_single_main_carrd">
          <img src={Taprize_single_pic} className="w-100" alt="" />
          <div className="d-flex gap-3 my-3">
            <h6 className="blue_heading">特別賞 -1</h6>
            <h6 className="black_heading">特大タオル</h6>
          </div>
          <div className="d-flex gap-3 my-3">
            <h6 className="blue_heading">特別賞 -1</h6>
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
            <p style={{color:"#020140"}} >各賞の当選率</p>
                <p style={{color:"#020140"}} >1%</p>

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

export default Taprize_single_main_card;
