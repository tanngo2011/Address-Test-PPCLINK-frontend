import React, { useState } from "react";
import { search } from "../API/SearchApi";

function Search({setSearch}) {

  let [searchInput, setSearchInput] = useState("");


  
  let handleSearch = (event_param) => {
    let value = event_param.target.value;
    setSearchInput(value)
}




let logData = () => {

    let request_param =  {
        form : searchInput
    };

    search(request_param).then((response) => {
        console.log(response);
        setSearch(response.data);
    })
}
    
  return (
    <>
      <div id="search">
      <label htmlfor="search-input">Tìm kiếm địa danh: </label>
        <input
          type="text"
          id="search-input"
          onChange={() => handleSearch(event)}
        />
        <button id="search-button" onClick={logData}>
          Tìm
        </button>
      </div>
    </>
  );
}

export default Search;
