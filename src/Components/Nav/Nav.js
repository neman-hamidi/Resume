import React from "react";
import "./Nav.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <div className="container navbar d-flex align-items-start">
        <div className="row w-100">
          <div className="col-4">
            <p className="fs-2 pe-5 fw-bold">نام</p>
          </div>
          <div className="col-8">
            <div className="div-navbar-links">
              <h6>خانه</h6>
              <h6>درباره من</h6>
              <h6>مهارت ها</h6>
              <h6>نمونه کارها</h6>
              <h6>روزمه</h6>
              <h6>بلاگ</h6>
              <h6>تماس با من</h6>
              <h6>(نسخه تیره)</h6>
            </div>
          </div>
        </div>
        <div className="div-desc-nav">
          <p className="fs-4 fw-bold text-secondary">وب سایت شخصی</p>
          <p className="fs-2 fw-bold">سلام من ارسلان هستم!</p>
          <p className="fw-bold text-secondary">عکاس -- گرافیک -- طراح سایت</p>
          <div className="div-icons-nav">
            <div>
              <InstagramIcon />
            </div>
            <div>
              <TelegramIcon />
            </div>
            <div>
              <MarkEmailReadIcon />
            </div>
            <div>
              <LinkedInIcon />
            </div>
          </div>
        </div>
        <div className="my-3 mx-auto">
          <a href="#header">
            <KeyboardDoubleArrowDownIcon />
          </a>
        </div>
      </div>
    </>
  );
}
