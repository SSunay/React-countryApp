import React, { useState, useEffect } from "react";
import axios from "axios";
import"./index.scss"

const Search = ({ setCountries }) => {
  const BASE_URL = "https://restcountries.com/v2/all";

  const [countries, SetCountries] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((data) => SetCountries(data.data));
  }, []);

  const searchCounteries = (e) => {
    let newData = countries.filter((element) =>
      element.name
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
    setCountries(newData);
  };

  const searchByRegion = (e)=>{
    let newDataRegion = countries.filter((element)=>
         element.region.includes(e.target.value)
    )
    setCountries(newDataRegion);

  }

  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          className="search"
          placeholder="Search for a Country."
          onChange={(e) => searchCounteries(e)}
        />
      </form>

      <div className="regionFilter">
        <select name="select" className="select"  onChange={(e) => searchByRegion(e)}>
          <option value="Filter by Region">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
};
export default Search;
