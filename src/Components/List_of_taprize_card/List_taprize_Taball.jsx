import React from 'react'
import Data from "./Data";
import ListOfTaprizeCard from "./List_of_taprize_card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function List_taprize_Taball() {
  console.log("Data", Data);
  return (
    <div>
      <div className="container">
      <div className="row">
          {Data.map((items, index) => {
            return (
              <>
                <div className="col-lg-6 gok">
                  <ListOfTaprizeCard
                    Image={items.Image}
                    Name={items.Name}
                    tag={items.tag}
                    items={items}
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="row justify-content-center py-5">
          <div className="col-lg-10 d-flex justify-content-center">
            <Stack spacing={5}>
              <Pagination count={10} variant="outlined" shape="rounded" className="paginationBgC" />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List_taprize_Taball
