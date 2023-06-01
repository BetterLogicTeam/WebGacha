import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import "./Register.css";
import Register_Step_One from "./Register_Step_One";
import Register_Step_Two from "./Register_Step_Two";
import Register_Step_Three from "./Register_Step_Three";

const steps = [
  {
    title: "続ける",
    content: <Register_Step_One />,
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

  // Date,Time Picker

  return (
    <div className="Register_main">
      <div className="container">
       
            <Register_Step_One />
     
  
            <Register_Step_Two />
   
    
            <Register_Step_Three />
        

        <div
          style={{
            marginTop: 24,
          }}
          className="next_btttn_main"
        >
          {current < steps.length - 1 && (
            <div className="">
              <Button className="next_btttn" onClick={() => next()}>
                続ける
              </Button>
            </div>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
              className="next_btttn"
            >
              マイページへ
            </Button>
          )}
          {current > 0 && (
            <Button
              style={{
                margin: "0 8px",
              }}
              onClick={() => prev()}
              className="next_btttn"
            >
              前
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Register;
