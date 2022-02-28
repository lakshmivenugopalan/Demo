import React from 'react';
import { FaCertificate } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "../Components/User.css"
function User() {
  return (
   
    <div className="jobDetails-description">
    <div className="jobDetails-description-main">
      <div className="main-blank"></div>
      <div className="description-main-logo">
        <div className="main-logo-left"><i><img src='Images/micro.png' className='windows'/></i></div>
        <div className="main-logo-right">
          <i className='certificate'><FaCertificate/></i>
          <i className='sharing'><FaShareAlt/></i>
          <i className='icon-hearts'><FaRegHeart/></i>
        </div>
      </div>
      <div className="description-main-content">
        <div className="main-content-head">
          <p>Sr.Back-end Developer</p>
        </div>
        <div className="main-content-subHead">
          <p><span>Microsoft</span> . USA, San Francisco</p>
          <p className='subHead-right'>17 last day  .  94 apply</p>
        </div>
        <div className="main-content-para-t1">
          <p>Genel Bakis</p>
        </div>
        <div className="main-content-para-d1">
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is thatdistracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that

            distracted by the readable content of a page when
            looking at its layout. The point of using Lorem Ipsum is that
          </p>
        </div>
        <div className="main-content-para-t1">
          <p>Is tanimi</p>
        </div>
        <div className="main-content-para-d1">
          <p>It is a long established fact that a
             reader will be distracted by the readable content of a page when</p>
             <p>
               <li>
                  A keen wye for design and quality for user experience
                  <li>Experience using dev/build tools such as git</li>

               </li>
                </p> 
        </div>
      </div>
    </div>
  </div>


  )
}

export default User
