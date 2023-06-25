import React from "react";
import "./Purchase_process_1.css";
import { pink } from "@mui/material/colors";
import plog_1 from "../Assets/plog_1.svg";
import plogo_2 from "../Assets/plogo_2.svg";
import plogo_3 from "../Assets/plogo_3.svg";

import Radio from "@mui/material/Radio";
import { FormLabel } from "@mui/material";
export default function Purchase_process_1({ next, setsteps }) {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedValue1, setSelectedValue1] = React.useState("a");
  const [selectedValue2, setSelectedValue2] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  }
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  }

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="purchase_process_1_main">
      <h3 className="h3_text    responsiceeeee_wiss text-center py-5">
        購入手続き{" "}
      </h3>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 pad_side">
            <div className="purchse_first_Card">
              <p className="pusrchae_text">お支払い方法</p>
              <div className="row">
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div
                    className={
                      selectedValue === "a" ? "left_in left_in1" : "left_in"
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
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div
                    className={
                      selectedValue === "b" ? "left_in left_in1" : "left_in"
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
              <div className="row mt-5">
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className={
                                selectedValue1 === "a"
                                  ? "left_in left_in1"
                                  : "left_in"
                              }>
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
                      <img src={plog_1} style={{ width: "66%" }} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className={
                                selectedValue1 === "b"
                                  ? "left_in left_in1"
                                  : "left_in"
                              }>
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
                      <img src={plogo_2} style={{ width: "66%" }} alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className={
                                selectedValue1 === "c"
                                  ? "left_in left_in1"
                                  : "left_in"
                              }>
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
                      <img src={plogo_3} style={{ width: "66%" }} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center  mt-5">
          <div className="col-md-10 col-lg-8 pad_side">
            <div className="purchse_first_Card">
              <p className="pusrchae_text">クーポン利用</p>

              <div className="row ">
                <div className="col-md-6">
                  <div className={
                                selectedValue === "a"
                                  ? "left_in left_in1"
                                  : "left_in"
                              }>
                    <div className="d-flex gap-1 align-items-center">
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
                      <FormLabel className={
                                    selectedValue === "a"
                                      ? "purc_nam clr_chhha"
                                      : "purc_nam"
                                  } id="purc">
                        クレジットカード
                      </FormLabel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex respsss gap-2 justify-content-center mt-5">
            <button
              className=" nodeB1 docomo_btn_page  "
              onClick={() => (setsteps(1), window.scrollTo(0, 0))}
            >
              戻る{" "}
            </button>
            <button
              className="reddd_button nodeB2 docomo_btn_page px-0"
              onClick={() => (next(), window.scrollTo(0, 0))}
            >
              購入する
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
