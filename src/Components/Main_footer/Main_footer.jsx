import React from "react";
import "./Main_footer.css";
import logo from "../Assets/newLogo.png";
import { Link } from "react-router-dom";

export default function Main_footer() {
  return (
    <div className="main_footer_bg">
      <div className="container-fluid widthkl_for_upper">
        <div className="row footer_aling">
          <div className="col-md-5 footerLftsideupper">
            <img src={logo} alt="" className="footerLftside" />
          </div>

          <div className="col-md-7 sojfswjfwjf footerrigtuper  text-end mt-3 mt-md-0">
            <div className="footer_content footerrigtPart text-start">
              <div className="upper d-flex     gap-3">
                <Link
                  to="/ListOTaprize"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks"> タップライズ 一覧</p>
                </Link>
                <Link
                  to="/TermOfServices"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks">ご利用ガイド</p>
                </Link>

                <Link
                  to="/FAQ"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks">よくあるご質問</p>
                </Link>
                <Link
                  to="/ContactUs"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks">お問い合わせ</p>
                </Link>
                <Link
                  to="/Login"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks">マイアカウント</p>
                </Link>
              </div>
              <div className="upper d-flex     gap-3">
                <Link
                  to="/TermOfServices"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks">利用規約</p>
                </Link>
                <Link
                  to="/PrivacyPolicy"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks">プライバシーポリシー</p>
                </Link>

                <Link
                  to="/NotationTable"
                  className="text-decoration-none upper"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <p className="footerLnks">特定商取引法に基づく表記</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container mt-3 all-right text-center py-3"
        style={{ color: "#020140" }}
      >
        Copyright ©2023 Webgacha. All Rights Reserved.{" "}
      </div>
    </div>
  );
}
