import React from "react";
import "./List_of_taprize_card.css";
import Card from "react-bootstrap/Card";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function List_of_taprize_card({ Image, tag, Name, items,tags_text }) {
  const history = useNavigate();

  return (
    <div className="d-flex justify-content-center my-2 ">
      <Card style={{ width: "100%", cursor: "pointer" }} className="card_list_of_taprize ">
        <div
          className="p-2" 
          onClick={() => (
            history(`/TarpizeSingleFullPage`, { state: items }),
            window.scrollTo(0, 0)
          )}>
          <div className="hvrBx">
          <Card.Img variant="top" src={Image} className="w-100 hvrImg " />
          </div>
        </div>
        <button
          className="endSale"
          style={{
            backgroundColor:
            tags_text==0 ?
              tag === "発売中" ? "#FFD600" : tag === "近日発売" ?"#8AC7FF":"#D8D8D8"
              : tags_text==7 ?
              tag === "発売中" ? "#FFD600" : "#8AC7FF"


            : tags_text==1 ? "#FFD600" : tags_text==2 ? "#8AC7FF":"#D8D8D8"
            
             
          }}>
          {
            tags_text==0 ? <> {tag}</>:tags_text==7 ?  tag === "発売中" ? "発売中" : "近日発売": tags_text==1?"発売中" : tags_text==2? "近日発売":"販売終了"

          }
         
        </button>
        <Card.Body className="paaadankd">
          <Card.Text className="text-start listCrd_fst_txt mb-0 ">{Name}</Card.Text>
          <Card.Text className="text-start listCrd_scnd_txt mb-0 py-4">
            発売期間 05/ 5(金)～05/26(金) 
          </Card.Text>
          <div className="d-flex flex-column flex-md-row gap-3 caerd_heart">
            <button
              className="listCrd_button  "
              onClick={() => (
                history("/TarpizeSingleFullPage", { state: items }),
                window.scrollTo(0, 0)
              )}
            >
            
                販売中のタップライズ 

            </button>


            <button
              className="fazol d-block d-md-none "
              onClick={() => (
                history("/TarpizeSingleFullPage", { state: items }),
                window.scrollTo(0, 0)
              )}
            >
      <Favorite />   <span className="fazolline"> お気に入りから外す </span>
            </button>
            <div className="like_hrt ">
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                className="hrt"
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default List_of_taprize_card;