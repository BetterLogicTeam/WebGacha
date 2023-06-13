import React, { useState } from "react";
import Data from "./Data";
import ListOfTaprizeCard from "./List_of_taprize_card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function List_taprize_Taball({ tags_text }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  const setPageNumber = (event, value) => {
    // setPage(value);
    setCurrentPage(value);
  };
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTokens = Data.slice(indexOfFirstPost, indexOfLastPost);
  console.log("Data", Data);
  return (
    <div>
      <div className="container">
        <div className="row">
          {currentTokens.map((items, index) => {
            return (
              <>
                <div className="col-lg-6 gok">
                  <ListOfTaprizeCard
                    Image={items.Image}
                    Name={items.Name}
                    tag={items.tag}
                    items={items}
                    tags_text={tags_text}
                  />
                </div>
              </>
            );
          })}
        </div>

        <div className="row justify-content-center py-5">
          <div className="col-lg-10 d-flex justify-content-center">
            <Stack spacing={2}>
              {/* <Pagination count={10} variant="outlined" shape="rounded" className="paginationBgC" /> */}
              <Pagination
                count={Math.ceil(Data.length / postsPerPage)}
                page={currentPage}
                onChange={setPageNumber}
                variant="outlined"
                shape="rounded"
                className="paginationBgC"
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List_taprize_Taball;
