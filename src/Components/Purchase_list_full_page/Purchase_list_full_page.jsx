import React from "react";
import "./Purchase_list_full_page.css";
import Form from "react-bootstrap/Form";
import card_img from "../Assets/image 1.png";
import { IoIosArrowForward } from "react-icons/io";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Purchase_list_full_page() {
  return (
    <div className="Purchase_list_full_page_main">
      <div className="container">
        <div className="d-flex justify-content-between">
          <p className="purschase_p">受注：4件</p>
          <div>
            <Form.Select
              className="purchase_select_section"
              aria-label="Default select example"
            >
              <option className="pusrchase_list_sele">全て </option>
              <option className="pusrchase_list_sele" value="1">
                One
              </option>
              <option className="pusrchase_list_sele" value="2">
                Two
              </option>
              <option className="pusrchase_list_sele" value="3">
                Three
              </option>
            </Form.Select>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="purchase_card">
                <img src={card_img} className="w-100" alt="" />
                <button className="purchase_button">発送準備中</button>
                <p className="pusrchar_card_para_t">
                  へ付必エチ代7校キヲノ創指ろ色線民あ
                </p>
                <div className="row">
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      注文番号：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      WP20230424190235040
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入日：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      2023/04/24
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入個数:
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      10個
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>WP20230424190235040</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>2023/04/24</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>10個</p>
                    </div>
                </div> */}

                <p className="pusrchar_card_para_t">お届け目安 :</p>
                <p
                  className="pusrchar_card_para_t"
                  style={{ fontSize: "16px ", fontWeight: "500" }}
                >
                  外も死図クエ安教レネニタ窓控供信クヱフ際人シノ作王ーレのト代併禁ょ測光づほー表読ま注介名吉句搭ねがち。口謙も遺江タヨコ登純目ヒメヱミ答点づンびけ類観あのなど重演ごきづつ奏8参え
                </p>
                <p className="purchase_footer">
                  リンク名 <IoIosArrowForward></IoIosArrowForward>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="purchase_card">
                <img src={card_img} className="w-100" alt="" />
                <button className="purchase_button">発送準備中</button>
                <p className="pusrchar_card_para_t">
                  へ付必エチ代7校キヲノ創指ろ色線民あ
                </p>
                <div className="row">
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      注文番号：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      WP20230424190235040
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入日：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      2023/04/24
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入個数:
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      10個
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>WP20230424190235040</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>2023/04/24</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>10個</p>
                    </div>
                </div> */}

                <p className="pusrchar_card_para_t">お届け目安 :</p>
                <p
                  className="pusrchar_card_para_t"
                  style={{ fontSize: "16px ", fontWeight: "500" }}
                >
                  外も死図クエ安教レネニタ窓控供信クヱフ際人シノ作王ーレのト代併禁ょ測光づほー表読ま注介名吉句搭ねがち。口謙も遺江タヨコ登純目ヒメヱミ答点づンびけ類観あのなど重演ごきづつ奏8参え
                </p>
                <p className="purchase_footer">
                  リンク名 <IoIosArrowForward></IoIosArrowForward>
                </p>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="purchase_card">
                <img src={card_img} className="w-100" alt="" />
                <button className="purchase_button">発送準備中</button>
                <p className="pusrchar_card_para_t">
                  へ付必エチ代7校キヲノ創指ろ色線民あ
                </p>
                <div className="row">
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      注文番号：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      WP20230424190235040
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入日：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      2023/04/24
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入個数:
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      10個
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>WP20230424190235040</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>2023/04/24</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>10個</p>
                    </div>
                </div> */}

                <p className="pusrchar_card_para_t">お届け目安 :</p>
                <p
                  className="pusrchar_card_para_t"
                  style={{ fontSize: "16px ", fontWeight: "500" }}
                >
                  外も死図クエ安教レネニタ窓控供信クヱフ際人シノ作王ーレのト代併禁ょ測光づほー表読ま注介名吉句搭ねがち。口謙も遺江タヨコ登純目ヒメヱミ答点づンびけ類観あのなど重演ごきづつ奏8参え
                </p>
                <p className="purchase_footer">
                  リンク名 <IoIosArrowForward></IoIosArrowForward>
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="purchase_card">
                <img src={card_img} className="w-100" alt="" />
                <button className="purchase_button">発送準備中</button>
                <p className="pusrchar_card_para_t">
                  へ付必エチ代7校キヲノ創指ろ色線民あ
                </p>
                <div className="row">
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      注文番号：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      WP20230424190235040
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入日：
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      2023/04/24
                    </p>
                  </div>
                  <div className="col-12 col-md-4 d-flex d-md-block">
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px " }}
                    >
                      購入個数:
                    </p>
                    <p
                      className="pusrchar_card_para_t"
                      style={{ fontSize: "16px ", fontWeight: "500" }}
                    >
                      10個
                    </p>
                  </div>
                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>WP20230424190235040</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>2023/04/24</p>
                    </div>
                    <div className="col-md-4">
                        <p className='pusrchar_card_para_t' style={{fontSize:"16px ",fontWeight:"500"}}>10個</p>
                    </div>
                </div> */}

                <p className="pusrchar_card_para_t">お届け目安 :</p>
                <p
                  className="pusrchar_card_para_t"
                  style={{ fontSize: "16px ", fontWeight: "500" }}
                >
                  外も死図クエ安教レネニタ窓控供信クヱフ際人シノ作王ーレのト代併禁ょ測光づほー表読ま注介名吉句搭ねがち。口謙も遺江タヨコ登純目ヒメヱミ答点づンびけ類観あのなど重演ごきづつ奏8参え
                </p>
                <p className="purchase_footer">
                  リンク名 <IoIosArrowForward></IoIosArrowForward>
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center py-5">
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
          </div>
        </div>
      </div>
    </div>
  );
}
