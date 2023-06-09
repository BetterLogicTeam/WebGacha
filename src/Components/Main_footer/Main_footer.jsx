import React from "react";
import "./Main_footer.css";
import logo from "../Assets/newLogo.png";
import { Link } from "react-router-dom";

export default function Main_footer() {
  return (
    <div className="main_footer_bg">
      <div className="container">
        <div className="row">
          <div className="col-md-5 text-center text-md-start">
            <img src={logo} alt="" />
          </div>

          <div className="col-md-7 sojfswjfwjf text-end  mt-3 mt-md-0">
            <div className="footer_content text-start">
              <div className="upper d-flex     gap-3">
                <Link
                  to="/ListOTaprize"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p> タップライズ 一覧</p>
                </Link>
                <Link
                  to="/TermOfServices"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p>ご利用ガイド</p>
                </Link>

                <Link
                  to="/FAQ"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p>よくあるご質問</p>
                </Link>
                <Link
                  to="/ContactUs"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p>お問い合わせ</p>
                </Link>

                <p>マイアカウント</p>
              </div>
              <div className="upper d-flex     gap-3">
                <Link
                  to="/TermOfServices"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p>利用規約</p>
                </Link>
                <Link
                  to="/PrivacyPolicy"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p>プライバシーポリシー</p>
                </Link>

                <Link
                  to="/NotationTable"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                   <p>特定商取引法に基づく表記</p>
                </Link>
             
             
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3 all-right text-center">
        <p className="pt-3">Copyright ©2023 Webgacha. All Rights Reserved.</p>
      </div>
    </div>
  );
}
