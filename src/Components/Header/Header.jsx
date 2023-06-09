import React, { useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logog from "../Assets/newLogo.png";
import { FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link, useNavigate } from "react-router-dom";
import "./Resonsive.css"
export default function Header() {
  const [Collapse, setCollapse] = useState(false);
  const history = useNavigate();
  return (
    <div className="mmaaaaa">
      <Navbar collapseOnSelect expand="lg" className="Nav_bar_Bg  " >
        <Container className="hsfhwjfwjfhw">
          <Link className="hai_tamana" to="/">
            <Navbar.Brand href="/" className="nav_Responsive">
              <img src={Logog} alt="Navbar_Logo" />
            </Navbar.Brand>
          </Link>
          <div className="main_collapse">
            <button
              className="Navbar_Login_BTN me-3 "
              onClick={() => history("/Login")}
            >
              <FaUserAlt />
            </button>

            <div
              className="Nav_collps"
              onClick={() => setCollapse((prevCheck) => !prevCheck)}
            >
              {Collapse === true ? (
                <>
                  <RxCross2 className="Nav_icon" />
                </>
              ) : (
                <>
                  <FiMenu className="Nav_icon" />
                </>
              )}
            </div>
          </div>

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={Collapse === true ? "show" : ""}
          >
            <Nav className="ms-auto navbar_nav ">
              <Nav.Link href="#" className="Nav_bar_Link">
                <Link
                  to="/ListOTaprize"
                  className="text-decoration-none Nav_bar_Link "
                  onClick={() => setCollapse(false)}
                >
                  タップライズ 一覧
                </Link>
              </Nav.Link>
              <Nav.Link href="#" className="Nav_bar_Link">
                <Link
                  to="/TermOfServices"
                  className="text-decoration-none Nav_bar_Link "
                  onClick={() => setCollapse(false)}
                >
                  ご利用ガイド
                </Link>
              </Nav.Link>
              <Nav.Link href="#" className="Nav_bar_Link">
                <Link
                  to="/FAQ"
                  className="text-decoration-none Nav_bar_Link "
                  onClick={() => setCollapse(false)}
                >
                  よくあるご質問
                </Link>
              </Nav.Link>
              <Nav.Link href="#" className="Nav_bar_Link mmmrmrrrmrmrm  ">
                <Link
                  to="/ContactUs"
                  className="text-decoration-none Nav_bar_Link "
                  onClick={() => setCollapse(false)}
                >
                  お問い合わせ
                </Link>
              </Nav.Link>
              <Nav.Link href="#" className="">
                <Link to="/Login" className="text-decoration-none">
                  <button className="Navbar_Login_BTN btn_rep  ">
                    <FaUserAlt /> ログイン
                  </button>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
