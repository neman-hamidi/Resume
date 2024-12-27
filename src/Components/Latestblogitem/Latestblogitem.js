import React from "react";
import "./Latestblogitem.css";

export default function Latestblogitem({ src, title, date }) {
  return (
    <div>
      <div>
        <img src={src} alt="" />
      </div>
      <p className="mb-1">{title}</p>
      <p className="text-secondary">{date}</p>
    </div>
  );
}
