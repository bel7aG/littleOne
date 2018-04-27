import React, { Component } from 'react';

const Option = (props) => (
  <div className="option">
    <li>{props.option}</li>
    <button
      onClick={
        () => props.handleDeleteOption(props.option)
      }
      className="option-btn"
    >
      Remove
    </button>
  </div>
);

export default Option;
