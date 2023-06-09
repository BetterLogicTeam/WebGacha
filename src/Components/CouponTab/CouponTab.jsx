import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MainMyPageCoupon from "../MainMyPageCoupon/MainMyPageCoupon";
import MyPageCouponBg from "../MyPageCouponBg/MyPageCouponBg";
import "./CouponTab.css";
import { AiOutlineHeart } from "react-icons/ai";
import ConfimYourRegistration from "../ConfimYourRegistration/ConfimYourRegistration";
import { useNavigate } from "react-router-dom";
import PurchaseListFullPage from "../Purchase_list_full_page/Purchase_list_full_page";
import Data from "../List_of_taprize_card/Data";
import List_of_taprize_card from "../List_of_taprize_card/List_of_taprize_card";

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
export default function CouponTab() {
  const [value, setValue] = React.useState(0);
  const [second_tab_steps, setsecond_tab_steps] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const history = useNavigate();
  return (
    <div className="Coupon_Tab_Bg">
      <MyPageCouponBg />

      <Box sx={{ width: "100%", marginTop: "2rem" }}>
        <div className="container">
        <Box className="">
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            className="tbUper"
            indicatorColor={false}
          >
            <Tab className="tabcor Coupon_list1" label="クーポン一覧" {...a11yProps(0)} />
            <Tab className="tabcor Coupon_list2" label="購入履歴" {...a11yProps(1)} />
            <Tab
              className="tabcor Coupon_list3"
              label="登録情報の変更・確認"
              {...a11yProps(2)}
            />
            <Tab
              className="tabcor"
              label={
                <div className="d-flex justify-content-between align-items-center ">
                  <AiOutlineHeart className="me-4 fs-4" />{" "}
                  <span>お気に入</span>
                </div>
              }
              {...a11yProps(3)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MainMyPageCoupon />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {second_tab_steps === 1 ? (
            <>
              {" "}
              <div className="third_Tab  text-center ">
                <h2>
                  まだ購入はしていません。初めてのガチャポンを買うなら、 
                  <span
                    onClick={() => setsecond_tab_steps(2)}
                    style={{ cursor: "pointer" }}
                  >
                    {" "}

<br className="d-lg-none redlinebr "/>

                    ウェブガチャ一覧へ。
                  </span>
                </h2>
              </div>
            </>
          ) : (
            <>
             
              <PurchaseListFullPage />{" "}
            </>
          )}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ConfimYourRegistration />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <div className="container favLst">
            <div className="Favorites_list">
              <h1 className='d-none d-md-block py-5'> お気に入りリスト：企画</h1>
            </div>
            <div className="row mt-4">
                  
                  {Data.slice(0,4).map((items, index) => {
            return (
              <>
                <div className="col-lg-6 px-0 px-md-2">
                  <List_of_taprize_card
                    Image={items.Image}
                    Name={items.Name}
                    tag={items.tag}
                    items={items}
                  />
                </div>
              </>
            );
          })}
          
          </div>
          </div>
        </TabPanel>
        </div>
      </Box>
    </div>
  );
}
