import React from "react";
import "./Search.css";

function Search() {
  const handleSearch = (e) => {
    let searchedFor = e.target.value.toLowerCase();
    const search_component = document.getElementsByClassName("scroll-wrap")[0];
    const scroll_list = search_component.children;
    for (let card of scroll_list) {
      let isVisible = card.attributes.title.nodeValue
        .toLowerCase()
        .includes(searchedFor);
      card.classList.toggle("d-none", !isVisible);
    }
  };

  return (
    <div className="srch-wrap">
      <i className="fa-solid fa-search"></i>
      <input
        onChange={handleSearch}
        type="text"
        id="srch-ip"
        placeholder="search"
      />
    </div>
  );
}

export default Search;
