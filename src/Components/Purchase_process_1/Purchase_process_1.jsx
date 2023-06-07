import React from "react";
import "./Purchase_process_1.css";
import { pink } from "@mui/material/colors";
import plog_1 from "../Assets/plog_1.svg";
import plogo_2 from "../Assets/plogo_2.svg";
import plogo_3 from "../Assets/plogo_3.svg";

import Radio from "@mui/material/Radio";
import { FormLabel } from "@mui/material";
export default function Purchase_process_1({ next,setsteps }) {
  const [selectedValue, setSelectedValue] = React.useState("a");
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "size-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="purchase_process_1_main">
      <h3 className="h3_text text-center py-5">購入手続き</h3>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-7 pad_side">
            <div className="purchse_first_Card">
              <p className="pusrchae_text">お支払い方法</p>
              <div className="row">
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div className="left_in">
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
                      <FormLabel className="purc_nam" id="purc">
                        クレジットカード
                      </FormLabel>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mt-3 mt-md-0 ">
                  <div className="left_in" style={{ background: "#F2F6FF" }}>
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
                      <FormLabel className="purc_nam" id="purc">
                        クレジットカード
                      </FormLabel>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-4 mt-3 mt-md-0">
                  <div className="left_in" style={{ background: "#F2F6FF" }}>
                    <div className="d-flex  align-items-center">
                      {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                      <Radio
                        name="purc"
                        checked={selectedValue === "z "}
                        onChange={handleChange}
                        value="z  "
                        inputProps={{ "aria-label": "z  " }}
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
                  <div className="left_in">
                    <div className="d-flex  align-items-center">
                      {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                      <Radio
                        name="purc"
                        checked={selectedValue === "d"}
                        onChange={handleChange}
                        value="d"
                        inputProps={{ "aria-label": "d" }}
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
                  <div className="left_in">
                    <div className="d-flex gap-1 align-items-center">
                      {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                      <Radio
                        name="purc"
                        checked={selectedValue === "e"}
                        onChange={handleChange}
                        value="e"
                        inputProps={{ "aria-label": "e" }}
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
          <div className="col-md-7 pad_side">
            <div className="purchse_first_Card">
              <p className="pusrchae_text">クーポン利用</p>

              <div className="row ">
                <div className="col-md-6">
                  <div className="left_in" style={{ background: "#F2F6FF" }}>
                    <div className="d-flex gap-1 align-items-center">
                      <Radio
                        name="purc"
                        checked={selectedValue === "f"}
                        onChange={handleChange}
                        value="f"
                        inputProps={{ "aria-label": "f" }}
                        sx={{
                          color: "#2EB3FF",
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                      <FormLabel className="purc_nam" id="purc">
                        クレジットカード
                      </FormLabel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex respsss gap-2 justify-content-center mt-5">
            <button className="whiteeee_button nodeB1" onClick={()=>(setsteps(1),window.scrollTo(0, 0))}>戻る</button>
            <button className="reddd_button nodeB2" onClick={()=>(next(),window.scrollTo(0, 0))}>購入する</button>
          </div>
        </div>
      </div>
    </div>
  );
}
