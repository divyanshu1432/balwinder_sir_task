import React from 'react';
import './App.css';

const Footer = () => {

    const year = new Date().getFullYear();
    // console.log(year)

return (

    <>
<footer className="footer">

copyright @ {year}



</footer>

    </>
)


}
export default Footer;
