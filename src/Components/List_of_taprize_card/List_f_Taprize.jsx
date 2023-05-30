import React from 'react'
import Data from './Data'
import List_of_taprize_card from './List_of_taprize_card'

function List_f_Taprize() {
  console.log("Data",Data);
  return (
    <div style={{backgroundColor:"#D2E9FF"}} className='px-3'>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 webGachaList_title">
            <h1 className="page_header mb-0">ウェブガチャ 一覧</h1>
          </div>
        </div>
      </div>
      <div className="container">
        
        <div className="row">
          {
          Data.map((items,index)=>{
           
            return(
              <>
              <div className="col-lg-6">

              <List_of_taprize_card Image={items.Image} Name={items.Name} tag={items.tag} />
              </div>
              
              </>
            )
          })
        }

        </div>
      </div>
    </div>
  )
}

export default List_f_Taprize
