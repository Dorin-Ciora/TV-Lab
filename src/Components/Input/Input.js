import React from 'react';
import './Input.css'

const Input = ({ onButtonSearch, onInputChange }) => {
    return (
        <div className="pa1-l">
        <article className="bg-transparent mw7 center pa4 br2-ns ba b--black-10">
          <fieldset className="cf bn ma0 pa0">
            <legend className="pa0 f5 f4-ns mb3 black-80" style={{color:'white'}}>Your favorite informations about your favorite shows</legend>
            <div className="cf">
              <label className="clip" htmlFor="email-address">Email Address</label>
              <input className="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Search show" type="text" name="email-address" id="search-show" action="" onChange={onInputChange}/>
              <button type="button" className="btn btn-success" onClick={onButtonSearch}>Search</button>
            </div>
          </fieldset>
        </article>
      </div>
    )
}
 
export default Input;