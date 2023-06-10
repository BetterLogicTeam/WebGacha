import React from "react";
import "./List_of_taprize_card.css";
import Card from "react-bootstrap/Card";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function List_of_taprize_card({ Image, tag, Name, items }) {
  const history = useNavigate();

  return (
    <div className="d-flex justify-content-center my-2">
      <Card style={{ width: "100%", cursor: "pointer" }}>
        <div
          className="p-2" 
          onClick={() => (
            history(`/TarpizeSingleFullPage`, { state: items }),
            window.scrollTo(0, 0)
          )}
        >
          <div className="hvrBx">
          <Card.Img variant="top" src={Image} className="w-100 hvrImg " />
          </div>
        </div>
        <button
          className="endSale"
          style={{
            backgroundColor:
              tag === "発売中"
                ? "#FFD600"
                : tag === "販売終了"
                ? "#D8D8D8"
                : "#8AC7FF",
          }}
        >
          {tag}
        </button>
        <Card.Body className="paaadankd">
          <Card.Text className="text-start listCrd_fst_txt mb-0 ">{Name}</Card.Text>
          <Card.Text className="text-start listCrd_scnd_txt mb-0 py-4">
            発売期間 05/ 5(金)～05/26(金)
          </Card.Text>
          <div className="d-flex gap-3 caerd_heart">
            <button
              className="listCrd_button "
              onClick={() => (
                history("/TarpizeSingleFullPage", { state: items }),
                window.scrollTo(0, 0)
              )}
            >
              販売中の販売中のウェブガチャをチェック！
            </button>
            <div className="like_hrt">
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
