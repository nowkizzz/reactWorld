import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      btcNum:''
    }
  }
  changeValue( v) {
    console.log(v);
    this.setState({ btcNum: v})

  }
    render() {
        return ( 
        <div className = "App">
            <div className = "App-header" >
            < img src = { logo }
            className = "App-logo"
            alt = "logo" / >
            <h2> Welcome to React { this.state.btcNum}</h2> </div> < Test name = "AAAA"> </Test> 
            <Btc toApp={ this.changeValue}></Btc>

            <p className = "App-intro" >
            To get started, edit <code> src / App.js </code> and save to reload. </p> 
            <ArrLi></ArrLi>        
        </div>
        );
    }
}

class Test extends Component {
    render() {
        return ( <div> {
            this.props.name === 'AAA' ? ( <div> Hello World!NOWKI { this.props.name } </div>) : ( < h1 > BBBBBBBB </h1>)
        }  </div>)
    }
}

class Btc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: 1
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    this.setState(prevState => ({
      userName:prevState.userName + 1
    }))
    this.props.toApp(this.state.userName)
  }
  render() {
    return (
      <div>
        <h2>{ this.state.userName}</h2>
        <button onClick= { this.changeName }>CHANGE</button>
      </div>
    )
  }
}

class ArrLi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liArr : ['一代','二代','三代','四代']
    }
  }
  render() {
    const listItems = this.state.liArr.map( (value)=> 
      <li className = "arrLi" key={ value.toString()}>{value}</li> 
    )
    return (
      <div>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
}

export default App;
