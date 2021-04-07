import React, { useContext, useRef } from "react";
import GuestContext from "../../context/guestContext/GuestContext";

const GuestSearch = () => {
  const { searchGuest, clearSearch } = useContext(GuestContext);
  const searchValue = useRef("");
  const searchHandler = (e) => {
    if (searchValue.current.value !== "") {
      searchGuest(e.target.value);
    } else {
      clearSearch();
    }
  };
  return (
    <div>
      <input
        isRef={searchValue}
        type="text"
        className="search"
        onChange={searchHandler}
        placeholder="Search Guests..."
      />
      <i className="fas fa-search search-icon" />
    </div>
  );
};

export default GuestSearch;
