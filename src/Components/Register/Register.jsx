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
     
  
           
        
        <div className="row justify-content-center">
          <div className="col-md-8">
          <div style={{ marginTop: 24,}} className="next_btttn_main">
           <Button className="resgister_next_buttton" onClick={() => (next(),window.scrollTo({top:0,behavior:'instant'}))}>
                続ける
              </Button>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default Register;
