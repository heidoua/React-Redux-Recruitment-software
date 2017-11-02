 import React from 'react';
 import logoImage from './logo.png';
 import './logo.css';

 const Logo = ()=>(
     <div className="logo-container">
        <img src={logoImage} alt="logo"/>
     </div>
 );

 export default Logo;