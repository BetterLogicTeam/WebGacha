import React, { useState } from "react";
import "./Tarpize_all_cards.css";
import Taprize_single_main_card from "../Taprize_single_main_card/Taprize_single_main_card";
import Single_tarpize_card from "../Single_tarpize_card/Single_tarpize_card";
import Card_Data from "../Taprize_single_main_card/Data_main_card";
import Tarpize_single_model from "../Tarpize_single_model/Tarpize_single_model";

export default function Tarpize_all_cards() {
  const [modalShow, setModalShow] = React.useState(false);
  const [sliderName, setsliderName] = useState("");
  return (
    <div className="tarpize_cards_main">
      <Tarpize_single_model
        show={modalShow}
        onHide={() => setModalShow(false)}
        sliderName={sliderName}
        setsliderName={setsliderName}
        datalength={Card_Data.length}
      />
      <div className="container">
        <div className="tarpize_content_cards">
          <h2>賞品一覧</h2>
          <div className="fornt_row">
            <span className="yellow">
              <p className="m-0 yellowTxt">特別賞</p>
            </span>
            <div className="probupper">
            <h6 className="sectitl mb-0">セクションのタイトル</h6>
            <h6 className="winning_probability mb-0">当選確率  3%</h6>
            </div>
          </div>
        </div>

        <Taprize_single_main_card />
        <div className="tarpize_content_cards">
          <div className="fornt_row">
            <span className="blu_boxe">
              <p className="m-0 yellowTxt">A賞 :</p>
            </span>
            <div className="probupper">
            <h6 className="sectitl mb-0">セクションのタイトル</h6>
            <h6 className="winning_probability mb-0">当選確率  3%</h6>
            </div>
          </div>
        </div>
        <div className="container mb-5 FrEndPd">
          <div className="row m-0 ">
            {Card_Data.slice(3, 6).map((items, index) => {
              return (
                <>
                  <div className="col-md-4 col-6  mt-3 mt-md-0 FrEndPd">
                    <Single_tarpize_card
                      card_p="特大タオル"
                      carddimg={items.Image}
                      a1={`A-${index + 1}`}
                      setModalShow={setModalShow}
                      setsliderName={setsliderName}
                      index={items.sr}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="tarpize_content_cards">
          <div className="fornt_row">
            <span className="blu_boxe" style={{ backgroundColor: "#02D998" }}>
              <p className="m-0 yellowTxt">B賞 :</p>
            </span>
            <div className="probupper">
            <h6 className="sectitl mb-0">セクションのタイトル</h6>
            <h6 className="winning_probability mb-0">当選確率  3%</h6>
            </div>
          </div>
        </div>
        <div className="container mb-5  FrEndPd">
          <div className="row m-0">
            {Card_Data.slice(6, 12).map((items, index) => {
              return (
                <>
                  <div className="col-md-4 col-6 mt-3 mt-md-0 FrEndPd">
                    <Single_tarpize_card
                      card_p="特大タオル"
                      carddimg={items.Image}
                      a1={`B-${index + 1}`}
                      setModalShow={setModalShow}
                      setsliderName={setsliderName}
                      index={items.sr}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="tarpize_content_cards">
          <div className="fornt_row">
            <span className="blu_boxe" style={{ backgroundColor: "#FFAA66" }}>
              <p className="m-0 yellowTxt">C賞 :</p>
            </span>
            <div className="probupper">
            <h6 className="sectitl mb-0">セクションのタイトル</h6>
            <h6 className="winning_probability mb-0">当選確率  3%</h6>
            </div>
          </div>
        </div>
        <div className="container mb-5 FrEndPd">
          <div className="row m-0">
            {Card_Data.slice(12, 21).map((items, index) => {
              return (
                <>
                  <div className="col-md-4 col-6 mt-3 mt-md-0 FrEndPd">
                    <Single_tarpize_card
                      card_p="特大タオル"
                      carddimg={items.Image}
                      a1={`c-${index + 1}`}
                      setModalShow={setModalShow}
                      setsliderName={setsliderName}
                      index={items.sr}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="tarpize_content_cards">
          <div className="fornt_row">
            <span className="blu_boxe" style={{ backgroundColor: "#FF81D4" }}>
              <p className="m-0 yellowTxt">D賞 :</p>
            </span>
            <div className="probupper">
            <h6 className="sectitl mb-0">セクションのタイトル</h6>
            <h6 className="winning_probability mb-0">当選確率  3%</h6>
            </div>
          </div>
        </div>
        <div className="container mb-5 FrEndPd">
          <div className="row m-0">
            {Card_Data.slice(22, 28).map((items, index) => {
              return (
                <>
                  <div className="col-md-4 col-6 mt-3 mt-md-0 FrEndPd">
                    <Single_tarpize_card
                      card_p="特大タオル"
                      carddimg={items.Image}
                      a1={`D-${index + 1}`}
                      setModalShow={setModalShow}
                      setsliderName={setsliderName}
                      index={items.sr}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="tarpize_content_cards">
          <div className="fornt_row">
            <span className="blu_boxe" style={{ backgroundColor: "#577FFF" }}>
              <p className="m-0 yellowTxt">E賞 :</p>
            </span>
            <div className="probupper">
            <h6 className="sectitl mb-0">セクションのタイトル</h6>
            <h6 className="winning_probability mb-0">当選確率  3%</h6>
            </div>
          </div>
        </div>

        <div className="container  FrEndPd">
          <div className="row m-0">
            {Card_Data.slice(28, 34).map((items, index) => {
              return (
                <>
                  <div className="col-md-4 col-6 mt-3 mt-md-0 FrEndPd">
                    <Single_tarpize_card
                      card_p="特大タオル"
                      carddimg={items.Image}
                      a1={`E-${index+1}`}
                      setModalShow={setModalShow}
                      setsliderName={setsliderName}
                      index={items.sr}
                    />
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
