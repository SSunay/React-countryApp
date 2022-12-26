import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import "./index.scss"

function Details() {

  const { name } = useParams();
  const navigate = useNavigate();
  const [detailInfo, setDetailInfo]=useState([])

  useEffect(()=>{
    axios
    .get(`https://restcountries.com/v3.1/name/${name}`)
    .then((data)=>setDetailInfo(data.data))
  },[]);

  return (
    <div className='detailPart'>
      {detailInfo.map((element)=>{
        return(
          <div key={element}>
            <button className='backBtn' onClick={()=>navigate(-1)}><i class="fa-solid fa-left-long"></i>Back</button>
            <div className='cardInfo'>
              <div className='image'>
                <img src={element.flags.png} alt=""/>
              </div>
              <div className='infoPart'>
                <h2>{element.name.common}</h2>
              </div>
              <div className='info'>
                <div className='left'>
                  <p>
                  <span className='name'>Native Name:</span>
                  <span className='value'>{Object.values(element.name.nativeName)[0].common}</span>
                  
                  </p>

                  <p>
                  <span className='name'>Population:</span>
                  <span className='value'>{element.population}</span>
                  
                  </p>
                  <p>
                      <span className="name">Sub Region:</span>
                      <span className="value">{element.subregion}</span>
                    </p>
                    <p>
                      <span className="name">Capital:</span>
                      <span className="value">{element.capital}</span>
                    </p>
                </div>
                <div className='right'>
                <p>
                      <span className="name">Top Level Domain:</span>
                      <span className="value">{element.tld}</span>
                    </p>
                    <p>
                      <span className="name">Currencies:</span>
                      <span className="value">{Object.values(element.currencies)[0].name}</span>
                    </p>
                    <p>
                    <span className="name">Languages:</span>
                      {Object.values(element.languages).map((el,i) => {
                        return <span key={i} className="value">{el}, </span>;
                      })}
                    </p>
                </div>
              </div>
              <div className="infoFooter">
                  <span>Border Countries: </span>
                  {element.borders?.map((el,i) => {
                    return (
                      <span key={i}>
                        <button>{el}</button>
                      </span>
                    );
                  })}
                </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Details