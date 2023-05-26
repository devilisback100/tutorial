import React from 'react';
import PropTypes from 'prop-types'
import { useEffect } from 'react';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Xy(props){

  
  return (  
 <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}   >
<div className={`container-fluid `}   >
    <a className="navbar-brand" href="/" >{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/Home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">about us</a>
        </li>
       
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div className={` form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-2 " type="checbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggle} />
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">{props.button_name}</label>
</div>
    </div>
  </div>
</nav>
  );
}
function Textarea(props) {
  

  useEffect(() => {
    let text = document.querySelector('#text');
    let colors = document.querySelector('#colors');
    colors.addEventListener('change', function () {
      text.style.color = colors.value;
    });
  }, []);


  let style1 = {
    margin: '30px',
  };

  return (
    <div style={style1}>
      <textarea id="text"  cols="77" rows="20"></textarea>
      <input type="color" id="colors" width="30px" height="30px" />
    </div>
  );
}
Xy.propTypes={title:PropTypes.string};
export {Xy,Textarea};
