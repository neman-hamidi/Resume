import React from "react";
import "./Header.css";
import Headeritem from "../Headeritem/Headeritem";

export default function Header() {
  return (
    <>
      <div className="row my-5">
        <div className="col-6 d-flex justify-content-center" id="header">
          <img src="header-item.png" className="img-header" alt="" />
        </div>
        <div className="col-6">
          <p className="text-secondary">
            امیر ارسلان هستم ، عکاس و طراح گرافیک
          </p>
          <p className="w-50 fw-bold fs-5">
            عکاس و طراح گرافیک حرفه ای - طراح برگزیده در سومین جشنواره​​​​​​​
            انجمن صنفی طراحان ایران
          </p>
          <p className="w-50 fw-bold lh-lg">
            یک متن کوتاه درباره من لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
            از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
            می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت
            فراوان جامعه و متخصصان.
          </p>
          <div>
            <p className="text-secondary">
              نام <span className="px-4">:</span> ارسلان
            </p>
            <p className="text-secondary">
              متولد <span className="px-4">:</span> 1377
            </p>
            <p className="text-secondary">
              ساکن <span className="px-4">:</span> شیراز
            </p>
            <p className="text-secondary">
              شماره تماس <span className="px-4">:</span> 0912xxxx
            </p>
            <p className="text-secondary">
              ایمیل<span className="px-4">:</span> m2@info.com
            </p>
            <button className="btn btn-outline-dark ms-2">1234 - 0912</button>
            <button className="btn btn-dark">1234 - 0912</button>
          </div>
        </div>
      </div>
      <div className="div-grid-skill justify-items-center w-75 mx-auto">
            <Headeritem title="فتوشاپ" percent="80" />
            <Headeritem title="وردپرس" percent="50" w_50="50" w_30="50" />
            <Headeritem title="HTML5" percent="50" w_50="50" w_30="50" />
            <Headeritem title="کرل " percent="80" />
          </div>
    </>
  );
}
