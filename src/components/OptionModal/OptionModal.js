import React, { Component } from 'react';
import Modal from 'react-modal';
const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    // onRequestClose={props.handleCloseOption}
    contentLabel="SelectedOption"
    className="blocks modal"
  >
    <h3>React Pick for You this one</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button
      onClick={props.handleCloseOption}
      className="btn-model"
    >
      I Understand
    </button>
  </Modal>
);

export default OptionModal;
