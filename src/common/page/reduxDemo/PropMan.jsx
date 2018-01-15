import React from 'react';
import './reduxDemo.less';

class PropMan extends React.Component {
  constructor(props) {
    super();
    this.endGame = this.endGame.bind(this);
  }
  endGame() {
    this.props.startGame('abc','333');
  }

  render() {
    return (
      <div className="center">
        <h1>{this.props.name}</h1>
        <button onClick={(e)=>this.props.startGame(e,888)}>开始</button>
        <button onClick={(e)=>this.endGame()}>结束</button>
      </div>
    )
  }
}


export default PropMan