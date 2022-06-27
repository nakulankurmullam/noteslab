import React from "react";
import "./Search.css";

function Search() {
  return (
      <div className="srch-wrap">
        <i className="fa-solid fa-search"></i>
        <input type="text" id="srch-ip" placeholder='enter subject code'/>
      </div>
  );
}

export default Search;
