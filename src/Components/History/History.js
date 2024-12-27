import React from "react";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "./History.css";
import Historyitem from "../Historyitem/Historyitem";

export default function History() {
  return (
    <div className="my-5">
      <div>
        <p className="fs-2 fw-bold text-center">توانایی های من</p>
        <p className="text-center">این متن ساختگی و فقط جهت نمایش میباشد</p>
        <div className="div-stable"></div>
      </div>
      <div className="container history-div">
        <div>
          <p className="fs-3">
            <SchoolIcon />
            تحصیلات:
          </p>
        </div>
        <div>
          <p className="fs-3">
            <WorkIcon />
            سوابق شغلی:
          </p>
        </div>
        <Historyitem
          date="1396-تاکنون"
          title="کارشناسی ارشد گرافیک
"
          desc="درباره رشته تحصیلی خودتان و جزئیات آن بنویسید. به سادگی و با دوباره کلیک روی این بخش، متن مورد نظر خودتان را قرار دهید.
چیدمان آن را تغییر دهید، یا به کلی آن را حذف کنید!"
        />
        <Historyitem
          date="1394-1392"
          title="شرکت"
          desc="درباره رشته تحصیلی خودتان و جزئیات آن بنویسید. به سادگی و با دوباره کلیک روی این بخش، متن مورد نظر خودتان را قرار دهید.
چیدمان آن را تغییر دهید، یا به کلی آن را حذف کنید!"
        />
        <Historyitem
          date="1392-1391"
          title="مدرک طراحی سایت وردپرس"
          desc="درباره رشته تحصیلی خودتان و جزئیات آن بنویسید. به سادگی و با دوباره کلیک روی این بخش، متن مورد نظر خودتان را قرار دهید.
چیدمان آن را تغییر دهید، یا به کلی آن را حذف کنید!"
        />
        <Historyitem
          date="1389-1387"
          title="استدیو عکاسی"
          desc="درباره رشته تحصیلی خودتان و جزئیات آن بنویسید. به سادگی و با دوباره کلیک روی این بخش، متن مورد نظر خودتان را قرار دهید.
چیدمان آن را تغییر دهید، یا به کلی آن را حذف کنید!"
        />
        <Historyitem
          date="1387-1385"
          title="استدیو گرافیک"
          desc="درباره رشته تحصیلی خودتان و جزئیات آن بنویسید. به سادگی و با دوباره کلیک روی این بخش، متن مورد نظر خودتان را قرار دهید.
چیدمان آن را تغییر دهید، یا به کلی آن را حذف کنید!"
        />
        <Historyitem
          date="1385-1381"
          title="فناوری بازی سازی"
          desc="درباره رشته تحصیلی خودتان و جزئیات آن بنویسید. به سادگی و با دوباره کلیک روی این بخش، متن مورد نظر خودتان را قرار دهید.
چیدمان آن را تغییر دهید، یا به کلی آن را حذف کنید!"
        />
      </div>
      <div className="pt-5">
        <div className="parallax">
          <div className="text-center div-content-paralax">
            <h3 className="pb-4 fw-bold fs-2">آماده برای شروع یک همکاری...</h3>
            <button className="btn btn-outline-dark">ارتباط با من</button>
          </div>
        </div>
      </div>
      <div>
        <div className="img-under-paralax">
          <img src="double-cotation.png" alt="" />
        </div>
        <p className="text-secondary w-50 mx-auto">
          کار کردن با روزبه یکی از بهترین تجربه های چند ماه اخیر من بود. بسیار
          وظیفه شناس، متخصص و خوش اخلاق. تمام چیزی که برای پروژه مان نیاز
          داشتیم، طی این همکاری تامین شد. لورم ایپسوم متن ساختگی با تولید سادگی
          نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </p>
        <div className="profile-div text-center">
          <div>
            <img src="user.png" alt="" />
          </div>
          <h5>محمد اکبری</h5>
          <h6 className="text-secondary">مدیر عامل استودیو</h6>
        </div>
      </div>
    </div>
  );
}
