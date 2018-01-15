const stateIncrease = {
    btnValue: 100,
    btnCat: 'cat'
}
const increase = (state = stateIncrease,action) => {
    console.log(state)
    const btnValue = state.btnValue
    switch(action.type) {
        case 'INCREASEHUNDRED':
            return {
                ...state,
                btnValue: btnValue + 100
            }
        default: 
            return state
    }
}

export default increase;
