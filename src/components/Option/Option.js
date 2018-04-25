import React, { Component } from 'react';

const Option = (props) => (
  <div>
    <li>{props.option}</li>
    <button
      onClick={
        () => props.handleDeleteOption(props.option)
      }
    >
      Remove
    </button>
  </div>
);

export default Option;
