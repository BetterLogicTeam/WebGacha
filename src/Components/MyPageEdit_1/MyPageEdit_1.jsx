import React from "react";
import "./MyPageEdit_1.css";
import Form from "react-bootstrap/Form";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useNavigate } from "react-router-dom";

function MyPageEdit_1() {
  const history=useNavigate()
  return (
    <div style={{ backgroundColor: "#F2F6FF" }}>
      <div className="container py-5">
        <h3 className="myEdidTitle text-center">会員情報の変更</h3>
        <div className="row justify-content-center my-5 BothPad">
          <div
            className="col-lg-8   Name"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" ,padding:"32px 30px" }}
          >
            <div className="row justify-content-center py-2">
              <h3 className="nameTitle">
                お名前（フリガナ）{" "}
                <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">姓</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="山田"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">名</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="太郎"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">セイ</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="ヤマダ"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">メイ</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="タロウ"
                          className="Fld bobvv"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3 addressUpper"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px", padding:"32px 30px" }}
          >
            <div className="row justify-content-center py-2">
              <h3 className="nameTitle">
                住所 <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">〒</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="100"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>

                    <h5 className="mt-4 err">郵便番号がわからない方はこちら</h5>
                  </div>
                  <div className="col-lg-6">
                    <Form className="tScnd">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        {/* <Form.Label className="NameFld">名</Form.Label> */}
                        <Form.Control
                          type="text"
                          placeholder="001 etc..."
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Form.Label className="NameFld">都道府県</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      className="Fld"
                    >
                      <option>選択してください</option>
                      <option value="1">選択してください</option>
                      <option value="2">選択してください</option>
                      <option value="3">選択してください</option>
                    </Form.Select>
                  </div>
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">市区町村</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="品川区"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>


                  
                  <div className="col-lg-6 mt-3">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">番地</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="西五反田 1-1-11"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-lg-6 mt-3">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label className="NameFld">
                          建物・マンション・部屋番号
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="五反田マンション　101号室"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>




                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3 dateOfBirthUpper mt-5"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" , padding:"32px 30px" }}
          >
            <div className="row justify-content-start py-2">
              <h3 className="nameTitle">
                生年月日 <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
              <div className="col-lg-8 d-flex gap-3 mt-3">
                <div className="year">
                  <Form.Label className="NameFld">年</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="Fld"
                  >
                    <option>1990</option>
                    <option value="1">1991</option>
                    <option value="2">1992</option>
                    <option value="3">1993</option>
                  </Form.Select>
                </div>
                <div className="month">
                  <Form.Label className="NameFld">月</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="Fld"
                  >
                    <option>12</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
                    <option value="3">7</option>
                    <option value="3">8</option>
                    <option value="3">9</option>
                    <option value="3">10</option>
                    <option value="3">11</option>
                    <option value="3">12</option>
                  </Form.Select>
                </div>
                <div className="day">
                  <Form.Label className="NameFld">日</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    className="Fld"
                  >
                    <option>22</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                  </Form.Select>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3  mt-5"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" ,padding:"32px 30px" }}
          >
            <h3 className="nameTitle ">
                {" "}
                性別 <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
            <div className="row justify-content-center py-2 mt-3">
              <div className="col-lg-4">
                <div className="Fld2">
                <FormControl>
                  {/* <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      className="dfff_clr edit_main_lebal_here"
                      control={<Radio />}
                      label="男性"
                    />
                  </RadioGroup>
                </FormControl>
                </div>
              </div>

              <div className="col-lg-4 fld2Upper">
                <div className="Fld2">
                <FormControlLabel
                  value="female"
                  className="edit_main_lebal_here"
                  control={<Radio />}
                  label="女性"
                />
                </div>
              </div>

              <div className="col-lg-4 fld2Upper">
                <div className="Fld2">
                <FormControlLabel
                  value="others"
                  control={<Radio />}
                  label="その他"
                  className="edit_main_lebal_here"
                />
                </div>
              </div>

            </div>
          </div>

          <div
            className="col-lg-8 py-3 addressUpper"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px",padding:"32px 30px" }}>
            <div className="row justify-content-center py-2">
              <h3 className="nameTitle">
              電話番号 <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="text"
                          placeholder="090 - 1234 - 5678 "
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-lg-6 text-start d-flex align-items-center fld2Upper">
                  <p className="mb-0 classs_edit_textkadk"> <span className="star_clr2"> * </span>半角数字で入力してください。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3 addressUpper"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px",padding:"32px 30px" }}>
            <div className="row justify-content-center py-2">
              <h3 className="nameTitle">
              メールアドレス <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="email"
                          placeholder="elunub3@gmail.com"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-lg-6 text-start fld2Upper">
                  <p className="mb-0 maildetail"> <span className="star_clr2"> * </span> ドメイン指定受信をご利用の場合は、「@zenco.co.jp」からのメールが受信できるよう設定を行ってください。</p>
                  <p className="mb-0 maildetail"><span className="star_clr2"> * </span>  このメールアドレスがログイン時のIDとなります。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3 addressUpper"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" ,padding:"32px 30px" }}>
            <div className="row justify-content-center py-2">
              <h3 className="nameTitle">
              パスワード <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="password"
                          placeholder="*******"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                    <p className="mb-0 mt-2 passwordDetail"> <span className="star_clr2"> *</span>半角英数字50文字以内で入力してください。</p>
                  </div>
                  <div className="col-lg-6 text-start fld2Upper">
                  <Form>
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Control
                          type="password"
                          placeholder="*******"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                    <p className="mb-0 mt-2 passwordDetail"><span className="star_clr2"> *</span>確認のためパスワードを再入力してください。</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3  mt-5"
            style={{ backgroundColor: "#FFFFFF", borderRadius: "12px" ,padding:"32px 30px" }}
          >
            <h3 className="nameTitle">
                {" "}
                メールマガジン  <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>
            <div className="row justify-content-center py-2 mt-3">

              <p className="magadetail">メールマガジンにて、新商品やお得な情報などをお送りしています。</p>
              <div className="col-lg-6">
                <div className="Fld2">
                <FormControl>
                  {/* <FormLabel id="demo-radio-buttons-group-label">性別</FormLabel> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value=""
                      control={<Radio />}
                      label="受け取る"
                      className="dfff_clr adlamadmd"
                    />
                  </RadioGroup>
                </FormControl>
                </div>
              </div>

              <div className="col-lg-6 fld2Upper">
                <div className="Fld2">
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="受け取らない"
                />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5">
            <div className="row justify-content-center">
              <div className="col-lg-4">
                <button className="myPageLastButton_white">バック</button>
              </div>
              <div className="col-lg-4 mt-3 mt-lg-0 fld2Upper">
                <button className="myPageLastButton_red " onClick={()=>(history('/EditPageTwo'),window.scrollTo(0,0))}>確認画面へ</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MyPageEdit_1;
