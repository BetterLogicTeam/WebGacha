import React, { useEffect, useState } from "react";
import { Checkbox, Form, Input, Radio, Select } from "antd";
import { useNavigate } from "react-router-dom";

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
              <div className="Register_ant">
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

              <div className="Register_ant">
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
                {/* <div className="col-lg-6">
                  <Form.Item
                    label="〒"
                    name="〒"
                    className="passw"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 〒!",
                      },
                    ]}
                  >
                    <Input placeholder="例：0001　etc..." />
                  </Form.Item>
                </div> */}
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
                  <Select
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
                      // {
                      //   value: "北海道",
                      //   label: "北海道",
                      // },



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
                  />
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
                  <Select className="BDMain" defaultValue="1990"
                  //  value={option}
                  >
                    {SelectYear.map((option) => (
                            <Select.Option key={option} value={option.year}>
                              {option.year}
                            </Select.Option>
                          ))}
                  </Select>
                </div>
                <div className="col-lg-3 bdDateUpper">
                  <label htmlFor="sssss" className="passw bddateoption">
                    月
                  </label>
                  <Select
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
                  />
                </div>

                <div className="col-lg-3 bdDateUpper">
                  <label htmlFor="sssss" className="passw bddateoption">
                    {" "}
                    日
                  </label>
                  <Select
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
                  />
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
              <p>電話番号 *</p>
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
              <p>メールアドレス *</p>
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
                    <Input   type="password"/>
                    <p className="Register_ant_ka_thrd_p ps-3">
                      <span className="star_clr2"> * </span>{" "}
                      確認のためパスワードを再入力してください。
                    </p>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-3" >
              <p>
                メールマガジン <span className="star_clr"> * </span>
              </p>
              <p className="Register_ka_last_p">
                メールマガジンにて、新商品やお得な情報などをお送りしています。
              </p>
              <div  className="Register_ant">
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

            <div className="ajsiji my-3 my-md-3" >
              <p>
                配信モードをオンにしますか？{" "}
                <span className="star_clr"> * </span>
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

            <div className="d-flex justify-content-center w-100">
              <Checkbox
                className="last_vala_main_chkbox d-flex justify-content-center"
                onChange={onChange}
              >
                <span className="mttt_ressspo">
                  {/* <span   style={{ color: "#110F24" }}>を読み、同意します。</span> */}
                  <span
                    className=""
                    style={{ color: "#E60058" }}
                    onClick={() => (
                      history("/TermOfServices"), window.scrollTo(0, 0)
                    )}
                  >
                    利用規約に同意します。
                  </span>
                </span>
              </Checkbox>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
