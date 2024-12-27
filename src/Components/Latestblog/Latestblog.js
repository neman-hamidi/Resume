import React from "react";
import "./Latestblog.css";
import Latestblogitem from "../Latestblogitem/Latestblogitem";

export default function Latestblog() {
  return (
    <div className="latestblog">
      <div className="pt-5">
        <p className="fs-2 fw-bold text-center">آخرین مقالات</p>
        <p className="text-center">این متن ساختگی و فقط جهت نمایش میباشد</p>
        <div className="div-stable"></div>
      </div>
      <div className="div-grid-blog container pt-2 pb-5">
        <Latestblogitem
          title="ایده برای میز کار"
          src="blog1.png"
          date="26 دی 97"
        />
        <Latestblogitem
          title="نکاتی درباره انتخاب نام سایت"
          src="blog2.png"
          date="19 بهمن 96"
        />
        <Latestblogitem
          title="بهترین برند های سال97"
          src="blog3.png"
          date="2 فروردین 1401"
        />
      </div>
    </div>
  );
}
