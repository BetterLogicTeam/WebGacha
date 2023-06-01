import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import "./Register.css";
import { Checkbox, Form, Input } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const steps = [
  {
    title: "First",
    content: "First-content",
  },
  {
    title: "Second",
    content: "Second-content",
  },
  {
    title: "Last",
    content: "Last-content",
  },
];
const Register = () => {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <div className="Register_main">
      <div className="container">
        <Steps current={current} items={items} />

        <div>
            <h1 className="text-center py-5">新規会員登録</h1>
          <Form className="" name="horizontal_login" layout="vertical"
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
            <div className="ajsiji">
            <p>お名前（フリガナ）*</p>
            <div className="Register_ant">
                <div className="col-md-6">
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
              <Input placeholder="例：山田"
              />
            </Form.Item>
            </div>
            <div className="col-md-6">
            <Form.Item
              label="名"
              name="名"
              rules={[
                {
                  required: true,
                  message: "Please input your 名!",
                },
              ]}
            >
              <Input.Password placeholder="例：太郎"/>
            </Form.Item>
            </div>
            </div>



            <div className="Register_ant">
                <div className="col-md-6">
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
              <Input placeholder="例：ヤマダ"
              />
            </Form.Item>
            </div>
            <div className="col-md-6">
            <Form.Item
              label="メイ"
              name="メイ"
              rules={[
                {
                  required: true,
                  message: "Please input your メイ!",
                },
              ]}
            >
              <Input.Password placeholder="例：タロウ"/>
            </Form.Item>
            </div>
            </div>
            </div>


            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
            </Form.Item>

            {/* <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </div>



        <div className="my-5">
          <Form className="" name="horizontal_login" layout="vertical"
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
            <div className="ajsiji">
            <p>住所 *</p>
            <div className="Register_ant">
                <div className="col-md-6">
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
              <Input placeholder="例：100"
              />
            </Form.Item>
            </div>
            <div className="col-md-6">
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
              <Input.Password placeholder="例：0001　etc..."/>
            </Form.Item>
            </div>
            </div>

<p className="p_pink">郵便番号がわからない方はこちら</p>

            <div className="Register_ant">
                <div className="col-md-6">
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
              <Input placeholder="選択してください"
              />
            </Form.Item>
            </div>
            <div className="col-md-6">
            <Form.Item
              label="市区町村"
              name="市区町村"
              rules={[
                {
                  required: true,
                  message: "Please input your 市区町村!",
                },
              ]}
            >
              <Input.Password placeholder="例：品川区"/>
            </Form.Item>
            </div>
            </div>

            <div className="Register_ant">
                <div className="col-md-6">
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
              <Input placeholder="例：西五反田 1-1-11"
              />
            </Form.Item>
            </div>
            <div className="col-md-6 lmbbba">
            <Form.Item
            className="lmbbba"
              label="建物・マンション・部屋番号"
              name="建物・マンション・部屋番号"
              rules={[
                {
                  required: true,
                  message: "Please input your 建物・マンション・部屋番号!",
                },
              ]}
            >
              <Input.Password placeholder="例：五反田マンション　101号室"/>
            </Form.Item>
            </div>
            </div>
            </div>


            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
            </Form.Item>

            {/* <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </div>


        <div
          style={{
            marginTop: 24,
          }}
        >
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
            >
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
