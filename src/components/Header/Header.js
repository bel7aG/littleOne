import React, { Component } from 'react';

const Header = (props) => (
  <header className="header">
    <div className="heading">
      <h1 className="heading-primary">{props.title}</h1>
      <h4 className="heading-forth">{props.subtitle}</h4>
    </div>
  </header>
  );

export default Header;
