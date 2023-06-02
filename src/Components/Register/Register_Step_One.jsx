import React from "react";
import { Checkbox, Form, Input } from "antd";
import { DatePicker, TimePicker } from "antd";
const { RangePicker } = DatePicker;
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
  const config = {
    rules: [
      {
        type: "object",
        required: true,
        message: "Please select time!",
      },
    ],
  };
  const onFinish = (fieldsValue) => {
    // Should format date value before submit.
    const rangeValue = fieldsValue["range-picker"];
    const rangeTimeValue = fieldsValue["range-time-picker"];
    const values = {
      ...fieldsValue,
      "date-picker": fieldsValue["date-picker"].format("YYYY-MM-DD"),
      "date-time-picker": fieldsValue["date-time-picker"].format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      "month-picker": fieldsValue["month-picker"].format("YYYY-MM"),
      "range-picker": [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
      "range-time-picker": [
        rangeTimeValue[0].format("YYYY-MM-DD HH:mm:ss"),
        rangeTimeValue[1].format("YYYY-MM-DD HH:mm:ss"),
      ],
      "time-picker": fieldsValue["time-picker"].format("HH:mm:ss"),
    };
    console.log("Received values of form: ", values);
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
              <p>お名前（フリガナ）*</p>
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
                    <Input placeholder="例：タロウ" />
                  </Form.Item>
                </div>
              </div>
            </div>

            <div className="ajsiji my-3 my-md-5">
              <p>住所 *</p>
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
                <div className="col-lg-6">
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
                </div>
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
                <div className="col-lg-6 lmbbba">
                  <Form.Item
                    className="lmbbba passw"
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
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-5">
              <p>生年月日 *</p>
              <div className="Register_ant">
                <div className="col-lg-3">
                  <Form.Item name="year-picker" label="年">
                    <DatePicker picker="year" />
                  </Form.Item>
                </div>
                <div className="col-lg-3">
                  <Form.Item name="month-picker" label="月">
                    <DatePicker picker="month" />
                  </Form.Item>
                </div>

                <div className="col-lg-3">
                  <Form.Item name="day-picker" label="日">
                    <DatePicker picker="day" />
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-5">
              <p>お名前（フリガナ）*</p>
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
                      男性
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
                <div className="col-lg-6">
                  <p className="Register_ant_ka_p">
                    *半角数字で入力してください。
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
                    <Input />
                  </Form.Item>
                </div>
                <div className="col-lg-6">
                  <p className="Register_ant_ka_scnd_p">
                    **ドメイン指定受信をご利用の場合は、「@zenco.co.jp」からのメールが受信できるよう設定を行ってください。*このメールアドレスがログイン時のIDとなります。
                  </p>
                </div>
              </div>
            </div>

            <div className="ajsiji my-3 my-md-5">
              <p>パスワード *</p>
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
                    <Input />
                    <p className="Register_ant_ka_thrd_p">
                      *半角英数字50文字以内で入力してください。
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
                    <Input />
                    <p className="Register_ant_ka_thrd_p ps-3">
                      *確認のためパスワードを再入力してください。
                    </p>
                  </Form.Item>
                </div>
              </div>
            </div>
            <div className="ajsiji my-3 my-md-5">
              <p>メールマガジン *</p>
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
                      受け取る
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
            <div className="last_vala_chkbox w-100 ps-5">
              <Checkbox className="last_vala_main_chkbox" onChange={onChange}>
                <span style={{ color: "#110F24" }}>を読み、同意します。</span>
                <span style={{ color: "#E60058" }}>利用規約に同意します。</span>
              </Checkbox>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
