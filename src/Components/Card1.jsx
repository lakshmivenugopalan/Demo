import React, { useState,useEffect } from 'react';

import './Card.css';
import { FaHeart } from "react-icons/fa";

import axios from 'axios';

function Card1({ data }) {

const [job,setJob]=useState([])

useEffect(() => {
  axios.get('http://localhost:9502/Jobs')
  .then(response => {
 
  const jobData=response.data;
  console.log(jobData)
  setJob(jobData)
 
});

}, [])
console.log("state",job)
  return (

    <div className="job-card-main" >


    {
     job.map((item) =>(
      <div className='job-first-main'>
      <div className="jobCard-first">
        <div className="jobCard-first-logo"><img src={item.image} className='hp' /></div>
        <div className="jobCard-first-rating"><p className='number'> {item.rating}</p></div>
      </div>
      <div className="jobCard-second">
        <p className='sub-title' >{item.title}</p>
        <p className='job-title'onClick={()=>{data(item)}}>{item.position}</p>
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


    </div>
     ))
    }
      

    </div>


  );
}

export default Card1