import React, { useState } from "react";
import "./Purchase_process_one.css";
// import { Radio } from "antd";
import Radio from "@mui/material/Radio";
import card_img from "../Assets/card_img.png";
import { FormLabel } from "@mui/material";
import Purchase_process_1 from "../Purchase_process_1/Purchase_process_1";
import { useNavigate } from "react-router-dom";
import plog_1 from "../Assets/plog_1.svg";
import plogo_2 from "../Assets/plogo_2.svg";
import plogo_3 from "../Assets/plogo_3.svg";

export default function Purchase_process_one({ next }) {
  const [steps, setsteps] = useState(1);
  const history = useNavigate();
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedValue1, setSelectedValue1] = React.useState("a");
  const [selectedValue2, setSelectedValue2] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const [isCoupon, setisCoupon] = useState(false);

  const [value4, setvalue4] = useState(1);

  const onChange2 = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setvalue4(e.target.value);
  };
  return (
    <>
      {steps === 1 ? (
        <>
          <div className="Purchase_process_one">
            <h3 className=" responsiceeeee_wiss py-4">購入手続き </h3>
            <div className="container">
              {isCoupon ? (
                <> </>
              ) : (
                <>
                  <div className="row justify-content-center  ">
                    <div className="col-md-12 col-lg-9 FrEndPd">
                      <div className="purchse_first_Card">
                        <p className="pusrchae_text">お支払い方法 </p>
                        <div className="row">
                          <div className="col-md-6 mt-0 mt-md-0 pe-0 pe-md-2">
                            <div
                              className={
                                selectedValue === "a"
                                  ? "left_in left_in1"
                                  : "left_in"
                              }
                            >
                              <div className="d-flex gap-1 align-items-center">
                                {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                                <Radio
                                  name="purc"
                                  checked={selectedValue === "a"}
                                  onChange={handleChange}
                                  value="a"
                                  inputProps={{ "aria-label": "A" }}
                                  sx={{
                                    color: "#2EB3FF",
                                    "& .MuiSvgIcon-root": {
                                      fontSize: 28,
                                    },
                                  }}
                                />
                                <FormLabel
                                  className={
                                    selectedValue === "a"
                                      ? "purc_nam clr_chhha"
                                      : "purc_nam"
                                  }
                                  id="purc"
                                >
                                  クレジットカード
                                </FormLabel>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6 mt-3 mt-md-0 pe-0 pe-md-2">
                            <div
                              className={
                                selectedValue === "b"
                                  ? "left_in left_in1"
                                  : "left_in"
                              }
                            >
                              <div className="d-flex gap-1 align-items-center">
                                {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                                <Radio
                                  name="purc"
                                  checked={selectedValue === "b"}
                                  onChange={handleChange}
                                  value="b"
                                  inputProps={{ "aria-label": "b" }}
                                  sx={{
                                    color: "#2EB3FF",
                                    "& .MuiSvgIcon-root": {
                                      fontSize: 28,
                                    },
                                  }}
                                />
                                <FormLabel
                                  className={
                                    selectedValue === "b"
                                      ? "purc_nam clr_chhha"
                                      : "purc_nam"
                                  }
                                  id="purc"
                                >
                                  キャリア決済
                                </FormLabel>
                              </div>
                            </div>
                          </div>
                        </div>

                        {selectedValue == "a" ? (
                          <>
                            <div className="row ">
                              <div className="col-md-5">
                                <label
                                  htmlFor="cn"
                                  className="credit_card_lable"
                                >
                                  クレジットカード番号
                                </label>
                                <input
                                  type="number"
                                  className="cradit_inpit w-100"
                                  placeholder="0000 0000 00000 00"
                                />
                              </div>
                              <div className="col-md-7 ">
                                <div className="row expdateUpper">
                                  <div className="col-md-6 brlo">
                                    <label
                                      htmlFor="cnc"
                                      className="credit_card_lable"
                                    >
                                      有効期限(月/年)
                                    </label>{" "}
                                    <br />
                                    <div className="d-flex change-dir  gap-2 gap-md-3 expdateUpper dattimetow">
                                      <input
                                        type="number"
                                        className="cradit_inpit  resposssss "
                                        placeholder="00"
                                        id="cnn"
                                      />
                                      <input
                                        type="number"
                                        className="cradit_inpit  resposssss "
                                        placeholder="00"
                                        // defaultValue="00"
                                        id="cnn"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <label
                                      htmlFor="cncc"
                                      className=" credit_card_lable"
                                    >
                                      セキュリティーコード{" "}
                                    </label>{" "}
                                    <br />
                                    <input
                                      type="number"
                                      className="cradit_inpit w-100"
                                      placeholder="0000"
                                      // defaultValue="00"
                                      id="cncc"
                                    />
                                  </div>
                                </div>

                                <br />

                                <div className=""></div>
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-md-5 ">
                                <img src={card_img} alt="" className="lftCrd" />
                              </div>

                              <div className="col-md-7 text-start">
                                <div className="card_caridt text-start">
                                  <p className="linesheights">
                                    クレジットカードで購入いただく際、クレジットカードの不正利用を防ぐために、セキュリティコードの入力を行っていただきます。
                                    セキュリティコードは、カード裏面の著名欄に記載された末尾３桁、または４桁の数字です。
                                  </p>
                                  <p>
                                    <span className="for_start"> * </span>
                                    クレジットカードの暗証番号は、セキュリティコードではありません。{" "}
                                    <br />
                                    <span className="for_start"> * </span>
                                    クレジットカード会社によっては記載がない場合があります。
                                  </p>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="row mt-2 mt-lg-5  justify-content-end ">
                              <div className="col-md-4 mt-3 col-9 mt-md-0 px-0 px-md-2">
                                <div
                                  className={
                                    selectedValue1 === "a"
                                      ? "left_in left_in1"
                                      : "left_in"
                                  }
                                >
                                  <div className="d-flex  align-items-center">
                                    {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                                    <Radio
                                      name="purc"
                                      checked={selectedValue1 === "a"}
                                      onChange={handleChange1}
                                      value="a"
                                      inputProps={{ "aria-label": "a" }}
                                      sx={{
                                        color: "#2EB3FF",
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 28,
                                        },
                                      }}
                                    />
                                    <img
                                      src={plog_1}
                                      style={{ width: "66%" }}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 mt-3 col-9 mt-md-0 px-0 px-md-2">
                                <div
                                  className={
                                    selectedValue1 === "b"
                                      ? "left_in left_in1"
                                      : "left_in"
                                  }
                                >
                                  <div className="d-flex  align-items-center">
                                    {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                                    <Radio
                                      name="purc"
                                      checked={selectedValue1 === "b"}
                                      onChange={handleChange1}
                                      value="b"
                                      inputProps={{ "aria-label": "b" }}
                                      sx={{
                                        color: "#2EB3FF",
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 28,
                                        },
                                      }}
                                    />
                                    <img
                                      src={plogo_2}
                                      style={{ width: "66%" }}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4 mt-3 col-9 mt-md-0 px-0 px-md-2">
                                <div
                                  className={
                                    selectedValue1 === "c"
                                      ? "left_in left_in1"
                                      : "left_in"
                                  }
                                >
                                  <div className="d-flex gap-1 align-items-center">
                                    {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                                    <Radio
                                      name="purc"
                                      checked={selectedValue1 === "c"}
                                      onChange={handleChange1}
                                      value="c"
                                      inputProps={{ "aria-label": "c" }}
                                      sx={{
                                        color: "#2EB3FF",
                                        "& .MuiSvgIcon-root": {
                                          fontSize: 28,
                                        },
                                      }}
                                    />
                                    <img
                                      src={plogo_3}
                                      style={{ width: "66%" }}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="row justify-content-center  mt-5">
                <div className=" px-0 px-md-2  col-md-12 col-lg-9">
                  <div className="purchse_first_Card">
                    <p className="pusrchae_text">クーポン利用 </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          className={
                            selectedValue2 === "a"
                              ? "left_in left_in1"
                              : "left_in"
                          }
                        >
                          <div className="d-flex gap-1 align-items-center">
                            {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                            <Radio
                              name="purc"
                              checked={selectedValue2 === "a"}
                              onChange={handleChange2}
                              value="a"
                              inputProps={{ "aria-label": "a" }}
                              sx={{
                                color: "#2EB3FF",
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28,
                                },
                              }}
                            />
                            <FormLabel
                              className={
                                selectedValue2 === "a"
                                  ? "purc_nam clr_chhha"
                                  : "purc_nam"
                              }
                              id="purc"
                            >
                              利用しない
                            </FormLabel>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div
                          className={
                            selectedValue2 === "b"
                              ? "left_in left_in1"
                              : "left_in"
                          }
                        >
                          <div className="d-flex gap-1 align-items-center">
                            {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                            <Radio
                              name="purc"
                              checked={selectedValue2 === "b"}
                              onChange={handleChange2}
                              value="b"
                              inputProps={{ "aria-label": "b" }}
                              sx={{
                                color: "#2EB3FF",
                                "& .MuiSvgIcon-root": {
                                  fontSize: 28,
                                },
                              }}
                            />
                            <FormLabel
                              className={
                                selectedValue2 === "b"
                                  ? "purc_nam clr_chhha"
                                  : "purc_nam"
                              }
                              id="purc"
                            >
                              <div className="text_input_code">

                            利用する
                              <input
                            type="text"
                            id="login_first"
                            placeholder="コード"
                            className="login_page_inputss74"
                          />
                              </div>
                            </FormLabel>
                          </div>
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex respsss gap-2 justify-content-center mt-5">
                <button
                  className=" nodeB1 atm_white_btn  "
                  onClick={() => (
                    history("/ListOTaprize"), window.scrollTo({top:0,behavior:'instant'})
                  )}
                >
                  戻る{" "}
                </button>
                <button
                  className="atm_red_btn nodeB2  p-0 mt-md-0 mt-2"
                  onClick={() => (next(), window.scrollTo({top:0,behavior:'instant'}))}
                >
                  {" "}
                  購入する{" "}
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Purchase_process_1 next={next} setsteps={setsteps} />
      )}
    </>
  );
}
