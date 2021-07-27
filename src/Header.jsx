import React from 'react';
import img from './images/img.png'
import './App.css';

const Header = () => {

    return(

        <>
<div className="header"> 
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">
      <img src={img} alt="" width="30" height="24" />
      <h5 className="float-left mt-3">  Google keep  </h5>  

    </a>

  </div>
</nav>
</div>
</>
    )



}
export default Header;