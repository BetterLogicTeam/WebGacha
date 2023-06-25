import React from "react";
import TabForAll from "../TabForAll/TabForAll";

function List_f_Taprize() {
  return (
    <div style={{ backgroundColor: "#F2F6FF" }} className="px-3 px-md-3">
      <div className="container-fluid innerpadlstriz">
        <div className="webGachaList_title">

            <h1 className="page_header mb-0">タップライズ 一覧</h1>
        </div>
       
      </div>
      <div className="container aGNPad">
        <div className="taBs pt-2 pb-3">
          <TabForAll/>
        </div>
      </div>
    </div>
  );
}

export default List_f_Taprize;
