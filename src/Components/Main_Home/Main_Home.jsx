import React from 'react'
import LandingPage from '../Landing_Page/Landing_Page'
import NewsSlider from '../news_Slider/news_Slider';
import UpperFooterPart from '../Upper_footer_part/Upper_footer_part';
import WebRart from '../Web_part/Web_part';
import TapriseOnSale from '../Taprise_on_sale/Taprise_on_sale';

export default function Main_Home() {
  return (
    <div>
        <LandingPage/>
        <NewsSlider/>
        <TapriseOnSale/>
        <WebRart/>
        <UpperFooterPart/>
    </div>
  )
}
