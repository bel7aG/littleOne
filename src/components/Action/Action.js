import React, { Component } from 'react';

const Action = (props) => (
  <div>
    <button
      disabled={!props.checkOptionsLength}
      onClick={props.handlePick}
    >
      your chance with!
    </button>
  </div>
);

export default Action;
