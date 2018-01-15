import React from 'react';
import {connect} from 'react-redux'
class Test extends React.Component {

    render() {
        let { increaseHundred, btnValue, btnCat} = this.props
        return (
            <div>
                {btnValue}
                <button onClick={increaseHundred}>增加100</button>
                {btnCat}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    const increase = state.increase
    return {
        btnValue: increase.btnValue,
        btnCat: increase.btnCat
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        increaseHundred: ()=> dispatch({
            type: 'INCREASEHUNDRED'
        })
    }
}

const Reat = connect(
    mapStateToProps,
    mapDispatchToProps
)(Test)


export default Reat 