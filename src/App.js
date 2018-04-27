import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';
import OptionModal from './components/OptionModal';

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['React', 'Redux', 'EcmaScriptJS'],
      selectedOption: undefined
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }))
      }
    } catch(event) {

    }
  }
  componentWillUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = `IEEE iset Rades`,
    subtitle = `SUUUUUUUUUUUP`;
    return (
      <div className="container">
        <Header title={title} subtitle={subtitle}/>
        <div className="container-content">
          <Action
            checkOptionsLength={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <Options
            options={this.state.options}
            handleRemoveAll={this.handleRemoveAll}
            handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleCloseOption={this.handleCloseOption}
          />
        </div>
      </div>
        );
  }

  handleRemoveAll() {
    this.setState(() => ({options: []}));
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    console.log(option);
    this.setState(() =>
      ({
        selectedOption: option
      })
    );
  }

  handleAddOption(myValue) {
    if (myValue.trim().length === 0) {
      return `Invalid Value`;
    } else if (this.state.options.indexOf(myValue) > -1) {
      return `this Option Allready Exist Sorry`;
    }

    this.setState(prevState => ({
      options: prevState.options.concat(myValue)
    }));
  }

  handleDeleteOption = (option) => {
    console.log()
    this.setState(prevState => ({
      options: prevState.options.filter(element => element !== option)
    }));
  }

  handleCloseOption = () => {
    this.setState(() => ({selectedOption: undefined}))
  }
}

export default IndecisionApp;
