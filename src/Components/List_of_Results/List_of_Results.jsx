import React from "react";
import "./List_of_Results.css";
import image_8 from "../Assets/Taprize materials/image_8.png";
import image_2 from "../Assets/Taprize materials/image_2.png";
import image_3 from "../Assets/Taprize materials/image_3.png";
import image_4 from "../Assets/Taprize materials/image_4.png";
import image_5 from "../Assets/Taprize materials/image_5.png";
import image_7 from "../Assets/Taprize materials/image_7.png";
import image_9 from "../Assets/Taprize materials/image_9.png";
import image_88 from "../Assets/Taprize materials/image_88.png";
import image_10 from "../Assets/Taprize materials/image_10.png";
import List_of_Results_Card from "../List_of_Results_Card/List_of_Results_Card";

function List_of_Results() {
  return (
    <div className="List_of_Results_main_div">
      <h1 className="text-center pt-5">結果一覧</h1>
      <div className="container mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <List_of_Results_Card image={image_8} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_2} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_3} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_4} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_5} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_10} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_7} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_88} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_9} />
          </div>
          <div className="col">
            <List_of_Results_Card image={image_8} />
          </div>
        </div>
<div className="List_of_Results_btttn">
        <button>戻る</button>
        </div>
      </div>
    </div>
  );
}

export default List_of_Results;
