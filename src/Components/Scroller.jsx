import React, { useEffect, useState } from "react";
import "./Scroller.css";
import ScrollCard from "./SubComponents/ScrollCard";
import { useUsrGen } from "../Context/userGenContext";

function Scroller() {
  const { classList } = useUsrGen();
  const [list, setList] = useState([
    { title: "Internal1", type: "test", downloadURL: "https://youtube.com" },
    { title: "New Material", type: "material", downloadURL: "https://youtube.com" },
    { title: "assignment1", type: "assignment", downloadURL: "https://youtube.com" },
    { title: "Renewable", type: "material", downloadURL: "https://youtube.com" },
    { title: "Hover", type: "assignment", downloadURL: "https://youtube.com" },
    { title: "Internal2", type: "test", downloadURL: "https://youtube.com" },
  ]);

  // useEffect(() => {
  //   function func() {
  //     let arr = [];
  //     console.log("scroller did mount");
  //     classList.forEach((_class) => {
  //       _class.materials.forEach((material) => {
  //         arr.push({
  //           title: material?.title,
  //           type: "MAT",
  //           dURL: material?.downloadURL,
  //         });
  //         _class.works.forEach((work) => {
  //           arr.push({
  //             title: work?.title,
  //             type: work?.type,
  //             dURL: work?.downloadURL,
  //           });
  //         });
  //       });
  //     });
  //     console.log(arr);
  //     return arr;
  //   }
  //   setList(func());
  // }, []);

  return (
    <div className="scroll-main">
      <div>
        <i className="fa-solid fa-history"></i> Recent Activities
      </div>
      <div className="scroll-wrap">
        {list.map((card, i) => (
          <ScrollCard
            key={i}
            title={card?.title}
            type={card?.type}
            link={card?.dURL}
            className="mt-3 mb-3"
          />
        ))}
      </div>
    </div>
  );
}

export default Scroller;
