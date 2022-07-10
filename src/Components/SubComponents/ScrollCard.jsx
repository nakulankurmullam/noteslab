import React from "react";
import "./ScrollCard.css";


function ScrollCard({ title, link, type }) {

  const handleDownload = async () => {
    open(link)
  }

  return (
    <div className="sCard-wrap " title={`${title}`}>
      <div className="sCard-left">
        <i className="fa-solid fa-book"></i>
      </div>
      <div className="sCard-right">
        <div className="sCard-title">{`${type}: ${title}`}</div>
        <div className="sCard-btn-wrap">
          <button className="dwnld" onClick={handleDownload}>
            <i className="fa-solid fa-download"></i> download
          </button>
          <button
            className="view"
            onClick={() => {
              open(link);
            }}
          >
            {" "}
            <i className="fa-solid fa-eye"></i> view
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScrollCard;
