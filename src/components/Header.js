import React from 'react';

//worker component 
const Header = ({ title }) => (
  <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/things">Things</a>
    <h1>{title}</h1>
  
  </div>
);


export default Header;