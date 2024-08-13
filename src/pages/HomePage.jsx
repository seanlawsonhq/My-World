// eslint-disable-next-line no-unused-vars
import React from "react";
import Search from "../components/Search";
import Countries from "../components/Countries";
import Loading from "../utils/Loading";

const HomePage = ({
  allCountries,
  filterByRegion,
  filterBySearch,
  isLoading,
}) => {
  return (
    <div className="main-page bg-main-color">
      <Search filterByRegion={filterByRegion} filterBySearch={filterBySearch} />
     {isLoading &&  <Loading/>}
     {!isLoading && <Countries allCountries={allCountries} />}
    </div>
  );
};

export default HomePage;
