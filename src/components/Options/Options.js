import React, { Component } from 'react';
import Option from './../Option';

const Options = (props) => (
  <div>
    <button onClick={props.handleRemoveAll}>RemoveAll</button>
    {props.options.length > 0 && (
      <ol>
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
