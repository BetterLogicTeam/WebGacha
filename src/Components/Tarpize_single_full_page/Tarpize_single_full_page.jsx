import React from "react";
import Tarpize_single from "../Tarpize_single/Tarpize_single";
import Tarpize_all_cards from "../Tarpize_all_cards/Tarpize_all_cards";
import Taprize_single_main_card from "../Taprize_single_main_card/Taprize_single_main_card";
import D_info from "../D_info/D_info";
import News_Slider from "../news_Slider/news_Slider";
import { useLocation, useNavigate } from "react-router-dom";


export default function Tarpize_single_full_page() {
  const histtory= useNavigate()
  const location=useLocation()
  console.log("location",location);
  return (
    <div>
      <Tarpize_single location={location} />
      <Tarpize_all_cards />
      <D_info />
      <div className="Slider_News_Bg">
        <h1 className="News_Heading">発売中のウェブガチャをご覧ください</h1>
        <News_Slider/>
        <div className="d-flex justify-content-center">



        <button className="gacha_Btn AgainW  responsive_gachah_a mb-5 " onClick={()=>(histtory("/ListOTaprize"),window.scrollTo(0,0))} >もっと見る</button>

        </div>
      </div>
    </div>
  );
}
