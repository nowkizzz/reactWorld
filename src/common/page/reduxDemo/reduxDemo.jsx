import React from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {value,onIncreaseClick,onDecreaseClick} = this.props;
    return (
    <div>
      <button onClick={onIncreaseClick}>Increase</button>      
      <button onClick={onDecreaseClick}>Decrease</button>      
      <span>{value}</span>
    </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired
}

const mapStateToProps = (state)=>{
  return {
    value:state.count
  }
}

const increaseAction = {
  type:'INCREASE'
}

// 由props传给store
const mapDispatchToProps = (dispatch,ownProps)=>{
  return {
    onIncreaseClick:() => dispatch(increaseAction),
    onDecreaseClick:() => dispatch({  
      type:'DECREASE',
      playload:ownProps})
  }
}

const ReduxDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)


export default ReduxDemo;