import React from "react";
import { Checkbox, Form, Input, Select } from "antd";
import { useNavigate } from "react-router-dom";

const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function Register_Step_One() {
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

            <div className="ajsiji my-3 my-md-5">
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
                    <Input placeholder="例：100" />
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

              <p className="p_pink">郵便番号がわからない方はこちら</p>

              <div className="Register_ant">
                <div className="col-lg-6">
                  <Form.Item
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
                  </Form.Item>
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
            <div className="ajsiji my-3 my-md-5">
              <p>
                生年月日 <span className="star_clr"> * </span>
              </p>
              <div className="Register_ant bdsltmainup">
                <div className="col-lg-3 bdDateUpper">
                <label htmlFor="sssss" className="passw">年</label>
                  <Select className="BDMain"
                    defaultValue="1990"
                    
                    options={[
                      {
                        value: "1990",
                        label: "1990",
                      }, {
                        value: "1991",
                        label: "1991",
                      }, {
                        value: "1992",
                        label: "1992",
                      }, {
                        value: "1993",
                        label: "1993",
                      }, {
                        value: "1994",
                        label: "1994",
                      }, {
                        value: "1995",
                        label: "1995",
                      }, {
                        value: "1996",
                        label: "1996",
                      }, {
                        value: "1997",
                        label: "1997",
                      }, {
                        value: "1998",
                        label: "1998",
                      }, {
                        value: "1999",
                        label: "1999",
                      }, {
                        value: "2001",
                        label: "2001",
                      },
                      {
                        value: "2002",
                        label: "2002",
                      },{
                        value: "2003",
                        label: "2003",
                      },{
                        value: "2004",
                        label: "2004",
                      },{
                        value: "2005",
                        label: "2005",
                      },{
                        value: "2006",
                        label: "2006",
                      },{
                        value: "2007",
                        label: "2007",
                      },{
                        value: "2008",
                        label: "2008",
                      },{
                        value: "2009",
                        label: "2009",
                      },{
                        value: "2010",
                        label: "2010",
                      },{
                        value: "2011",
                        label: "2011",
                      }
                     
                     
                    ]}
                  />
                </div>
                <div className="col-lg-3 bdDateUpper">
                <label htmlFor="sssss" className="passw bddateoption">月</label>
                  <Select className="BDMain"
                    defaultValue="1"
                    options={[
                      {
                        value: "1",
                        label: "1",
                      }, 
                      {
                        value: "2",
                        label: "2",
                      }, {
                        value: "3",
                        label: "3",
                      }, {
                        value: "4",
                        label: "4",
                      }, {
                        value: "5",
                        label: "5",
                      }, {
                        value: "6",
                        label: "6",
                      }, {
                        value: "7",
                        label: "7",
                      }, {
                        value: "8",
                        label: "8",
                      }, {
                        value: "9",
                        label: "9",
                      }, {
                        value: "10",
                        label: "10",
                      }, {
                        value: "11",
                        label: "11",
                      }, {
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
                  <Select className="BDMain"
                    defaultValue="1"
                    options={[
                      {
                        value: "1",
                        label: "1",
                      }, 
                      {
                        value: "2",
                        label: "2",
                      }, {
                        value: "3",
                        label: "3",
                      }, {
                        value: "4",
                        label: "4",
                      }, {
                        value: "5",
                        label: "5",
                      }, {
                        value: "6",
                        label: "6",
                      }, {
                        value: "7",
                        label: "7",
                      }, {
                        value: "8",
                        label: "8",
                      }, {
                        value: "9",
                        label: "9",
                      }, {
                        value: "10",
                        label: "10",
                      }, {
                        value: "11",
                        label: "11",
                      }, {
                        value: "12",
                        label: "12",
                      }, {
                        value: "13",
                        label: "13",
                      }, {
                        value: "14",
                        label: "14",
                      }, {
                        value: "15",
                        label: "15",
                      }, {
                        value: "16",
                        label: "16",
                      }, {
                        value: "17",
                        label: "17",
                      }, {
                        value: "18",
                        label: "18",
                      }, {
                        value: "19",
                        label: "19",
                      },  {
                        value: "20",
                        label: "20",
                      }, 
                      {
                        value: "21",
                        label: "21",
                      },   {
                        value: "22",
                        label: "22",
                      },   {
                        value: "23",
                        label: "23",
                      },   {
                        value: "24",
                        label: "24",
                      },   {
                        value: "25",
                        label: "25",
                      },   {
                        value: "26",
                        label: "26",
                      },   {
                        value: "27",
                        label: "27",
                      },   {
                        value: "28",
                        label: "28",
                      },   {
                        value: "29",
                        label: "29",
                      },  {
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
            <div className="ajsiji my-3 my-md-5">
              <p>
                お名前（フリガナ） <span className="star_clr"> * </span>
              </p>
              <div className="Register_ant">
                <div className="col-lg-4">
                  <Form.Item
                    name="姓"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 姓!",
                      },
                    ]}
                  >
                    <Checkbox checked onChange={onChange}>
                      <p className="mb-0 chcked_clr"> 男性 </p>
                    </Checkbox>
                  </Form.Item>
                </div>
                <div className="col-lg-4">
                  <Form.Item name="名">
                    <Checkbox onChange={onChange}>女性</Checkbox>
                  </Form.Item>
                </div>

                <div className="col-lg-4">
                  <Form.Item name="名">
                    <Checkbox onChange={onChange}>その他</Checkbox>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-5">
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
            <div className="ajsiji my-3 my-md-5">
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

            <div className="ajsiji my-3 my-md-5">
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
                    <Input placeholder="******" />
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
                    <Input placeholder="*********" />
                    <p className="Register_ant_ka_thrd_p ps-3">
                      <span className="star_clr2"> * </span>{" "}
                      確認のためパスワードを再入力してください。
                    </p>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-5">
              <p>
                メールマガジン <span className="star_clr"> * </span>
              </p>
              <p className="Register_ka_last_p">
                メールマガジンにて、新商品やお得な情報などをお送りしています。
              </p>
              <div className="Register_ant">
                <div className="col-lg-6">
                  <Form.Item
                    name="受け取る"
                    rules={[
                      {
                        required: true,
                        message: "Please input your 姓!",
                      },
                    ]}
                  >
                    <Checkbox checked onChange={onChange}>
                      <p className="checked_text_clrrrr mb-0"> 受け取る</p>{" "}
                    </Checkbox>
                  </Form.Item>
                </div>
                <div className="col-lg-6">
                  <Form.Item name="受け取らない">
                    <Checkbox onChange={onChange}>受け取らない</Checkbox>
                  </Form.Item>
                </div>
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
