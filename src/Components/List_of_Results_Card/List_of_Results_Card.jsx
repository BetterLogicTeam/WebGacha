import React from "react";
import image_8 from "../Assets/Taprize materials/image_8.png";
import { Image } from "antd";

function List_of_Results_Card({ image }) {
  return (
    <div>
      <div className="card h-100 List_of_Results_card">
        <Image src={image} className="card-img-top p-2" alt="..." />
        {/* <img src={image} className="card-img-top p-2" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">
            <span className="List_of_Results_fst_span">A賞 : </span>
            <span className="List_of_Results_scnd_span ps-3">
              パートエカンバッジ D-2
            </span>
            <p className="List_of_Results_para pt-3">数量: 1</p>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default List_of_Results_Card;
