import React, { Component } from 'react';

const Action = (props) => (
  <div className="action blocks">
    <button
      disabled={!props.checkOptionsLength}
      onClick={props.handlePick}
      className="btn-succes"
    >
      your chance with!
    </button>
  </div>
);

export default Action;
