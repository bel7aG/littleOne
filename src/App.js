import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Action from './components/Action';
import Options from './components/Options';
import AddOption from './components/AddOption';

class IndecisionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: ['React', 'Redux', 'EcmaScriptJS']
    };
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleChance = this.handleChance.bind(this);
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
    const title = `My Application`,
    subtitle = `using ReactJs the first and the best Library EVER`;
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          checkOptionsLength={this.state.options.length > 0}
          handleChance={this.handleChance}
        />
        <Options
          options={this.state.options}
          handleRemoveAll={this.handleRemoveAll}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }

  handleRemoveAll() {
    this.setState(() => ({options: []}));
  }

  handleChance() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[randomNum]);
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
}

export default IndecisionApp;
