import React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import UnderHeaderItem from "../UnderHeaderItem/UnderHeaderItem";
import "./Underheader.css";

export default function Underheader() {
  return (
    <div className="Underheader">
      <div>
        <p className="fs-2 fw-bold text-center">توانایی های من</p>
        <p  className="text-center">این متن ساختگی و فقط جهت نمایش میباشد</p>
        <div className="div-stable"></div>
      </div>
      <div className="div-my-skills container">
        <UnderHeaderItem title="کاملا ریسپانسیو">
          <PhoneAndroidIcon />
        </UnderHeaderItem>
        <UnderHeaderItem title="ویرایش آسان">
          <AdsClickIcon />
        </UnderHeaderItem>
        <UnderHeaderItem title="سرعت و امینت بالا">
          <HealthAndSafetyIcon />
        </UnderHeaderItem>
      </div>
    </div>
  );
}
