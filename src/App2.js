import React from 'react';
import './App.css';

class Fruit extends React.Component{
  render(){
    var index = this.props.index;
    return (
        <li>
        {this.props.name} - ${this.props.price}
        <a href="#" onClick={(index) => {
          this.props.remove(index)
        }}>&times;</a>
        </li>
    )
  }
}

class Fruits extends React.Component{
  render(){
    return (
        <ul>
          {this.props.data.map((item, index) => {
              return <Fruit
                        key={index}
                        index={index}
                        name={item.name}
                        price={item.price}
                        remove={this.props.remove}
                        />
          })}
        </ul>
      )
  }
}

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      data: [
        {name: "Apple", price: 0.4},
        {name: "Orange", price: 0.3},
        {name: "Mango", price: 0.2}
      ]
    }

    this.input = React.createRef()
    this.remove = this.remove.bind(this)
  }

  remove(index) {
    var list = this.state.data
    list.splice(index, 1)
    this.setState({
      data: list
    })
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.input}/>
        <button onClick={() => {
            var list = this.state.data
            list.push({
              name: this.input.current.value,
              price: 0.6
            })
            this.setState({
              data: list
            })
          }}>
          +
        </button>
        <Fruits data={this.state.data} remove={this.remove} />
      </div>
      )
  }
}

export default App;
