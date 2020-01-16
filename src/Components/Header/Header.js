import React from 'react';
import './Header.css';
import interstelar from './interstelar.jpg'
import thor from './thor.jpg';
import rampage from './rampage.jpg';
import avengers from './avengers.jpg';
import london from './movie6.jpg';
import movie4 from './movie4.jpg';


function Header() {
    return (
      <div className="container">
      <div className="box">
        <img src={interstelar} alt=''/>
        <span></span>
      </div>
      <div className="box">
        <img src={movie4} alt=''/>
        <span></span>
      </div>
      <div className="box">
        <img src={london} alt=''/>
        <span></span>
      </div>
      <div className="box">
        <img src={thor} alt=''/>
        <span></span>
      </div>
      <div className="box">
        <img src={avengers} alt=''/>
        <span></span>
      </div>
      <div className="box">
        <img src={rampage} alt=''/>
        <span></span>
      </div>
    </div>
    )
}

export default Header;