

const counter = (state = { count: 0, muti: 1 }, action) => {
    const count = state.count;
    switch (action.type) {
        case 'INCREASE':
            return {
                count: count + 1
            }
        case 'DECREASE':
            console.log(action)
            return {
                count: count - 4
            }
        case 'MutliCount':
            let muti = state.muti;
            console.log(action.playLoad)
            return {
                muti: action.playLoad * muti
            }
        default:
            return state
    }
}

export default counter;