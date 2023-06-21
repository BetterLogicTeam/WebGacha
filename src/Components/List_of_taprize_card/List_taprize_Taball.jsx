import React, { useEffect, useState } from "react";
import Data from "./Data";
import ListOfTaprizeCard from "./List_of_taprize_card";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function List_taprize_Taball({ tags_text }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(20);
  const [FinalArray, setFinalArray] = useState([])

  const setPageNumber = (event, value) => {
    // setPage(value);
    setCurrentPage(value);
  };
  let newArray=[]
  function shuffleArray() {
     newArray = [...Data];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    setFinalArray(newArray)
    return newArray;
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentTokens = Data.slice(indexOfFirstPost, indexOfLastPost);
  // console.log("Data", Data);

  // useEffect(() => {
  //   shuffleArray()
  // }, [])
  
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
                onClick={()=>window.scrollTo(0, 0)}
                
              />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List_taprize_Taball;
