import React from 'react';
import './Navigation.css'


const Navigation = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-transparent " style={{color: 'white'}}>
          <a className="navbar-brand" id='logo' href="http://localhost:3000/" style={{fontSize: '25px', color: 'white'}}>TV-Lab</a>
          <button  className="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="http://localhost:3000/"> <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/" style={{color: 'white'}}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="http://localhost:3000/" tabIndex="-1" aria-disabled="true"></a>
              </li>
            </ul>
            
          </div>
        </nav>
      )
  }

export default Navigation;