import React from 'react';
import './App.css';

class Fruit extends React.Component{
  render(){
    return (
        <li>{this.props.name} - ${this.props.price}</li>
    )
  }
}

class Fruits extends React.Component{
  render(){
    return (
        <Fruit name="Apple" price="0.4" />
    )
  }
}

class App extends React.Component{
  render(){
    return (
      <ul>
        <Fruits />
      </ul>
    )
  }
}

export default App;
