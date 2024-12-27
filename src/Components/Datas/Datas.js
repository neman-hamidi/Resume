import React, { useEffect, useState } from "react";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import MarkChatReadIcon from "@mui/icons-material/MarkChatRead";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./Datas.css";
import Datasitem from "../Datasitem/Datasitem";

export default function Datas() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCount) => prevCount + 1);
    }, 10);
    if (counter === 84) {
      clearInterval(interval);
    }

    const interval2 = setInterval(() => {
      setCounter2((prevCount) => prevCount + 1);
    }, 10);
    if (counter2 === 1200) {
      clearInterval(interval2);
    }

    const interval3 = setInterval(() => {
      setCounter3((prevCount) => prevCount + 1);
    }, 10);
    if (counter3 === 13) {
      clearInterval(interval3);
    }

    const interval4 = setInterval(() => {
      setCounter4((prevCount) => prevCount + 1);
    }, 10);
    if (counter4 === 900) {
      clearInterval(interval4);
    }
    return () => {
      clearInterval(interval);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
    };
  }, [counter, counter2, counter3, counter4]);

  return (
    <div className="bg-div">
      <div className="datas container">
        <Datasitem title={counter} desc="پروژه موفق">
          <MilitaryTechIcon style={{ fontSize: "4rem" }} />
        </Datasitem>
        <Datasitem title={counter2} desc="ساعت پشتیبانی">
          <MarkChatReadIcon style={{ fontSize: "4rem" }} />
        </Datasitem>
        <Datasitem title={counter3} desc="تقدیرنامه">
          <AdsClickIcon style={{ fontSize: "4rem" }} />
        </Datasitem>
        <Datasitem title={counter4} desc="تعداد مخاطبان">
          <VisibilityIcon style={{ fontSize: "4rem" }} />
        </Datasitem>
      </div>
    </div>
  );
}
