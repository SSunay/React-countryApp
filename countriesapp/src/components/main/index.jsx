import axios from "axios";
import React, { useState, useEffect } from "react";
import "./index.scss";
import Search  from "../../components/search";
import { Link } from "react-router-dom";
const url = "https://restcountries.com/v2/all";

function Main( {darkMode, setDarkMode}) {
  const [countries, setCountries] = useState([]);
  // const handleDarkMode = ()=>{
  //   setIsDarkMode(!darkMode)
  // }
  useEffect(() => {
    axios.get(url).then((data) => setCountries(data.data));
    console.log(countries);
  }, []);
 
  return (
    <div>
      <div className="header">
        <div className="headerText">
          <h1>Where in the world?</h1>
          <button onClick={()=>{handleDarkMode()}}><i className="fa-solid fa-moon"></i>Dark mode</button>
        </div>  
      </div>

      <Search countries={countries} setCountries={setCountries}/>
      
      <section className="grid">
        {countries.map((country) => {
          const { numericCode, name, population, region, capital, flags } =
            country;

          return (
            <Link to={`/details/${country.name}`} key={country}>
            <article key={numericCode}>
              <div className="card">
                <img src={flags.svg}></img>
                <div className="cardText">
                <h3>{name}</h3>
                <h4>
                  Population: <span>{population}</span>
                </h4>
                <h4>
                  Region: <span>{region}</span>
                </h4>
                <h4>
                  Capital:<span> {capital}</span>
                </h4>
                </div>
              </div>
            </article>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Main;
