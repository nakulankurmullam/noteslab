import React, { useEffect, useState } from "react";
import "./Scroller.css";
import ScrollCard from "./SubComponents/ScrollCard";
import { useUsrGen } from "../Context/userGenContext";

function Scroller() {
  const { classList } = useUsrGen();
  const [list, setList] = useState([]);

  useEffect(() => {
    function func() {
      let arr = [];
      console.log("scroller did mount");
      classList.forEach((_class) => {
        _class.materials.forEach((material) => {
          arr.push({
            title: material?.title,
            type: "MAT",
            dURL: material?.downloadURL,
          });
          _class.works.forEach((work) => {
            arr.push({
              title: work?.title,
              type: work?.type,
              dURL: work?.downloadURL,
            });
          });
        });
      });
      console.log(arr);
      return arr;
    }
    setList(func());
  }, []);

  return (
    <div className="scroll-main">
      <div>
        <i className="fa-solid fa-history"></i> Recent Activities
      </div>
      <div className="scroll-wrap">
        {!!list.length &&
          list.map((card, i) => (
            <ScrollCard
              key={i}
              title={card?.title}
              type={card?.type}
              link={card?.dURL}
              className="mt-3 mb-3"
            />
          ))}
        {!list.length && (
          <div className="d-flex flex-column m-3 justify-content-center align-items-center">
            <h4>No activities</h4>
            <p style={{color:"grey"}}>
              or click home button to refresh
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Scroller;
