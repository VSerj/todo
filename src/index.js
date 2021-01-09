import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App(props) {
  return (
    <Border childLeft={<TextContent red="red" />}>
      <h1>{props.title}</h1>
      <p>How are yuo</p>
      {props.children}
    </Border>
  );
}

function Border(props) {
  return (
    <>
      <div className="border">{props.children}</div>
      {props.childLeft}
    </>
  );
}

function TextContent(props) {
  return <p className={props.red}>x=text Left</p>;
}
class SignUpDialog extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.state = { login: '' };
  }

  render() {
    return (
      <App
        title='Yo Nigga!!'
      >
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Запишите меня!</button>
      </App>
    );
  }

  handleChange(e) {
    this.setState({ login: e.target.value });
  }

  handleSignUp() {
    alert(`Добро пожаловать на борт, ${this.state.login}!`);
  }
}
ReactDOM.render(<SignUpDialog />, document.getElementById('root'));
