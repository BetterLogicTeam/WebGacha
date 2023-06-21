import React, { useEffect, useState } from "react";
import { Checkbox, Form, Input, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";
import './Register.css'

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function Register_Step_One() {
  const [value, setvalue] = useState(1);
  const [value2, setvalue2] = useState(1);
  const [value3, setvalue3] = useState(1);
  const [SelectYear, setSelectYear] = useState([]);

  const onChange = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setvalue(e.target.value);
  };
  const onChange1 = (e) => {
    // console.log(`checked = ${e.target.checked}`);
    setvalue2(e.target.value);
  };
  const onChange2 = (e) => {
    console.log(`checked = ${e.target.checked}`);
    setvalue3(e.target.value);
  };
  const history = useNavigate();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
  };

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
    <div>
      <div>
        <h1 className="text-center py-5">新規会員登録</h1>
        <Form
          className=""
          name="horizontal_login"
          layout="vertical"
          labelCol={{
            span: 8,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="main_form_div">
            <div className="ajsiji">
              <p>
                お名前（フリガナ） <span className="star_clr"> *</span>
              </p>
              <div className="Register_ant rgestopAgain">
                <div className="col-lg-6">
                  <Form.Item
                    label="姓"
                    name="姓"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 姓!",
                      },
                    ]}
                  >
                    <Input placeholder="例：山田" />
                  </Form.Item>
                </div>
                <div className="col-lg-6">
                  <Form.Item
                    label="名"
                    name="名"
                    className="passw"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 名!",
                      },
                    ]}
                  >
                    <Input placeholder="例：太郎" />
                  </Form.Item>
                </div>
              </div>

              <div className="Register_ant rgestopAgain">
                <div className="col-lg-6">
                  <Form.Item
                    label="セイ"
                    name="セイ"
                    rules={[
                      {
                        required: true,
                        message: "Please input your セイ!",
                      },
                    ]}
                  >
                    <Input placeholder="例：ヤマダ" />
                  </Form.Item>
                </div>
                <div className="col-lg-6">
                  <Form.Item
                    label="メイ"
                    name="メイ"
                    className="passw"
                    rules={[
                      {
                        required: true,
                        message: "Please input your メイ!",
                      },
                    ]}
                  >
                    <Input
                      className="resiss_page_inpu"
                      placeholder="例：タロウ"
                    />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="ajsiji my-3 my-md-3">
              <p>
                住所 <span className="star_clr"> * </span>
              </p>
              <div className="Register_ant">
                <div className="col-lg-6">
                  <Form.Item
                    label="〒"
                    name="〒"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 〒!",
                      },
                    ]}
                  >
                    <Input placeholder="例：141-0022" />
                  </Form.Item>
                </div>
              </div>

              <a
                href="https://www.post.japanpost.jp/zipcode/"
                target="_blank"
                className="p_pink"
              >
                {" "}
                郵便番号がわからない方はこちら
              </a>

              <div className="Register_ant">
                <div className="col-lg-6">
                  {/* <Form.Item
                    label="都道府県"
                    name="都道府県"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 都道府県!",
                      },
                    ]}
                  >
                    <Input placeholder="選択してください" />
                  </Form.Item> */}
                  <label htmlFor="sssss" className="passw">
                    都道府県
                  </label>
                  {/* <Select
                    className="BDMainagain w-100"
                    style={{ marginTop: "9px" }}
                    defaultValue="選択してください"
                    options={[
                      {
                        value: "北海道",
                        label: "北海道",
                      },

                      {
                        value: "福島県",
                        label: "福島県",
                      },
                      {
                        value: "山形県",
                        label: "山形県",
                      },
                      {
                        value: "秋田県",
                        label: "秋田県",
                      },
                      {
                        value: "宮城県",
                        label: "宮城県",
                      },
                      {
                        value: "岩手県",
                        label: "岩手県",
                      },
                      {
                        value: "茨城県",
                        label: "茨城県",
                      },
                      {
                        value: "栃木県",
                        label: "栃木県",
                      },
                      {
                        value: "群馬県",
                        label: "群馬県",
                      },
                      {
                        value: "埼玉県",
                        label: "埼玉県",
                      },
                      {
                        value: "千葉県",
                        label: "千葉県",
                      },
                      {
                        value: "東京都",
                        label: "東京都",
                      },
                      {
                        value: "神奈川県",
                        label: "神奈川県",
                      },
                      {
                        value: "新潟県",
                        label: "新潟県",
                      },
                      {
                        value: "富山県",
                        label: "富山県",
                      },
                      {
                        value: "石川県",
                        label: "石川県",
                      },
                      {
                        value: "福井県",
                        label: "福井県",
                      },
                      {
                        value: "山梨県",
                        label: "山梨県",
                      },
                      {
                        value: "長野県",
                        label: "長野県",
                      },
                      {
                        value: "岐阜県",
                        label: "岐阜県",
                      },
                      {
                        value: "静岡県",
                        label: "静岡県",
                      },
                      {
                        value: "三重県",
                        label: "三重県",
                      },
                      {
                        value: "滋賀県",
                        label: "滋賀県",
                      },
                      {
                        value: "京都府",
                        label: "京都府",
                      },
                      {
                        value: "大阪府",
                        label: "大阪府",
                      },
                      {
                        value: "兵庫県",
                        label: "兵庫県",
                      },
                      {
                        value: "奈良県",
                        label: "奈良県",
                      },
                      {
                        value: "和歌山県",
                        label: "和歌山県",
                      },
                      {
                        value: "鳥取県",
                        label: "鳥取県",
                      },
                      {
                        value: "島根県",
                        label: "島根県",
                      },
                      {
                        value: "岡山県",
                        label: "岡山県",
                      },
                      {
                        value: "広島県",
                        label: "広島県",
                      },
                      {
                        value: "山口県",
                        label: "山口県",
                      },
                      {
                        value: "徳島県",
                        label: "徳島県",
                      },
                      {
                        value: "香川県",
                        label: "香川県",
                      },
                      {
                        value: "高知県",
                        label: "高知県",
                      },
                      {
                        value: "福岡県",
                        label: "福岡県",
                      },
                      {
                        value: "佐賀県",
                        label: "佐賀県",
                      },
                      {
                        value: "長崎県",
                        label: "長崎県",
                      },
                      {
                        value: "大分県",
                        label: "大分県",
                      },
                      {
                        value: "宮崎県",
                        label: "宮崎県",
                      },
                      {
                        value: "鹿児島県",
                        label: "鹿児島県",
                      },
                      {
                        value: "沖縄県",
                        label: "沖縄県",
                      },
                    ]}
                  /> */}
                  <select name="state" className="BDMain dop_mainond mt-2 form-select shadow-none ">
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
                  <Form.Item
                    label="市区町村"
                    name="市区町村"
                    className="passw"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 市区町村!",
                      },
                    ]}
                  >
                    <Input placeholder="例：品川区" />
                  </Form.Item>
                </div>
              </div>

              <div className="Register_ant">
                <div className="col-lg-6">
                  <Form.Item
                    label="番地"
                    name="番地"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 番地!",
                      },
                    ]}
                  >
                    <Input placeholder="例：西五反田 1-1-11" />
                  </Form.Item>
                </div>
                <div className="col-md-6 ">
                  {/* <Form.Item
                    className=" passw d-flex"
                    label="建物・マンション・部屋番号"
                    name="建物・マンション・部屋番号"
                    rules={[
                      {
                        required: true,
                        message:
                          "Please input your 建物・マンション・部屋番号!",
                      },
                    ]}
                  >
                    <Input placeholder="例：五反田マンション　101号室" />
                  </Form.Item> */}
                  <label htmlFor="sssss" className="passw">
                    {" "}
                    建物・マンション・部屋番号
                  </label>
                  <input
                    type="text"
                    className="skfhhjjf"
                    placeholder="例：五反田マンション　101号室"
                    name="sssss"
                    id="sssss"
                  />
                </div>
              </div>
            </div>

            <div className="ajsiji my-3 my-md-3">
              <p>
                生年月日 <span className="star_clr"> * </span>
              </p>
              <div className="Register_ant bdsltmainup">
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
                  {/* <Select
                    className="BDMain"
                    defaultValue="1990"
                  
                  >
                    {SelectYear.map((option) => (
                      <Select.Option key={option} value={option.year}>
                        {option.year}
                      </Select.Option>
                    ))}
                  </Select> */}
                </div>
                <div className="col-lg-3 bdDateUpper">
                  <label htmlFor="sssss" className="passw bddateoption">
                    月
                  </label>
                  <select name="birthday_month" className="BDMain dop_mainond form-select shadow-none">
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
                  {/* <Select
                    className="BDMain"
                    defaultValue="1"
                    options={[
                      {
                        value: "1",
                        label: "1",
                      },
                      {
                        value: "2",
                        label: "2",
                      },
                      {
                        value: "3",
                        label: "3",
                      },
                      {
                        value: "4",
                        label: "4",
                      },
                      {
                        value: "5",
                        label: "5",
                      },
                      {
                        value: "6",
                        label: "6",
                      },
                      {
                        value: "7",
                        label: "7",
                      },
                      {
                        value: "8",
                        label: "8",
                      },
                      {
                        value: "9",
                        label: "9",
                      },
                      {
                        value: "10",
                        label: "10",
                      },
                      {
                        value: "11",
                        label: "11",
                      },
                      {
                        value: "12",
                        label: "12",
                      },
                    ]}
                  /> */}
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

                  {/* <Select
                    className="BDMain"
                    defaultValue="1"
                    options={[
                      {
                        value: "1",
                        label: "1",
                      },
                      {
                        value: "2",
                        label: "2",
                      },
                      {
                        value: "3",
                        label: "3",
                      },
                      {
                        value: "4",
                        label: "4",
                      },
                      {
                        value: "5",
                        label: "5",
                      },
                      {
                        value: "6",
                        label: "6",
                      },
                      {
                        value: "7",
                        label: "7",
                      },
                      {
                        value: "8",
                        label: "8",
                      },
                      {
                        value: "9",
                        label: "9",
                      },
                      {
                        value: "10",
                        label: "10",
                      },
                      {
                        value: "11",
                        label: "11",
                      },
                      {
                        value: "12",
                        label: "12",
                      },
                      {
                        value: "13",
                        label: "13",
                      },
                      {
                        value: "14",
                        label: "14",
                      },
                      {
                        value: "15",
                        label: "15",
                      },
                      {
                        value: "16",
                        label: "16",
                      },
                      {
                        value: "17",
                        label: "17",
                      },
                      {
                        value: "18",
                        label: "18",
                      },
                      {
                        value: "19",
                        label: "19",
                      },
                      {
                        value: "20",
                        label: "20",
                      },
                      {
                        value: "21",
                        label: "21",
                      },
                      {
                        value: "22",
                        label: "22",
                      },
                      {
                        value: "23",
                        label: "23",
                      },
                      {
                        value: "24",
                        label: "24",
                      },
                      {
                        value: "25",
                        label: "25",
                      },
                      {
                        value: "26",
                        label: "26",
                      },
                      {
                        value: "27",
                        label: "27",
                      },
                      {
                        value: "28",
                        label: "28",
                      },
                      {
                        value: "29",
                        label: "29",
                      },
                      {
                        value: "30",
                        label: "30",
                      },
                      {
                        value: "31",
                        label: "31",
                      },
                    ]}
                  /> */}
                </div>
              </div>
            </div>

            <div className="ajsiji my-3 my-md-3">
              <p>
                お名前（フリガナ） <span className="star_clr"> * </span>
              </p>
              <div className="Register_ant">
                <Radio.Group
                  onChange={onChange}
                  value={value}
                  className="radio_group"
                >
                  <div className="col-lg-4">
                    <Radio className="rdoalin" onChange={onChange} value={1}>
                      <p className="mb-0 chcked_clr"> 男性 </p>
                    </Radio>
                    {/* <Form.Item
                    name="姓"
                    rules={[
                      {
                        required: true,
                        // message: "Please input your 姓!",
                      },
                    ]}
                  >
                    <Radio  onChange={onChange} value={1}>
                      <p className="mb-0 chcked_clr"> 男性 </p>
                    </Radio>
                  </Form.Item> */}
                  </div>
                  <div className="col-lg-4">
                    <Radio className="rdoalin" onChange={onChange} value={2}>
                      女性
                    </Radio>
                  </div>

                  <div className="col-lg-4">
                    <Radio className="rdoalin" onChange={onChange} value={3}>
                      その他
                    </Radio>
                  </div>
                </Radio.Group>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-3">
              <p>電話番号 <span className="star_clr"> * </span></p>
              <div className="Register_ant">
                <div className="col-lg-6">
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your 姓!",
                      },
                    ]}
                  >
                    <Input placeholder="例：090 - 1234 - 5678 " />
                  </Form.Item>
                </div>
                <div className="col-lg-6 text-start">
                  <p className="Register_ant_ka_p">
                    <span className="star_clr2"> * </span>{" "}
                    半角数字で入力してください。
                  </p>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-3">
              
              <p>メールアドレス <span className="star_clr"> * </span> </p>

              <div className="Register_ant">
                <div className="col-lg-6">
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your メールアドレス!",
                      },
                    ]}
                  >
                    <Input placeholder="" />
                  </Form.Item>
                </div>
                <div className="col-lg-6">
                  <p className="Register_ant_ka_scnd_p">
                    <span className="star_clr2"> * </span>
                    ドメイン指定受信をご利用の場合は、「@zenco.co.jp」からのメールが受信できるよう設定を行ってください。
                    <br /> <span className="star_clr2"> * </span>
                    このメールアドレスがログイン時のIDとなります。
                  </p>
                </div>
              </div>
            </div>

            <div className="ajsiji my-3 my-md-3">
              <p>
                パスワード <span className="star_clr"> * </span>
              </p>
              <div className="Register_ant">
                <div className="col-lg-6">
                  <Form.Item
                    name="姓"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 姓!",
                      },
                    ]}
                  >
                    <Input type="password" />
                    <p className="Register_ant_ka_thrd_p">
                      <span className="star_clr2"> *</span>
                      半角英数字50文字以内で入力してください。
                    </p>
                  </Form.Item>
                </div>
                <div className="col-lg-6">
                  <Form.Item
                    name="名"
                    className="passw"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 名!",
                      },
                    ]}
                  >
                    <Input type="password" />
                    <p className="Register_ant_ka_thrd_p ps-3">
                      <span className="star_clr2"> * </span>{" "}
                      確認のためパスワードを再入力してください。
                    </p>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-3">
              <p>
                メールマガジン <span className="star_clr"> * </span>
              </p>
              <p className="Register_ka_last_p">
                メールマガジンにて、新商品やお得な情報などをお送りしています。
              </p>
              <div className="Register_ant">
                <Radio.Group
                  onChange={onChange1}
                  value={value2}
                  className="radio_group"
                >
                  <div className="col-lg-6">
                    <Radio className="rdoalin" onChange={onChange1} value={1}>
                      受け取る
                    </Radio>
                  </div>
                  <div className="col-lg-6">
                    <Radio className="rdoalin" onChange={onChange1} value={2}>
                      受け取らない
                    </Radio>
                  </div>
                </Radio.Group>
              </div>
            </div>

            <div className="ajsiji my-3 my-md-3">
              <p>
                配信モードをオンにしますか？{" "}
                {/* <span className="star_clr"> * </span> */}
              </p>
              <div className="Register_ant">
                <Radio.Group
                  onChange={onChange2}
                  value={value3}
                  className="radio_group"
                >
                  <div className="col-lg-6">
                    <Radio className="rdoalin" onChange={onChange2} value={1}>
                      はい
                    </Radio>
                  </div>
                  <div className="col-lg-6">
                    <Radio className="rdoalin" onChange={onChange2} value={2}>
                      いいえ
                    </Radio>
                  </div>
                </Radio.Group>
              </div>
            </div>
          </div>
        </Form>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-9">
              <div className="scroll_text">
                <p>「ウェブガチャ」ご利用規約</p>
                <p>第1条 (会員)</p>
                <p>
                  1.
                  「会員」とは、当社が定める手続に従い本規約に同意の上、入会の申し込みを行う個人をいいます。2.
                  「会員情報」とは、会員が当社に開示した会員の属性に関する情報および会員の取引に関する履歴等の情報をいいます。3.
                  本規約はすべての会員に適用され、登録手続時および登録後にお守りいただく規約です。
                </p>
                <p>第2条 (登録)</p>
                <p>
                  1.
                  会員資格本規約に同意の上、所定の入会申込みをされたお客様は所定の登録手続完了後に会員としての資格を有します。会員登録手続は、会員となるご本人が行ってください。代理による登録は一切認められません。なお、過去に会員資格が取り消された方やその他当社が相応しくないと判断した方からの会員申込はお断りする場合があります。
                </p>
                <p>
                  2.
                  会員情報の入力会員登録手続の際には入力上の注意をよく読み、所定の入力フォームに必要事項を正確に入力してください。会員情報の登録において特殊記号・旧漢字・ローマ数字などはご使用になれません。これらの文字が登録された場合は当社にて変更致します。
                </p>
                <p>
                  3. パスワードの管理(1)
                  パスワードは会員本人のみが利用できるものとし、第三者に譲渡・貸与できないものとします。(2)
                  パスワードは他人に知られることがないよう定期的に変更する等、会員本人が責任をもって管理してください。(3)
                  パスワードを用いて当社に対して行われた意思表示は会員本人の意思表示とみなし、そのために生じる支払等はすべて会員の責任となります。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center w-100">
          <Checkbox
            className="last_vala_main_chkbox d-flex justify-content-center align-items-center"
            onChange={onChange}
          >
            <span className="mttt_ressspo" style={{ color: "#110F24" }}>
              利用規約を読み、同意します。
              {/* <span
                    className=""
                    style={{ color: "#E60058" }}
                    // onClick={() => (
                    //   history("/TermOfServices"), window.scrollTo(0, 0)
                    // )}
                  >
          利用規約に同意します。
                  </span> */}
            </span>
          </Checkbox>
        </div>
      </div>
    </div>
  );
}
