import React from 'react';
import './reduxDemo.less';
import PropMan from './PropMan'
import {connect} from 'react-redux'


class MutliComp extends React.Component {
// handleMan(e,info) {
//   console.log(e,info)
// }
  render() {
    const {value,mutliCount} = this.props;
    return (
      <div className="center">
        <h1>kaka</h1>
          {/* <PropMan name = "卡卡" startGame ={this.handleMan}> </PropMan> */}
          <h3>{value}</h3>
          <button onClick={e => mutliCount(5)}>相乘</button>
      </div>
    )
  }
}
// 输入逻辑 由state => props
const mapStateToProps = (state) =>{
  console.log(state)
  return {
    value: state.counter.muti
  }
} 

// 输出逻辑 由组件传到store
const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    mutliCount: (count)=> dispatch({
      type:'MutliCount',
      playLoad : count
    })
  }
}

// 容器组件包含UI组件
const Todo = connect(
  mapStateToProps,
  mapDispatchToProps
)(MutliComp)


export default Todo