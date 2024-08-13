/* eslint-disable no-unused-vars */
import React from "react";
import Dropdown from "./Dropdown";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({filterByRegion, filterBySearch}) => {
  return (
    <div className="px-5 bg-main-color custom-text-white py-4 d-flex align-items-center justify-content-between">
      <form action="" className="position-relative searchBox">
        <BiSearchAlt2 className="fs-2 position-absolute search-icon top-50 translate-middle" />
        <input onChange={(event)=>{
          filterBySearch (event.target.value.toLowerCase())
        }}
          className="w-100 border-0 shadow py-3 rounded-2 bg-elements custom-text-white"
          type="text"
          placeholder="Search for a country..."
        />
      </form>
      <Dropdown filterByRegion={filterByRegion} />
    </div>
  );
};

export default Search;
