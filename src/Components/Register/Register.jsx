import { Button, message, Steps, theme } from "antd";
import { useState } from "react";
import "./Register.css";
import Register_Step_One from "./Register_Step_One";
import Register_Step_Two from "./Register_Step_Two";
import Register_Step_Three from "./Register_Step_Three";


const Register = ({next}) => {
 
 

  return (
    <div className="Register_main">
      <div className="container px-0 py-2">
       
            <Register_Step_One />
     
  
           
        

        <div
          style={{
            marginTop: 24,
          }}
          className="next_btttn_main"
        >
           <Button className="next_btttn" onClick={() => (next(),window.scrollTo(0,0))}>
                続ける
              </Button>
          {/* {current < steps.length - 1 && (
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
          )} */}
        </div>
      </div>
    </div>
  );
};
export default Register;
