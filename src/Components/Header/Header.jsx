import React, { useState } from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logog from "../Assets/Logog.png";
import { FaUserAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function Header() {
  const [Collapse, setCollapse] = useState(false);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="Nav_bar_Bg">
        <Container>
          <Navbar.Brand href="#home" className="nav_Responsive">
            <img src={Logog} alt="Navbar_Logo" />
          </Navbar.Brand>
          <div className="main_collapse">
            <button className="Navbar_Login_BTN me-3 ">
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
                ウェブガチャ 一覧
              </Nav.Link>
              <Nav.Link href="#" className="Nav_bar_Link">
                ご利用ガイド
              </Nav.Link>
              <Nav.Link href="#" className="Nav_bar_Link">
                よくあるご質問
              </Nav.Link>
              <Nav.Link href="#" className="Nav_bar_Link me-2">
                お問い合わせ
              </Nav.Link>
              <Nav.Link href="#" className="">
                <Link to="/Login">
                  <button className="Navbar_Login_BTN btn_rep ">
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
