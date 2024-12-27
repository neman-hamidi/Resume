import React from "react";
import "./Headeritem.css";
export default function Headeritem({ title, percent, w_50 , w_30 }) {
  return (
    <div>
      <p className="my-1">{title}</p>
      <div className="skills">
        <div className={`div-skill ${w_50 ? "w_50" : ""}`}></div>
        <div className={`div-skill-sqr ${w_30 ? "w_30" : ""}`}>
          <h6 className="text-center text-white pt-1">{percent}%</h6>
        </div>
      </div>
    </div>
  );
}
