import React, { useState } from "react";
import "./Shipping_status_Details.css";
import Table from "react-bootstrap/Table";
import play_btn from "../Assets/Taprize materials/play_btn.png";
import stop_btn from "../Assets/Taprize materials/stop_btn.png";
import icon from "../Assets/Taprize materials/icon.png";
import List_of_Results from "../List_of_Results/List_of_Results";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Shipping_status_Details() {
  const [value, setValue] = React.useState(0);
  const [second_tab_steps, setsecond_tab_steps] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="Shipping_status_Details p-2">
        <h1 className="text-center py-5 h1_table_icons">購入-発送状況 詳細</h1>
        <div>
          {/* <div className="container">
          <Table bordered>
            <thead>
              <tr>
                <th className="border_table">発送状況 :</th>
                <th>
                  <span className="baggg">発送準備中</span>
                </th>
                <th style={{display: "none"}}>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="tdddd">注文番号：</td>
                <td colSpan={2}>WP20230424190235040</td>
              </tr>
              <tr>
                <td className="tdddd">購入日：</td>
                <td colSpan={2}>10個</td>
              </tr>
              <tr>
                <td className="tdddd">購入金額：</td>
                <td colSpan={2}>6,600円（税込）</td>
              </tr>
              <tr>
                <td className="tdddd">配送手数料：</td>
                <td colSpan={2}>550円（税込）</td>
              </tr>
              <tr>
                <td className="tdddd">クーポン割引額：</td>
                <td colSpan={2}>0円</td>
              </tr>
              <tr>
                <td className="tdddd">総支払額：</td>
                <td colSpan={2}>7,150円（税/配送手数料込）</td>
              </tr>
            </tbody>
          </Table>
        </div> */}
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-5 col-md-3 border_table tableBg   notataion_border p-3">
                <p>発送状況：</p>
              </div>
              <div className="col-7 col-md-9 tableBg border_table1 notataion_border p-3">
                <p className=" mt-2">
                  {" "}
                  <span className="baggg">発送準備中 </span>
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border p-3">
                <p>注文番号：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border pt-3 p-3">
                <p className="T_pp">WP20230424190235040</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border p-3">
                <p>購入日：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border p-3">
                <p className="T_pp">2023/04/24</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border p-3">
                <p>購入個数：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border p-3">
                <p className="T_pp">10個</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border p-3">
                <p>購入金額：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border p-3">
                <p className="T_pp">6,600円（税込）</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border p-3">
                <p> 配送手数料：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border p-3">
                <p className="T_pp"> 550円（税込） </p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg  notataion_border p-3">
                <p>クーポン割引額： </p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border p-3">
                <p className="T_pp"> 0円 </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 border_table2 tableBg   notataion_border p-3">
                <p>総支払額：</p>
              </div>
              <div className="col-7 col-md-9 border_table3  tableBg notataion_border p-3">
                <p className="">7,150円（税/配送手数料込）</p>
              </div>
            </div>
          </div>

              <div className="container">
            <div className="row">
              <div className="col-md-6">
              <h2 className="text-left left_valy_ka_txt py-5 h1_table_icons">
            音声ダウンロード特典{" "}
          </h2>
              </div>
              <div className="col-md-6 tabcor_achsg_ka_container">
              <Box sx={{ width: "100%", marginTop: "2rem" }}>
        <div className="container">
        <Box className="">
          <Tabs
            // value={value}
            onChange={handleChange}
            centered
            className="tbUper"
            indicatorColor={false}
          >
            <Tab className="tabcor_achsg Coupon_list1" label="クーポン一覧" {...a11yProps(0)} />
            <Tab className="tabcor_achsg Coupon_list2" label="購入履歴" {...a11yProps(1)} />
          </Tabs>
        </Box>
        </div>
      </Box>
              </div>
            </div>
            </div>
          

          {/* <h1 className="text-center py-5">音声ダウンロード特典</h1> */}

          {/* <div className="container"> */}
          {/* <div className="Shipping_status_Details_scnd_tble"> */}
          {/* <Table bordered>
              <tbody>
                <tr>
                  <td className="tdddd">No. 1</td>
                  <td className="tdddd Shipping_status_Details_scnd_tble">
                    <img src={play_btn}></img>
                  </td>
                  <td className="text-center text-pink"><img src={icon}/> ダウンロード</td>
                </tr>
                <tr>
                  <td className="tdddd">No. 3</td>
                  <td className="tdddd Shipping_status_Details_scnd_tble">
                    <img src={stop_btn}></img>
                  </td>
                  <td className="text-center text-pink"><img src={icon}/> ダウンロード</td>
                </tr>
              </tbody>
            </Table> */}

          {/*--------------------------------------- create new table   ----------------------------------- */}

          <div className="container mobile_vala_stauts">
            <div className="row justify-content-center ">
              <div className="col-6 tableBg  border_table notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center tableBg align-items-center  bgtableicon notataion_border p-3">
                <img src={play_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table1 d-flex justify-content-center align-items-center tableBg notataion_border p-3">
                <img src={icon} className="mobile_main_img"/>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg   notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center tableBg bgtableicon  notataion_border p-3">
                <img src={stop_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table3 d-flex justify-content-center align-items-center tableBg notataion_border p-3">
                <img src={icon}  className="mobile_main_img"/>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg   notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center tableBg bgtableicon  notataion_border py-3">
                <img src={play_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table3 d-flex justify-content-center align-items-center tableBg notataion_border py-3">
                <img src={icon}  className="mobile_main_img"/>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg   notataion_border p-3">
                <p> こちらに概要を入力してください。タップライズのスペシャル音声。 </p>
              </div>
              <div className="col-3 d-flex justify-content-center align-items-center tableBg bgtableicon  notataion_border py-3">
                <img src={play_btn} className="mobile_main_img"></img>
              </div>
              <div className="col-3 border_table3 d-flex justify-content-center align-items-center tableBg notataion_border py-3">
                <img src={icon}  className="mobile_main_img"/>
              </div>
            </div>
          </div>

          <div className="container desktop_vala_stauts">
            <div className="row justify-content-center ">
              <div className="col-6 tableBg new_fntt border_table notataion_border p-3">
                <p> No.1 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg  bgtableicon notataion_border p-3">
                <img src={play_btn}></img>
              </div>
              <div className="col-4 border_table1 d-flex justify-content-center tableBg notataion_border p-3">
                <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg new_fntt  notataion_border p-3">
                <p> No.3 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg bgtableicon  notataion_border p-3">
                <img src={stop_btn}></img>
              </div>
              <div className="col-4 border_table3 d-flex justify-content-center tableBg notataion_border p-3">
              <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>

            <div className="row">
              <div className="col-6 border_table2 tableBg new_fntt  notataion_border p-3">
                <p> No.3 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg bgtableicon  notataion_border p-3">
                <img src={play_btn}></img>
              </div>
              <div className="col-4 border_table3 d-flex justify-content-center tableBg notataion_border p-3">
              <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>
            
            <div className="row">
              <div className="col-6 border_table2 tableBg new_fntt  notataion_border p-3">
                <p> No.4 </p>
              </div>
              <div className="col-2 d-flex justify-content-center tableBg bgtableicon  notataion_border p-3">
                <img src={play_btn}></img>
              </div>
              <div className="col-4 border_table3 d-flex justify-content-center tableBg notataion_border p-3">
              <button className="Shipping_ka_new_btn">ダウンロード</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <List_of_Results />
    </>
  );
}

export default Shipping_status_Details;
