import React from 'react'
import './List_of_taprize_card.css'
import Card from "react-bootstrap/Card";
import list_pic from '../Assets/taprize_list_p1.png'

import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function List_of_taprize_card({Image,tag,Name}) {
  return (
    <div className="d-flex justify-content-center my-2">
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={Image} className="w-100 p-2 " />
        <button className='endSale' style={{backgroundColor:(tag=="発売中" ? "#FFD600":tag=="販売終了" ? "#D8D8D8":"#8AC7FF")}}>{tag}</button>
        <Card.Body>
          <Card.Text className='text-start listCrd_fst_txt '>{Name}</Card.Text>
          <Card.Text className="text-start listCrd_scnd_txt">発売期間 05/ 5(金)～05/26(金)</Card.Text>
          <div className='d-flex gap-3'>
            <button className='listCrd_button'>販売中の販売中のウェブガチャをチェック！</button>
            <div className='like_hrt'>
            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} className='hrt' />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

export default List_of_taprize_card