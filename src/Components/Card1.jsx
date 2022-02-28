import React, { useState } from 'react';

import './Card.css';
import { FaHeart } from "react-icons/fa";
import Data from "./Data"

function Card1({ data }) {

  return (

    <div className="job-card-main" >


      {Data.map((item) => {
       
        return (
          <>
            <div className="jobCard-first">
              <div className="jobCard-first-logo"><img src={item.image} className='hp' /></div>
              <div className="jobCard-first-rating"><p className='number'> {item.rating}</p></div>
            </div>
            <div className="jobCard-second">
              <p className='sub-title' >{item.title}</p>
              <p className='job-title'onClick={()=>{data(item.loc)}}>{item.job}</p>
              <p className='job-place'>{item.place}</p>
              <div className='tags'>
                <p> C#</p>
                <p> C++</p>
                <p> Python</p>
              </div>

            </div>
            <div className="jobCard-third">
              <div className="jobCard-third-heart"><i><FaHeart /></i></div>
              <div className="jobCard-third-date">{item.date}</div>
            </div>


          </>




        )
















      })}
















    </div>


  );
}

export default Card1