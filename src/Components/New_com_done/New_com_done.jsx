import React, { useState } from "react";
import play_btn from "../Assets/Taprize materials/play_btn.png";
import stop_btn from "../Assets/Taprize materials/stop_btn.png";
import icon from "../Assets/Taprize materials/icon.png";
import List_of_Results from "../List_of_Results/List_of_Results";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import New_detail from "./New_detail";
import New_detail_blk from "./New_detail_blk";
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

export default function New_com_done() {
  const [value, setValue] = React.useState(0);
  const [second_tab_steps, setsecond_tab_steps] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      {/* <div className="container"> */}
        <div className="container pt-3">
          {/* <div className="row">
              <div className="col-md-6">
         
              </div>
              <div className="col-md-12 tabcor_achsg_ka_container">
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
        <TabPanel value={value} index={0}>
       <New_detail/>
      </TabPanel>
        </div>
      </Box>
              </div>




            
            
            </div> */}
          <div className="row align-items-center">
            <div className=" col-lg-6 ">
              <h2 className="text-left left_valy_ka_txt py-5 h1_table_icons">
                音声ダウンロード特典{" "}
              </h2>
            </div>
            <div className="col-lg-6">
              <Box className="">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  centered
                  className="tbUper"
                  indicatorColor={false}
                >
                  <Tab
                    className="tabcor_achsg Coupon_list145"
                    label="クーポン一覧"
                    {...a11yProps(0)}
                  />
                  <Tab
                    className="tabcor_achsg Coupon_list245"
                    label="購入履歴"
                    {...a11yProps(1)}
                  />
                </Tabs>
              </Box>
            </div>
          </div>

          <div className=" ">
            <div className=" tabcor_achsg_ka_container">
              <Box sx={{ width: "100%", marginTop: "2rem" }}>
                <div className="container">
                  <TabPanel value={value} index={0}>
                    <New_detail />
                  </TabPanel>
                </div>
              </Box>
            </div>
          </div>
          <div className=" ">
            <div className=" tabcor_achsg_ka_container">
              <Box sx={{ width: "100%", marginTop: "2rem" }}>
                <div className="container">
                  <TabPanel value={value} index={1}>
                    <New_detail_blk/>
                  </TabPanel>
                </div>
              </Box>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}
