import React from "react";
import "./Purchase_list_full_page.css";
import Form from "react-bootstrap/Form";
import card_img from "../Assets/image 1.png";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import New_copenPurchaseCard from "../New_copenPurchaseCard/New_copenPurchaseCard";

export default function Purchase_list_full_page() {
  return (
    <div className="Purchase_list_full_page_main">
      <div className="container hou">
        <div className="d-flex justify-content-between">
          <p className="purschase_p">お客様のご注文：4</p>
          <div>
            <Form.Select
              className="purchase_select_section"
              aria-label="Default select example"
            >
              <option className="pusrchase_list_sele">全て </option>
              <option className="pusrchase_list_sele" value="1">
              発売中
              </option>
              <option className="pusrchase_list_sele" value="2">
              近日発売
              </option>
              <option className="pusrchase_list_sele" value="3">
              販売終了
              </option>
            </Form.Select>
          </div>
        </div>
        <div className="container px-0">

          <New_copenPurchaseCard/>
          
          {/* <div className="row justify-content-center py-5">
            <div className="col-lg-10 d-flex justify-content-center">
              <Stack spacing={5}>
                <Pagination
                  count={10}
                  variant="outlined"
                  shape="rounded"
                  className="paginationBgC"
                />
              </Stack>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
