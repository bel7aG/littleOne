import React, { Component } from 'react';
import "./Header.css";

const Header = (props) => (
  <div>
    <h1>{props.title}</h1>
    <h4>{props.subtitle}</h4>
  </div>
);

export default Header;
