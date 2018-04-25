import React, { Component } from 'react';

class AddOption extends React.Component {
  state = {
    error: undefined
  };

  render() {
    return (
      <div>
        <form name="addoption" onSubmit={this.handleAddOption}>
          {this.state.error && <p>{this.state.error}</p>}
          <input type="text" id="me" name="addoption" />
          <button>
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
