import React from "react";
import "./Taprise_on_sale.css";
import Data from "../List_of_taprize_card/Data";
import ListOfTaprizeCard from "../List_of_taprize_card/List_of_taprize_card";
import { Link, useNavigate } from "react-router-dom";
import pic_1 from "../Assets/Taprize materials/image 1.png";
import pic_2 from "../Assets/Taprize materials/image 2.png";
import pic_3 from "../Assets/Taprize materials/image 3.png";
import pic_4 from "../Assets/Taprize materials/image 4.png";
import pic_5 from "../Assets/Taprize materials/image 5.png";
import pic_6 from "../Assets/Taprize materials/image 6.png";

export default function Taprise_on_sale() {
  const history = useNavigate();
  return (
    <>
      <div className="Taprise_on_sale_bg">
        <div className="container">
          <>
            <h1
              style={{ cursor: "pointer" }}
              onClick={() => (history("/ListOTaprize"), window.scrollTo({top:0,behavior:'instant'}))}
            >
              販売中のタップライズ
            </h1>
          </>

          <div className="row mt-3 mt-md-5 last1">
          
            <div className="col-lg-6">
              <ListOfTaprizeCard
                Image={pic_1}
                tag={Data[0].tag}
                Name={Data[0].Name}
                items={Data[0]}
                tags_text="7"
              />
            </div> <div className="col-lg-6">
              <ListOfTaprizeCard
                Image={Data[1].Image}
                tag="近日発売"
                Name={Data[1].Name}
                items={Data[1]}
                tags_text="7"
              />
            </div> <div className="col-lg-6">
              <ListOfTaprizeCard
                Image={pic_3}
                tag={Data[2].tag}
                Name={Data[2].Name}
                items={Data[7]}
                tags_text="7"
              />
            </div> <div className="col-lg-6">
              <ListOfTaprizeCard
                Image={Data[8].Image}
                tag="近日発売"
                Name={Data[3].Name}
                items={Data[8]}
                tags_text="7"
              />
            </div> <div className="col-lg-6">
              <ListOfTaprizeCard
                Image={pic_5}
                tag={Data[4].tag}
                Name={Data[4].Name}
                items={Data[17]}
                tags_text="7"
              />
            </div> <div className="col-lg-6">
              <ListOfTaprizeCard
                Image={pic_1}
                tag="近日発売"
                Name={Data[5].Name}
                items={Data[0]}
                tags_text="7"
              />
            </div>
            {/* {Data.slice(0, 6).map((items, index) => {
              return (
                <>
                  <div className="col-lg-6">
                    <ListOfTaprizeCard
                      Image={items.Image}
                      tag={items.tag}
                      Name={items.Name}
                      items={items}
                      tags_text="7"
                    />
                  </div>
                </>
              );
            })} */}
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link
              to="/ListOTaprize"
              className="text-decoration-none "
              onClick={() => window.scrollTo({top:0,behavior:'instant'})}
            >
              <button className="gacha_Btn gachaAgn gybBBtn ">
                販売中のタップライズ
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
