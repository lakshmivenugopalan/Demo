import { FormControl } from '@mui/material'
import React from 'react'
import {TiLocationArrowOutline} from "react-icons/ti"
import {RiSuitcase2Fill} from "react-icons/ri";
import {RiPriceTag3Line} from "react-icons/ri"

import './Search.css'
import { blue } from '@mui/material/colors';
function Search() {
  return (
    
    <div className="search-group">
      <div className="jobSearch">
        <input type="search"></input>
        </div>
        
      <div className="placeSearch">
      <TiLocationArrowOutline size={20}/> USA ,Florida
      </div>
      <div className="modeofWorking">
        <RiSuitcase2Fill size={20}/>
        Full-Time
      </div>
      <div className="salary">
        <RiPriceTag3Line size={20}/>
        6500-8500 $
      </div>
      <div className="searchButton">
        <button className="job">Find Job</button>
      </div>
    </div>
  )
}

export default Search