import React, { Component } from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  render() {
    return (
      <div className="blocks">
        <form name="addoption" onSubmit={this.handleAddOption}>
          {this.state.error && <p className="errors">{this.state.error}</p>}
          <input type="text" id="me" name="addoption" />
          <button className="btn-active">
            Add Option
          </button>
        </form>
      </div>
    );
  }
  handleAddOption = (event) => {
    event.preventDefault();
    const myNewOption = event.target.addoption;
    this.setState(() => ({
      error: this.props.handleAddOption(myNewOption.value)
    }));
  }
}

export default AddOption;
