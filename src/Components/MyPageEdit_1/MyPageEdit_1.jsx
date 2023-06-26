import React, { useEffect, useState } from "react";
import "./MyPageEdit_1.css";
import { Select } from "antd";
import Form from "react-bootstrap/Form";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import { useNavigate } from "react-router-dom";
import { FormLabel, Radio } from "@mui/material";

function MyPageEdit_1() {
  const [value, setvalue] = useState(1);
  const [value2, setvalue2] = useState(1);
  const [value3, setvalue3] = useState(1);
  const [SelectYear, setSelectYear] = useState([]);
  const [selectedValue, setSelectedValue] = React.useState("a");
  const [selectedValue1, setSelectedValue1] = React.useState("a");
  const [selectedValue2, setSelectedValue2] = React.useState("a");
  const [selectedValue3, setSelectedValue3] = React.useState("a");


  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const handleChange1 = (event) => {
    setSelectedValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setSelectedValue2(event.target.value);
  };
  const handleChange3 = (event) => {
    setSelectedValue3(event.target.value);
  };

  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setvalue(e.target.value);
  };
  const onChange1 = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setvalue2(e.target.value);
  };
  const onChange2 = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setvalue3(e.target.value);
  };

  const history = useNavigate();

  const AddYear = () => {
    let YearArray = [];
    for (let i = 1; i <= 99; i++) {
      let data = 1923;
      YearArray = [...YearArray, { year: data + i }];
    }
    setSelectYear(YearArray);
  };

  useEffect(() => {
    AddYear();
  }, []);
  return (
    <div style={{ backgroundColor: "#F2F6FF" }}>
      <div className="container py-5">
        <h3 className="myEdidTitle text-center">会員情報の変更</h3>
        <div className="row justify-content-center my-5 BothPad">
          <div
            className="col-lg-8   Name"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
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
                          className="Fld RegisterPHcolor"
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
                          className="Fld RegisterPHcolor"
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
                          className="Fld RegisterPHcolor"
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
                          className="Fld bobvv RegisterPHcolor"
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
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
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
                          placeholder="例：141-0022"
                          className="Fld RegisterPHcolor"
                        />
                      </Form.Group>
                    </Form>

                    <a
                      href="https://www.post.japanpost.jp/zipcode/"
                      target="_blank"
                      className="p_pink"
                    >
                      {" "}
                      郵便番号がわからない方はこちら
                    </a>
                  </div>
                  {/* <div className="col-lg-6">
                    <Form className="tScnd">
                      <Form.Group
                        className=""
                        controlId="exampleForm.ControlInput1"
                      >
                      
                        <Form.Control
                          type="text"
                          placeholder="001 etc..."
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                  </div> */}
                </div>
              </div>
              <div className="col-lg-12 mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <label htmlFor="sssss" className="NameFld">
                      都道府県
                    </label>
                    <select
                      name="state"
                      className="BDMain dop_mainond form-select shadow-none "
                    >
                      <option value="">選択してください</option>
                      <option value="北海道">北海道</option>
                      <option value="青森県">青森県</option>
                      <option value="岩手県">岩手県</option>
                      <option value="宮城県">宮城県</option>
                      <option value="秋田県">秋田県</option>
                      <option value="山形県">山形県</option>
                      <option value="福島県">福島県</option>
                      <option value="茨城県">茨城県</option>
                      <option value="栃木県">栃木県</option>
                      <option value="群馬県">群馬県</option>
                      <option value="埼玉県">埼玉県</option>
                      <option value="千葉県">千葉県</option>
                      <option value="東京都">東京都</option>
                      <option value="神奈川県">神奈川県</option>
                      <option value="新潟県">新潟県</option>
                      <option value="富山県">富山県</option>
                      <option value="石川県">石川県</option>
                      <option value="福井県">福井県</option>
                      <option value="山梨県">山梨県</option>
                      <option value="長野県">長野県</option>
                      <option value="岐阜県">岐阜県</option>
                      <option value="静岡県">静岡県</option>
                      <option value="愛知県">愛知県</option>
                      <option value="三重県">三重県</option>
                      <option value="滋賀県">滋賀県</option>
                      <option value="京都府">京都府</option>
                      <option value="大阪府">大阪府</option>
                      <option value="兵庫県">兵庫県</option>
                      <option value="奈良県">奈良県</option>
                      <option value="和歌山県">和歌山県</option>
                      <option value="鳥取県">鳥取県</option>
                      <option value="島根県">島根県</option>
                      <option value="岡山県">岡山県</option>
                      <option value="広島県">広島県</option>
                      <option value="山口県">山口県</option>
                      <option value="徳島県">徳島県</option>
                      <option value="香川県">香川県</option>
                      <option value="愛媛県">愛媛県</option>
                      <option value="高知県">高知県</option>
                      <option value="福岡県">福岡県</option>
                      <option value="佐賀県">佐賀県</option>
                      <option value="長崎県">長崎県</option>
                      <option value="熊本県">熊本県</option>
                      <option value="大分県">大分県</option>
                      <option value="宮崎県">宮崎県</option>
                      <option value="鹿児島県">鹿児島県</option>
                      <option value="沖縄県">沖縄県</option>
                    </select>
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
                          className="Fld RegisterPHcolor"
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
                          className="Fld RegisterPHcolor"
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
                          className="Fld RegisterPHcolor"
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
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
            <div className="row justify-content-start py-2">
              <h3 className="nameTitle">
                生年月日 <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
              </h3>

              <div className="Register_ant row bdsltmainup">
                <div className="col-lg-3 bdDateUpper">
                  <label htmlFor="sssss" className="passw">
                    年
                  </label>
                  <select
                    // class="form-select"
                    className="BDMain dop_mainond form-select shadow-none"
                    aria-label="Default select example"
                  >
                    <option selected>1990</option>

                    {SelectYear.map((option) => (
                      // <Select.Option key={option} value={option.year}>
                      //   {option.year}
                      // </Select.Option>
                      <option value={option.year}>{option.year}</option>
                    ))}
                  </select>
                </div>
                <div className="col-lg-3 bdDateUpper">
                  <label htmlFor="sssss" className="passw bddateoption">
                    月
                  </label>
                  <select
                    name="birthday_month"
                    className="BDMain dop_mainond form-select shadow-none"
                  >
                    <option selected value={1}>
                      1
                    </option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                  </select>
                </div>

                <div className="col-lg-3 bdDateUpper">
                  <label htmlFor="sssss" className="passw bddateoption">
                    {" "}
                    日
                  </label>
                  <select
                    id="sel-birth-day"
                    name="birthday_day"
                    className="BDMain dop_mainond form-select shadow-none"
                  >
                    <option selected value={1}>
                      1
                    </option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                    <option value={9}>9</option>
                    <option value={10}>10</option>
                    <option value={11}>11</option>
                    <option value={12}>12</option>
                    <option value={13}>13</option>
                    <option value={14}>14</option>
                    <option value={15}>15</option>
                    <option value={16}>16</option>
                    <option value={17}>17</option>
                    <option value={18}>18</option>
                    <option value={19}>19</option>
                    <option value={20}>20</option>
                    <option value={21}>21</option>
                    <option value={22}>22</option>
                    <option value={23}>23</option>
                    <option value={24}>24</option>
                    <option value={25}>25</option>
                    <option value={26}>26</option>
                    <option value={27}>27</option>
                    <option value={28}>28</option>
                    <option value={29}>29</option>
                    <option value={30}>30</option>
                    <option value={31}>31</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3  mt-5"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
            <h3 className="nameTitle ">
              {" "}
              性別 <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
            </h3>
            <div className="Register_ant">
              <div className="col-lg-4 ">
                {/* <Radio className="rdoalin" onChange={onChange} value={1}>
                      <p className="mb-0 chcked_clr"> 男性 </p>
                    </Radio> */}
                <div
                  className={
                    selectedValue === "a" ? "left_in9 left_in1" : "left_in9"
                  }
                >
                  <div className="d-flex align-items-center">
                    {/* <input type="radio" name="" id="left_rdio" className='radio_innput' /> */}
                    <Radio
                      name="purc"
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      value="a"
                      inputProps={{ "aria-label": "A" }}
                      sx={{
                        color: "#2EB3FF",
                        "& .MuiSvgIcon-root": {
                          fontSize: 28,
                        },
                      }}
                    />
                    <FormLabel
                      className={
                        selectedValue === "a"
                          ? "purc_nam clr_chhha"
                          : "purc_nam "
                      }
                      id="purc"
                    >
                      男性
                    </FormLabel>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
                <div
                  className={
                    selectedValue === "b" ? "left_in9 left_in1" : "left_in9"
                  }
                >
                  <div className="d-flex  align-items-center">
                    <Radio
                      name="purc"
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      inputProps={{ "aria-label": "b" }}
                      sx={{
                        color: "#2EB3FF",
                        "& .MuiSvgIcon-root": {
                          fontSize: 28,
                        },
                      }}
                    />
                    <FormLabel
                      className={
                        selectedValue === "b"
                          ? "purc_nam clr_chhha"
                          : "purc_nam "
                      }
                      id="purc"
                    >
                      女性
                    </FormLabel>
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div
                  className={
                    selectedValue === "c" ? "left_in9 left_in1" : "left_in9"
                  }
                >
                  <div className="d-flex align-items-center">
                    <Radio
                      name="purc"
                      checked={selectedValue === "c"}
                      onChange={handleChange}
                      value="c"
                      inputProps={{ "aria-label": "c" }}
                      sx={{
                        color: "#2EB3FF",
                        "& .MuiSvgIcon-root": {
                          fontSize: 28,
                        },
                      }}
                    />
                    <FormLabel
                      className={
                        selectedValue === "c"
                          ? "purc_nam clr_chhha"
                          : "purc_nam  "
                      }
                      id="purc"
                    >
                      その他
                    </FormLabel>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3 addressUpper"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
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
                          className="Fld RegisterPHcolor2"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-lg-6 text-start d-flex align-items-center fld2Upper">
                    <p className="mb-0 classs_edit_textkadk">
                      {" "}
                      <span className="star_clr2"> * </span>
                      半角数字で入力してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3 addressUpper"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
            <div className="row justify-content-center py-2">
              <h3 className="nameTitle">
                メールアドレス{" "}
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
                        <Form.Control
                          type="email"
                          placeholder=""
                          className="Fld RegisterPHcolor2"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="col-lg-6 text-start fld2Upper">
                    <p className="mb-0 maildetail ">
                      {" "}
                      <span className="star_clr2"> * </span>{" "}
                      ドメイン指定受信をご利用の場合は、「@zenco.co.jp」からのメールが受信できるよう設定を行ってください。
                    </p>
                    <p className="mb-0 maildetail">
                      <span className="star_clr2"> * </span>{" "}
                      このメールアドレスがログイン時のIDとなります。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3 addressUpper"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
            <div className="row justify-content-center py-2">
              <h3 className="nameTitle">
                パスワード{" "}
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
                        <Form.Control
                          type="password"
                          placeholder="*******"
                          className="Fld"
                        />
                      </Form.Group>
                    </Form>
                    <p className="mb-0 mt-2 passwordDetail">
                      {" "}
                      <span className="star_clr2"> *</span>
                      半角英数字50文字以内で入力してください。
                    </p>
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
                    <p className="mb-0 mt-2 passwordDetail">
                      <span className="star_clr2"> *</span>
                      確認のためパスワードを再入力してください。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3  mt-5"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
            <h3 className="nameTitle">
              {" "}
              メールマガジン{" "}
              <span style={{ color: "rgba(230, 0, 88, 1)" }}>*</span>
            </h3>
            <div className="row justify-content-center py-2 mt-3">
              <p className="magadetail">
                メールマガジンにて、新商品やお得な情報などをお送りしています。
              </p>

              <div className="Register_ant">
                {/* <Radio.Group
                  onChange={onChange1}
                  value={value2}
                  className="radio_group"
                > */}
                <div className="col-lg-6">
                  {/* <Radio className="rdoalin" onChange={onChange1} value={1}>
                    受け取る
                  </Radio> */}
                  <div
                    className={
                      selectedValue1 === "a" ? "left_in9 left_in1" : "left_in9"
                    }
                  >
                    <div className="d-flex  align-items-center">
                      <Radio
                        name="purc"
                        checked={selectedValue1 === "a"}
                        onChange={handleChange1}
                        value="a"
                        inputProps={{ "aria-label": "a" }}
                        sx={{
                          color: "#2EB3FF",
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                      <FormLabel
                        className={
                          selectedValue1 === "a"
                            ? "purc_nam clr_chhha"
                            : "purc_nam "
                        }
                        id="purc"
                      >
                        受け取る
                      </FormLabel>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className={
                      selectedValue1 === "b" ? "left_in9 left_in1" : "left_in9"
                    }
                  >
                    <div className="d-flex  align-items-center">
                      <Radio
                        name="purc"
                        checked={selectedValue1 === "b"}
                        onChange={handleChange1}
                        value="b"
                        inputProps={{ "aria-label": "b" }}
                        sx={{
                          color: "#2EB3FF",
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                      <FormLabel
                        className={
                          selectedValue1 === "b"
                            ? "purc_nam clr_chhha"
                            : "purc_nam "
                        }
                        id="purc"
                      >
                        受け取らない
                      </FormLabel>
                    </div>
                  </div>
                </div>
                {/* </Radio.Group> */}
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3  mt-5"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
            <h3 className="nameTitle"> 配信モードをオンにしますか？</h3>
            <div className="row justify-content-center py-2 mt-3">
              <div className="Register_ant">
                {/* <Radio.Group
                  onChange={onChange2}
                  value={value3}
                  className="radio_group"
                > */}
                <div className="col-lg-6">
                  <div
                    className={
                      selectedValue2 === "a" ? "left_in9 left_in1" : "left_in9"
                    }
                  >
                    <div className="d-flex  align-items-center">
                      <Radio
                        name="purc"
                        checked={selectedValue2 === "a"}
                        onChange={handleChange2}
                        value="a"
                        inputProps={{ "aria-label": "a" }}
                        sx={{
                          color: "#2EB3FF",
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                      <FormLabel
                        className={
                          selectedValue2 === "a"
                            ? "purc_nam clr_chhha"
                            : "purc_nam "
                        }
                        id="purc"
                      >
                        はい
                      </FormLabel>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className={
                      selectedValue2 === "b" ? "left_in9 left_in1" : "left_in9"
                    }
                  >
                    <div className="d-flex  align-items-center">
                      <Radio
                        name="purc"
                        checked={selectedValue2 === "b"}
                        onChange={handleChange2}
                        value="b"
                        inputProps={{ "aria-label": "b" }}
                        sx={{
                          color: "#2EB3FF",
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                      <FormLabel
                        className={
                          selectedValue2 === "b"
                            ? "purc_nam clr_chhha"
                            : "purc_nam "
                        }
                        id="purc"
                      >
                        いいえ
                      </FormLabel>
                    </div>
                  </div>
                </div>
                {/* </Radio.Group> */}
              </div>
            </div>
          </div>

          <div
            className="col-lg-8 py-3  mt-5"
            style={{
              backgroundColor: "#FFFFFF",
              borderRadius: "12px",
              padding: "32px 30px",
            }}
          >
            <h3 className="nameTitle"> クーポン利用</h3>
            <div className="row justify-content-center py-2 mt-3">
              <div className="Register_ant">
                {/* <Radio.Group
                  onChange={onChange2}
                  value={value3}
                  className="radio_group"
                > */}
                <div className="col-lg-6">
                  <div
                    className={
                      selectedValue3 === "a" ? "left_in9 left_in1" : "left_in9"
                    }
                  >
                    <div className="d-flex  align-items-center">
                      <Radio
                        name="purc"
                        checked={selectedValue3 === "a"}
                        onChange={handleChange3}
                        value="a"
                        inputProps={{ "aria-label": "a" }}
                        sx={{
                          color: "#2EB3FF",
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                      <FormLabel
                        className={
                          selectedValue3 === "a"
                            ? "purc_nam clr_chhha"
                            : "purc_nam "
                        }
                        id="purc"
                      >
                        利用しない
                      </FormLabel>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div
                    className={
                      selectedValue3 === "b" ? "left_in9 left_in1" : "left_in9"
                    }
                  >
                    <div className="d-flex  align-items-center">
                      <Radio
                        name="purc"
                        checked={selectedValue3 === "b"}
                        onChange={handleChange3}
                        value="b"
                        inputProps={{ "aria-label": "b" }}
                        sx={{
                          color: "#2EB3FF",
                          "& .MuiSvgIcon-root": {
                            fontSize: 28,
                          },
                        }}
                      />
                      <FormLabel
                        className={
                          selectedValue3 === "b"
                            ? "purc_nam clr_chhha"
                            : "purc_nam "
                        }
                        id="purc"
                      >
                        利用する
                      </FormLabel>
                    </div>
                  </div>
                </div>
                {/* </Radio.Group> */}
              </div>
            </div>
          </div>

          <div className="col-lg-8 mt-5">
            <div className="row btnnno_vali_row justify-content-center">
              <div className="col-lg-4 jisko_right col-md-12">
                <button
                  onClick={() => (
                    history("/RegisterationTab"), window.scrollTo({top:0,behavior:'instant'})
                  )}
                  className="myPageLastButton_white"
                >
                  {" "}
                  バック
                </button>
              </div>
              <div className="col-lg-4 col-md-12 mt-3 mt-lg-0 fld2Upper">
                <button
                  className="myPageLastButton_red "
                  onClick={() => (
                    history("/EditPageTwo"), window.scrollTo({top:0,behavior:'instant'})
                  )}
                >
                  確認画面へ
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPageEdit_1;
