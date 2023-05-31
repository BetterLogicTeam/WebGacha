import React from "react";
import "./Taprise_on_sale.css";
import Data from "../List_of_taprize_card/Data";
import ListOfTaprizeCard from "../List_of_taprize_card/List_of_taprize_card";
import { Link } from "react-router-dom";

export default function Taprise_on_sale() {
  return (
    <>
      <div className="Taprise_on_sale_bg">
        <div className="container">
          <Link to="/ListOTaprize" className="text-decoration-none "   onClick={() => window.scrollTo(0, 0)}>
            <h1>販売中のタップライズ</h1>
          </Link>

          <div className="row mt-5">
            {Data.slice(0, 6).map((items, index) => {
              return (
                <>
                  <div className="col-lg-6">
                    <ListOfTaprizeCard
                      Image={items.Image}
                      tag={items.tag}
                      Name={items.Name}
                    />
                  </div>
                </>
              );
            })}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="/ListOTaprize" className="text-decoration-none "   onClick={() => window.scrollTo(0, 0)}>
              <button className="gacha_Btn">
                販売中の販売中のウェブガチャをチェック！
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
