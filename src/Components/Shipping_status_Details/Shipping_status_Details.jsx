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
import New_com_done from "../New_com_done/New_com_done";

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
         
          <div className="container">
            <div className="row justify-content-center ">
              <div className="col-5 col-md-3 border_table tableBg   notataion_border notation_ka_p p-3">
                <p>発送状況：</p>
              </div>
              <div className="col-7 col-md-9 tableBg border_table1 notataion_border notation_ka_p p-3">
                <p className=" mt-2">
                  {" "}
                  <span className="baggg">発送準備中 </span>
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border notation_ka_p p-3">
                <p>注文番号：</p>
              </div>
              <div className="col-7 col-md-9 tableBg T_ppRes notataion_border notation_ka_p pt-3 p-3">
                <p className="T_pp ">WP20230424190235040</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border notation_ka_p p-3">
                <p>購入日：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border notation_ka_p p-3">
                <p className="T_pp">2023/04/24</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border notation_ka_p p-3">
                <p>購入個数：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border notation_ka_p p-3">
                <p className="T_pp">10個</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border notation_ka_p p-3">
                <p>購入金額：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border notation_ka_p p-3">
                <p className="T_pp">6,600円（税込）</p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg   notataion_border notation_ka_p p-3">
                <p> 配送手数料：</p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border notation_ka_p p-3">
                <p className="T_pp"> 550円（税込） </p>
              </div>
            </div>{" "}
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 tableBg  notataion_border notation_ka_p p-3">
                <p>クーポン割引額： </p>
              </div>
              <div className="col-7 col-md-9 tableBg notataion_border notation_ka_p p-3">
                <p className="T_pp"> 0円 </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-5 col-md-3 border_table2 tableBg   notataion_border notation_ka_p p-3">
                <p>総支払額：</p>
              </div>
              <div className="col-7 col-md-9 border_table3  tableBg notataion_border notation_ka_p p-3">
                <p className="">7,150円（税/配送手数料込）</p>
              </div>
            </div>
          </div>

          <New_com_done />
        </div>
      </div>
      {/* </div> */}
      <List_of_Results />
    </>
  );
}

export default Shipping_status_Details;
