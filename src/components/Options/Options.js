import React, { Component } from 'react';
import Option from './../Option';

const Options = (props) => (
  <div className="blocks options">
    <button className="btn-danger" onClick={props.handleRemoveAll}>RemoveAll</button>
    {props.options.length > 0 && (
      <ol className="options-list">
        {props.options.map((element) =>
          <Option
            key={Math.random() * Math.random()}
            option={element}
            handleDeleteOption={props.handleDeleteOption}
          />
        )}
      </ol>
    )}
  </div>
);

export default Options;
